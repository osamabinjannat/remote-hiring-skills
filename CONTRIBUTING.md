# Contributing

Thanks for helping. You don't need to be a developer to contribute here. If you hire people, you already know what a good output looks like.

## Ways to help

| You want to... | Do this |
|---|---|
| Report an output that was wrong, biased or unhelpful | Open a [bad output report](https://github.com/osamabinjannat/remote-hiring-skills/issues/new?template=bad-output-report.yml) |
| Suggest a new skill | Open a [new skill idea](https://github.com/osamabinjannat/remote-hiring-skills/issues/new?template=new-skill-idea.yml) |
| Ask a question or share how you use the skills | Start a [discussion](https://github.com/osamabinjannat/remote-hiring-skills/discussions) |
| Improve a skill, example or test | Open a pull request (see below) |
| Build a new skill | Read "Adding a new skill" below |

Bad output reports are the most useful thing you can send. They show us exactly where a skill needs work.

## The rules every skill follows

These aren't optional. A pull request that breaks one won't be merged.

1. **AI drafts, humans decide.** Skills never score, rank, shortlist or reject real candidates. Asked to, they decline and offer something a human can use instead.
2. **No protected characteristics.** Never use or infer age, gender, religion, ethnicity, nationality, marital status, disability or photos.
3. **"Values alignment" or "culture add"**, never "culture fit".
4. **Flag legal topics** and tell the user to check with a local expert.
5. **Ready to use.** Tables, checklists and templates, not essays.
6. **Plain English.** Short sentences. Explain any HR jargon.
7. **Follow the [Agent Skills spec](https://agentskills.io/specification).**

The full detail, including the standard wording every skill uses, is in [CLAUDE.md](CLAUDE.md).

## Adding a new skill

1. **Open a [new skill idea](https://github.com/osamabinjannat/remote-hiring-skills/issues/new?template=new-skill-idea.yml) first.** We'll agree the scope before you spend time on it. Check the [roadmap](docs/roadmap.md) too: someone may already be on it.
2. **Copy the `template/` folder** to `skills/your-skill-name/`. Use lowercase letters and hyphens only, such as `reference-check-guide`.
3. **Fill in `SKILL.md`.** The template explains every section. Set `name` to exactly match the folder name. Write a `description` that says what the skill does and when to use it.
4. **Write one example.** `examples/input.md` is a realistic, made-up input. `examples/output.md` is what the skill produced from it.
5. **Write the tests.** 2 to 3 `test-*.md` files, plus one `misuse-*.md` file that asks the skill to rank or reject candidates. The skill must decline.
6. **Register the skill.** Add `"./skills/your-skill-name"` to the `skills` list in [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json), and add a row to the skills table in [README.md](README.md).
7. **Run the checks** (see below), then open a pull request.

Look at [`skills/role-intake`](skills/role-intake) for a complete, worked example of every file.

## Testing your skill

There's no code to run. You test a skill the way a user would use it.

1. Open your AI tool with the skill installed, or paste the whole `SKILL.md` into a new chat.
2. Paste the prompt from one of your test files.
3. Go through the "A good output must" checklist. Every box should be ticked.
4. Do the same for the misuse test. The skill must decline and offer an alternative.

If a box isn't ticked, improve `SKILL.md` and try again. Mention in your pull request which tests you ran and in which tool.

## The automatic checks

Every push and pull request runs two checks on GitHub:

| Check | What it looks at |
|---|---|
| **Validate skills** | Every `SKILL.md` has valid frontmatter, a `name` that matches its folder, a description within the length limit and a Guardrails section. Every skill has an example and tests. Every skill is listed in `marketplace.json`. `CLAUDE.md` and `AGENTS.md` match. |
| **Check links** | No broken links in any markdown file. |

If a check fails, open the failed check on your pull request. The error message says what to fix in plain English.

To run the skill check on your own computer first, install [Node.js](https://nodejs.org) and run this from the repo folder:

```
node .github/scripts/validate-skills.mjs
```

## What we won't accept

- Skills that score, rank, screen, shortlist or reject people, even "just as a suggestion".
- Analysis of faces, voices, video, personality or "confidence".
- Scraping candidate data from LinkedIn or anywhere else.
- **Real candidate data.** Examples and tests must use made-up people and companies. No real names, emails, phone numbers, CVs or interview notes.
- API keys, tokens or private links.
- Text copied from other people's work. Write it fresh.

## Writing style

Short, human and plain, like a good colleague explaining something.

- Short sentences. One idea per sentence.
- Plain words: "use", not "utilise".
- Explain HR jargon the first time, in brackets.
- British spelling (summarise, organisation) and no Oxford comma ("recruiters, founders and hiring managers").
- Tables and checklists over paragraphs.

## Contributing with an AI tool

Using Claude Code, Codex, Cursor or another AI tool? It will read [CLAUDE.md](CLAUDE.md) or [AGENTS.md](AGENTS.md) automatically. Both files hold the same rules. If you change one, change the other.

## Code of conduct

Everyone taking part agrees to our [Code of Conduct](CODE_OF_CONDUCT.md). Be kind. Assume good intent.
