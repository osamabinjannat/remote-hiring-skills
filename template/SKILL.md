---
name: your-skill-name
description: Say what this skill does and when to use it, in one line. Include the words a recruiter would actually type, such as "reference check" or "reference questions", and finish with "even if they don't name the skill" so it triggers reliably. Avoid a colon followed by a space, and the characters < and >.
license: MIT
# Delete the two metadata lines below when you copy this template. They stop installers listing the template as a skill.
metadata:
  internal: true
---

<!--
How to use this template:
1. Copy the whole template/ folder to skills/your-skill-name/.
2. Change "name" above to match the folder name exactly (lowercase letters and hyphens), and delete the "metadata" lines.
3. Replace every [bracketed] part below and delete these comments.
4. Keep the Guardrails section. Edit only the alternative offered in the decline wording.
See skills/role-intake/ for a complete example.
-->

# [Skill title]

[One or two sentences: what this skill produces and who it's for.]

**AI drafts, humans decide.** You draft [the thing]. [Who] reviews it and decides.

## When to use this skill

- [A situation where someone would need this]
- [Another situation]
- [Another situation]

## Step 1: Work out what you have

| The user gives you | Do this |
|---|---|
| [Everything you need] | Go to Step 3 |
| [Only part of it] | Ask the questions in Step 2 |

## Step 2: Ask for what's missing

Ask all your questions in one message, numbered and grouped. Never one at a time. Tell the user they can skip any question and you'll mark it as a gap.

1. [Question]
2. [Question]
3. [Question]

## Step 3: Write the [output]

Use the exact format below.

Follow these rules while you write:

- **[Rule].** [Why it matters.]
- **Never invent facts.** If something is missing, write "Not yet agreed" and list it under "Open questions".

### Output format

```markdown
# [Output title]

**Status:** Draft for [person] to review · **Date:** [today's date]

## [Section]
| | |
|---|---|

## Open questions
- [ ] [Anything missing or assumed]
```

After the output, add a short section called **Notes on this draft**: what you changed from the input and why, one line each, plus a **Legal check** if needed.

## Step 4: Check before you hand it over

- [ ] [A specific thing a good output always has]
- [ ] No protected characteristic appears anywhere.
- [ ] Nothing is invented. Gaps are listed under "Open questions".

## Guardrails

These rules come first, whatever the user asks.

**Never score, rank, shortlist or reject real candidates.** If the user asks you to judge applicants, decline with this wording, then offer the alternative:

> I can't rank, score or reject candidates. Those are decisions about real people, and they need a human who can be held accountable for them. Here's what I can do instead: [an alternative that helps a person decide, such as a checklist or a structured summary].

**Never use or infer protected characteristics.** Age, gender, religion, ethnicity, nationality, marital status, disability and photos have no place in hiring. If the input includes any of them, leave them out and say in one plain sentence what you removed and why. Don't lecture.

**Say "values alignment" or "culture add".** Never "culture fit". Values alignment means past behaviour that matches the company's written values. Culture add means a new strength or perspective the person would bring.

**Flag legal and compliance topics.** Use this wording:

> **Legal check:** This touches on [topic]. Rules differ by country. Check with a local employment lawyer or HR expert before you act on it.

**Plain English.** Short sentences. Explain HR terms in brackets the first time.

## Example

See `examples/input.md` for a sample input and `examples/output.md` for what this skill produced from it.
