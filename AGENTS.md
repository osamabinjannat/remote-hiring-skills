# remote-hiring-skills

Instructions for AI coding agents (Claude Code, Codex, Cursor and others) and for people who contribute to this repo.

`CLAUDE.md` and `AGENTS.md` hold the same content. If you change one, change the other in the same commit.

## What this project is

A free, open-source (MIT) set of Agent Skills for hiring teams. Each skill helps a recruiter, founder or hiring manager do one hiring task well with AI.

It works three ways:

1. **Claude Code**: install in one line from this repo's plugin marketplace.
2. **Claude.ai**: upload a single skill folder.
3. **Any other AI tool** (Cursor, Codex, ChatGPT and so on): read the `SKILL.md` as a plain prompt.

The focus is remote and cross-border hiring, for example a team in Pakistan hiring for the US, UK or Gulf.

Maintainer: Osama Bin Jannat ([osamabinjannat.com](https://www.osamabinjannat.com)).

## The core principle: AI drafts, humans decide

Skills draft, structure and summarise. They never score, rank, reject or make decisions about real people.

Every skill, test, example and doc in this repo must follow this. If a change breaks it, don't make the change.

## Rules every skill must follow

1. **No decisions about real people.** Never score, rank, shortlist or reject real candidates. If asked to, decline in one or two sentences, say why, and offer something a human can use instead (a scorecard, an evidence table or a structured summary).
2. **No protected characteristics.** Never use or infer age, gender, religion, ethnicity, nationality, marital status, disability or photos in any hiring judgment. If the input contains them, leave them out of the output and say so.
3. **Say "values alignment" or "culture add".** Never "culture fit". It is vague and often hides bias.
4. **Flag legal and compliance topics.** Anything that looks like legal, tax, visa or employment-law advice gets a flag telling the user to check with a local expert. This matters most for cross-border contracts.
5. **Ready to use.** Outputs are tables, checklists and templates, not essays.
6. **Plain English.** Short sentences. Explain any HR jargon the first time you use it.
7. **Follow the Agent Skills spec.** See "Skill format" below.

### Standard wording

Use these so every skill behaves the same way.

**Declining a ranking or rejection request** (a skill about people already hired may say "new hires" instead of "candidates"):

> I can't rank, score or reject candidates. Those are decisions about real people, and they need a human who can be held accountable for them. Here's what I can do instead: [alternative].

**Legal flag:**

> **Legal check:** This touches on [topic]. Rules differ by country. Check with a local employment lawyer or HR expert before you act on it.

**Human review footer** (on every draft meant to be sent to a candidate):

> **Before you send:** A person must read and edit this draft. Check names, dates, facts and tone.

## Writing style

The tone is short, human and plain, like a good colleague explaining something. Not corporate, not hype.

- Short sentences. One idea per sentence.
- Plain words: "use" not "utilise", "help" not "facilitate", "start" not "commence".
- Explain jargon in brackets the first time, for example "scorecard (a list of what the role needs and what good looks like)".
- Write to the reader as "you". Use active voice.
- British spelling: summarise, organisation, prioritise, behaviour.
- No Oxford comma: "recruiters, founders and hiring managers".
- Use "they" for any person whose pronouns you don't know.
- Prefer tables, checklists and templates to paragraphs.
- Headings are short and say what the section is for.

Words and phrases to avoid in skill outputs, especially job posts:

| Avoid | Why | Use instead |
|---|---|---|
| culture fit | Vague, hides bias | values alignment, culture add |
| rockstar, ninja, guru | Puts many people off applying | the actual skill, e.g. "experienced backend engineer" |
| young, energetic, digital native | Age-coded | describe the work, e.g. "comfortable learning new tools" |
| he / she, manpower, chairman | Gendered | they, team, chair |
| native English speaker | Excludes on origin | fluent written and spoken English |
| must have 10+ years | Years are a weak proxy | what the person must be able to do |

## Repo structure

This is the target structure. Update it when it changes.

```
remote-hiring-skills/
├── .claude-plugin/
│   └── marketplace.json         # makes this repo a Claude Code plugin marketplace
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── config.yml           # turns off blank issues, sends questions to Discussions
│   │   ├── new-skill-idea.yml
│   │   └── bad-output-report.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── scripts/
│   │   └── validate-skills.mjs  # the checker the workflows run (Node, no packages)
│   └── workflows/
│       ├── validate-skills.yml  # frontmatter, folders, guardrails, CLAUDE.md = AGENTS.md
│       └── check-links.yml      # broken links in markdown files
├── assets/
│   └── social-preview.png       # 1280×640, uploaded by hand in GitHub Settings
├── docs/
│   ├── index.html               # the one-page website (GitHub Pages serves docs/)
│   ├── .nojekyll                # tells GitHub Pages to serve files as they are
│   ├── hiring-playbook.md       # how we hire; source material for every skill
│   └── roadmap.md               # skills planned next
├── skills/
│   └── <skill-name>/
│       ├── SKILL.md             # the skill itself
│       ├── templates/           # optional: blank templates the skill fills in
│       ├── examples/
│       │   ├── input.md         # one realistic, made-up input
│       │   └── output.md        # what the skill produced from it
│       └── tests/
│           ├── test-1-<topic>.md
│           ├── test-2-<topic>.md
│           └── misuse-<topic>.md   # asks the skill to rank or reject; it must decline
├── template/                    # copy this folder to start a new skill
├── AGENTS.md                    # same content as CLAUDE.md
├── CLAUDE.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

### Skills (v1.0)

| Stage | Skill | What it does |
|---|---|---|
| Plan the role | `role-intake` | Runs a hiring manager intake and writes a one-page role brief |
| Plan the role | `scorecard-builder` | Turns the role brief into a weighted scorecard with interview questions |
| Plan the role | `job-description-writer` | Writes a clear, inclusive remote job post with salary and timezone upfront |
| Interview | `remote-interview-kit` | Builds a structured interview loop with remote-readiness checks |
| Interview | `interview-debrief` | Turns interviewer notes into a structured debrief. Never recommends hire or no-hire |
| Communicate | `candidate-emails` | Drafts kind, human candidate emails for a person to review |
| Onboard | `remote-onboarding-plan` | Writes a first-30-days plan for a remote hire |
| Improve | `time-to-hire-audit` | Shows where candidates wait longest in a pipeline and suggests fixes |

## Skill format

Every `skills/<name>/SKILL.md` follows the [Agent Skills spec](https://agentskills.io/specification), the same format as [anthropics/skills](https://github.com/anthropics/skills).

**Frontmatter** (the block between the `---` lines at the top):

- Only these fields are allowed: `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools`. We use `name`, `description` and `license: MIT`.
- `name`: 1 to 64 characters. Lowercase letters, numbers and single hyphens only. No hyphen at the start or end. Must match the folder name exactly.
- `description`: 1 to 1024 characters. Says what the skill does **and** when to use it, with the words a recruiter would actually type. No `<` or `>` characters.

**Body:**

- Under 500 lines.
- Imperative steps ("Ask for...", "Write..."), the exact output format, a "check before you hand it over" list and a `## Guardrails` section.
- **Each SKILL.md is self-contained.** People upload one skill at a time to Claude.ai, and people using other tools paste `SKILL.md` as a plain prompt. So the output format lives inside `SKILL.md`, and every skill carries its own copy of the guardrails and standard wording.
- `templates/` holds blank forms a person can fill in by hand, without AI. They mirror the skill's output format.

**Every skill folder must have:**

- `examples/input.md` and `examples/output.md`: one realistic, made-up case. The output is what the skill actually produces from that input.
- `tests/` with 2 to 3 `test-*.md` files. Each has a prompt and a checklist of what a good output must include.
- One `tests/misuse-*.md` file that asks the skill to rank or reject candidates. The checklist confirms the skill declines and offers a helpful alternative.

Test files use this shape (the checker looks for the two `##` headings and at least 3 checklist items). Misuse files start with `# Misuse test:` instead of `# Test:`.

```markdown
# Test: [what this tests]

**Skill:** [skill-name] · **Type:** standard | misuse

> Everything here is made up. [Company] is a fictional company and all names are invented.

## Prompt

> [exactly what a user would type]

## A good output must

- [ ] ...

## A good output must not

- [ ] ...
```

Run the checker from the repo root with `node .github/scripts/validate-skills.mjs`. GitHub runs it on every push and pull request.

### Example data

All examples and tests use made-up people and companies, and say so at the top. The v1.0 examples follow one fictional story so they connect: **Fernhill**, a US company (Austin, US Central time) that makes booking software for physiotherapy clinics, hiring a remote **Customer Success Manager based in Pakistan**. Hiring manager Rachel Moore (Head of Customer Success), recruiter Hamza Raza, panel members Daniel Okafor (Senior CSM) and Priya Nair (Head of Product). Pay USD 1,800 to 2,400 a month as a contractor. Overlap 9am to 1pm US Central. See `skills/role-intake/examples/output.md` for the full brief.

## Working rules for AI agents and contributors

- **Ask before anything that can't be undone:** deleting files, force-pushing, rewriting history or making anything public.
- **No real candidate data. Ever.** Examples and tests use made-up people, companies and details. No real names, emails, phone numbers, CVs or interview notes.
- **No secrets.** No API keys, tokens or private links in any file.
- **Write fresh.** Reference repos are for structure and ideas only. Don't copy their text.
- **Small, clear commits.** One commit per skill or per logical change.
- **If something here is wrong or outdated**, say so and suggest a fix. Don't guess.
