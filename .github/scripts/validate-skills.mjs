#!/usr/bin/env node
// Checks every skill in skills/ against the Agent Skills spec and this repo's rules.
// Run it from the repo root:  node .github/scripts/validate-skills.mjs
// No packages to install. Exit code 1 means at least one problem was found.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SKILLS_DIR = join(ROOT, "skills");
const ALLOWED_FIELDS = ["name", "description", "license", "compatibility", "metadata", "allowed-tools"];
const NAME_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const MAX_SKILL_LINES = 500;

const problems = [];
const warnings = [];
const problem = (where, message) => problems.push(`${where}: ${message}`);
const warn = (where, message) => warnings.push(`${where}: ${message}`);

const read = (path) => readFileSync(path, "utf8").replace(/\r\n/g, "\n");
const isDir = (path) => existsSync(path) && statSync(path).isDirectory();
const filesIn = (dir) => (isDir(dir) ? readdirSync(dir).filter((f) => statSync(join(dir, f)).isFile()) : []);

// A small YAML reader for SKILL.md frontmatter. It understands what skills need:
// "key: value", quoted values, "key: >" or "key: |" blocks, and one level of nested keys.
// It is stricter than full YAML on purpose, so anything it rejects is worth fixing.
function parseFrontmatter(text, where) {
  const match = text.match(/^---\n([\s\S]*?)\n---(\n|$)/);
  if (!match) {
    problem(where, "the file must start with frontmatter: a line with ---, the fields, then another line with ---.");
    return null;
  }
  const lines = match[1].split("\n");
  const data = {};
  let i = 0;

  const readScalar = (raw, lineNo) => {
    const value = raw.trim();
    if (value.startsWith('"') || value.startsWith("'")) {
      const quote = value[0];
      if (value.length < 2 || !value.endsWith(quote)) {
        problem(where, `line ${lineNo} of the frontmatter opens a quote but doesn't close it.`);
        return "";
      }
      return value.slice(1, -1);
    }
    if (/^[\[{&*!%@`|>]/.test(value)) {
      problem(where, `line ${lineNo} of the frontmatter starts with a special YAML character. Put the value in double quotes.`);
    }
    if (value.includes(": ")) {
      problem(where, `line ${lineNo} of the frontmatter has ": " inside a value, which breaks YAML. Put the value in double quotes or use "key: >" on its own line.`);
    }
    if (value.includes(" #")) {
      problem(where, `line ${lineNo} of the frontmatter has " #", which YAML reads as a comment. Put the value in double quotes.`);
    }
    return value;
  };

  while (i < lines.length) {
    const line = lines[i];
    const lineNo = i + 1;
    if (line.trim() === "" || line.trim().startsWith("#")) {
      i++;
      continue;
    }
    const kv = line.match(/^([A-Za-z][A-Za-z0-9_-]*):(\s+(.*))?$/);
    if (!kv) {
      problem(where, `couldn't read line ${lineNo} of the frontmatter: "${line}". Each line should look like "key: value".`);
      i++;
      continue;
    }
    const key = kv[1];
    const rest = (kv[3] || "").trim();
    if (key in data) problem(where, `the field "${key}" appears twice in the frontmatter.`);
    i++;

    if (/^[>|][+-]?$/.test(rest)) {
      // Block value: collect the indented lines that follow.
      const block = [];
      while (i < lines.length && (lines[i].startsWith(" ") || lines[i].trim() === "")) {
        block.push(lines[i].trim());
        i++;
      }
      data[key] = rest.startsWith(">") ? block.join(" ").replace(/\s+/g, " ").trim() : block.join("\n").trim();
    } else if (rest === "") {
      // Nested keys (used by "metadata").
      const nested = {};
      while (i < lines.length && (lines[i].startsWith(" ") || lines[i].trim() === "")) {
        if (lines[i].trim() !== "") {
          const sub = lines[i].trim().match(/^([A-Za-z0-9_.-]+):\s+(.+)$/);
          if (sub) nested[sub[1]] = readScalar(sub[2], i + 1);
          else problem(where, `couldn't read line ${i + 1} of the frontmatter: "${lines[i].trim()}".`);
        }
        i++;
      }
      data[key] = nested;
    } else {
      let value = readScalar(rest, lineNo);
      // Plain values can carry on over indented lines.
      while (i < lines.length && lines[i].startsWith(" ") && lines[i].trim() !== "") {
        value += " " + lines[i].trim();
        i++;
      }
      data[key] = value;
    }
  }
  return { data, body: text.slice(match[0].length) };
}

function checkSkillMd(skillDir, folderName) {
  const where = `skills/${folderName}/SKILL.md`;
  const path = join(skillDir, "SKILL.md");
  if (!existsSync(path)) {
    problem(`skills/${folderName}`, "every skill folder needs a SKILL.md file.");
    return;
  }
  const text = read(path);
  const parsed = parseFrontmatter(text, where);
  if (!parsed) return;
  const { data, body } = parsed;

  for (const key of Object.keys(data)) {
    if (!ALLOWED_FIELDS.includes(key)) {
      problem(where, `"${key}" isn't an allowed frontmatter field. Allowed: ${ALLOWED_FIELDS.join(", ")}.`);
    }
  }

  const name = data.name;
  if (typeof name !== "string" || name === "") {
    problem(where, 'the frontmatter needs a "name".');
  } else {
    if (name.length > 64) problem(where, `the name is ${name.length} characters. The limit is 64.`);
    if (!NAME_PATTERN.test(name)) {
      problem(where, `the name "${name}" must use lowercase letters, numbers and single hyphens only, with no hyphen at the start or end.`);
    }
    if (name !== folderName) problem(where, `the name "${name}" must match the folder name "${folderName}".`);
  }

  const description = data.description;
  if (typeof description !== "string" || description.trim() === "") {
    problem(where, 'the frontmatter needs a "description" saying what the skill does and when to use it.');
  } else {
    if (description.length > 1024) problem(where, `the description is ${description.length} characters. The limit is 1024.`);
    if (/[<>]/.test(description)) problem(where, "the description can't contain < or > characters.");
    if (description.length < 80) warn(where, "the description is very short. Say what the skill does and when to use it.");
  }

  if (data.compatibility !== undefined) {
    if (typeof data.compatibility !== "string" || data.compatibility.length === 0 || data.compatibility.length > 500) {
      problem(where, '"compatibility" must be text between 1 and 500 characters.');
    }
  }
  if (data.metadata !== undefined && (typeof data.metadata !== "object" || Array.isArray(data.metadata))) {
    problem(where, '"metadata" must be a list of "key: value" lines indented under it.');
  }

  const lineCount = text.split("\n").length;
  if (lineCount > MAX_SKILL_LINES) {
    problem(where, `the file is ${lineCount} lines. Keep it under ${MAX_SKILL_LINES} and move long material into templates/.`);
  }
  if (!/^## Guardrails\s*$/m.test(body)) {
    problem(where, 'add a "## Guardrails" section. Every skill carries its own copy of the core rules.');
  }
}

function checkTestFile(dir, file, where) {
  const text = read(join(dir, file));
  if (!/^## Prompt\s*$/m.test(text)) problem(`${where}/${file}`, 'add a "## Prompt" section with the exact prompt to test.');
  if (!/^## A good output must\s*$/m.test(text)) problem(`${where}/${file}`, 'add a "## A good output must" section with a checklist.');
  const boxes = (text.match(/^- \[ \] /gm) || []).length;
  if (boxes < 3) problem(`${where}/${file}`, `the checklist has ${boxes} item(s). Add at least 3 lines starting with "- [ ] ".`);
}

function checkFolders(skillDir, folderName) {
  const where = `skills/${folderName}`;

  const examples = join(skillDir, "examples");
  if (!isDir(examples)) {
    problem(where, "add an examples/ folder with input.md and output.md.");
  } else {
    for (const f of ["input.md", "output.md"]) {
      if (!existsSync(join(examples, f))) problem(`${where}/examples`, `add ${f}.`);
    }
  }

  const tests = join(skillDir, "tests");
  if (!isDir(tests)) {
    problem(where, "add a tests/ folder with 2 to 3 test-*.md files and at least one misuse-*.md file.");
    return;
  }
  const files = filesIn(tests);
  const normal = files.filter((f) => /^test-.+\.md$/.test(f));
  const misuse = files.filter((f) => /^misuse-.+\.md$/.test(f));
  if (normal.length < 2 || normal.length > 3) {
    problem(`${where}/tests`, `found ${normal.length} test-*.md file(s). Each skill needs 2 to 3.`);
  }
  if (misuse.length < 1) {
    problem(`${where}/tests`, "add a misuse-*.md test that asks the skill to rank or reject candidates. The skill must decline.");
  }
  for (const f of [...normal, ...misuse]) checkTestFile(tests, f, `${where}/tests`);
}

function checkMarketplace(skillFolders) {
  const where = ".claude-plugin/marketplace.json";
  const path = join(ROOT, where);
  if (!existsSync(path)) {
    problem(where, "the file is missing. It's what makes the repo installable in Claude Code.");
    return;
  }
  let json;
  try {
    json = JSON.parse(read(path));
  } catch (error) {
    problem(where, `isn't valid JSON: ${error.message}`);
    return;
  }
  const listed = (json.plugins || []).flatMap((p) => p.skills || []).map((s) => s.replace(/^\.\//, "").replace(/\/$/, ""));
  for (const folder of skillFolders) {
    if (!listed.includes(`skills/${folder}`)) problem(where, `add "./skills/${folder}" to the plugin's "skills" list so people can install it.`);
  }
  for (const entry of listed) {
    if (!isDir(join(ROOT, entry))) problem(where, `lists "./${entry}" but that folder doesn't exist.`);
  }
}

function checkAgentFiles() {
  const claude = join(ROOT, "CLAUDE.md");
  const agents = join(ROOT, "AGENTS.md");
  if (!existsSync(claude) || !existsSync(agents)) {
    problem("CLAUDE.md / AGENTS.md", "both files must exist.");
  } else if (read(claude) !== read(agents)) {
    problem("CLAUDE.md / AGENTS.md", "these two files must be identical. Copy your change into the other file.");
  }
}

// Run all checks.
if (!isDir(SKILLS_DIR)) {
  problem("skills/", "the folder is missing.");
} else {
  const folders = readdirSync(SKILLS_DIR).filter((f) => isDir(join(SKILLS_DIR, f)));
  if (folders.length === 0) problem("skills/", "there are no skills yet.");
  for (const folder of folders) {
    checkSkillMd(join(SKILLS_DIR, folder), folder);
    checkFolders(join(SKILLS_DIR, folder), folder);
  }
  checkMarketplace(folders);
  console.log(`Checked ${folders.length} skill(s).`);
}
checkAgentFiles();

for (const w of warnings) console.log(`⚠ ${w}`);
if (problems.length > 0) {
  console.log(`\n✗ Found ${problems.length} problem(s):\n`);
  for (const p of problems) console.log(`  - ${p}`);
  console.log("\nSee CONTRIBUTING.md for the rules each skill must follow.");
  process.exit(1);
}
console.log("✓ All checks passed.");
