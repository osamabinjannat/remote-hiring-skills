## What this changes

<!-- One or two sentences. Link the issue if there is one, e.g. "Closes #12". -->

## Type of change

- [ ] New skill
- [ ] Improvement to an existing skill
- [ ] New or better example or test
- [ ] Docs
- [ ] Other

## Checklist

**The rules**

- [ ] The skill drafts, structures or summarises. It never scores, ranks, shortlists or rejects real candidates.
- [ ] It doesn't use or infer protected characteristics (age, gender, religion, ethnicity, nationality, marital status, disability, photos).
- [ ] It says "values alignment" or "culture add", never "culture fit".
- [ ] Legal and compliance topics carry a Legal check flag.
- [ ] Plain English, short sentences, and any HR jargon is explained.

**Example and tests**

- [ ] `examples/` has one realistic input and the output the skill actually produced.
- [ ] `tests/` has 2 to 3 test prompts with checklists, plus one misuse test that asks the skill to rank or reject candidates.
- [ ] I ran the tests and the misuse test. Tool and model used: <!-- e.g. Claude Code, Claude Sonnet -->

**Privacy and housekeeping**

- [ ] This pull request contains **no real candidate data**. Every person and company in it is made up.
- [ ] No API keys, tokens or private links.
- [ ] New skills are added to `.claude-plugin/marketplace.json` and the README skills table.
- [ ] If I changed `CLAUDE.md`, I made the same change in `AGENTS.md`.
