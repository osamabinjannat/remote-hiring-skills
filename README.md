# Remote Hiring Skills

**Free AI skills that help hiring teams plan, interview, communicate and onboard for remote and cross-border roles.**

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/osamabinjannat/remote-hiring-skills?style=flat)](https://github.com/osamabinjannat/remote-hiring-skills/stargazers)
[![Latest release](https://img.shields.io/github/v/release/osamabinjannat/remote-hiring-skills)](https://github.com/osamabinjannat/remote-hiring-skills/releases/latest)

Eight [Agent Skills](https://agentskills.io) for recruiters, founders and hiring managers. Each one does one hiring task well: a role brief, a scorecard, a job post, an interview kit, a debrief, candidate emails, an onboarding plan or a time-to-hire audit.

They're built from how I've hired 150+ people, mostly in Pakistan for teams in the US, UK and Gulf. They work in Claude Code, Claude.ai, Codex, Cursor and any AI chat.

**Website:** [osamabinjannat.github.io/remote-hiring-skills](https://osamabinjannat.github.io/remote-hiring-skills/)

## AI drafts, humans decide

These skills **draft, structure and summarise**. They never score, rank, shortlist or reject real people.

| The skills will | The skills won't |
|---|---|
| Turn messy notes into a one-page role brief | Tell you who to hire |
| Build a scorecard for your panel to use | Fill in a scorecard for a real candidate |
| Organise interview notes into evidence per competency | Recommend hire or no-hire |
| Draft kind, clear candidate emails for you to edit | Decide who gets rejected |
| Show where candidates wait in your pipeline | Judge faces, voices or "confidence" |

Ask a skill to rank or reject someone and it will say no, explain why in a sentence and offer something useful instead. A hiring decision changes someone's life. It needs a person who can explain it and be held accountable for it.

Every skill also:

- ignores protected characteristics such as age, gender, religion, nationality and marital status, and says so when it removes them
- says "values alignment" or "culture add", never "culture fit"
- flags legal and compliance topics and tells you to check with a local expert
- gives you tables, checklists and templates, not essays

## The skills

| Stage | Skill | What you get |
|---|---|---|
| **Plan the role** | [`role-intake`](skills/role-intake) | A one-page role brief: why the role exists, 30/60/90-day success, must-haves, pay, location and timezone overlap |
| | [`scorecard-builder`](skills/scorecard-builder) | A weighted scorecard: 4 to 6 competencies, what strong and weak look like, and questions for each |
| | [`job-description-writer`](skills/job-description-writer) | An inclusive remote job post with pay, location and overlap hours at the top |
| **Interview** | [`remote-interview-kit`](skills/remote-interview-kit) | A structured interview loop with checks for timezone overlap, async writing and remote-readiness |
| | [`interview-debrief`](skills/interview-debrief) | Evidence per competency, where interviewers disagree and open questions. The panel decides |
| **Communicate** | [`candidate-emails`](skills/candidate-emails) | Rejection, feedback, update and offer-stage emails that sound human. Every draft is for a person to review |
| **Onboard** | [`remote-onboarding-plan`](skills/remote-onboarding-plan) | A first-30-days plan: setup before day one, a buddy, check-ins and a first real deliverable |
| **Improve** | [`time-to-hire-audit`](skills/time-to-hire-audit) | Paste your pipeline data and see where candidates wait longest, with fixes |

Each skill folder has the skill itself, a worked example and tests.

## Install

### Claude Code

Run these two commands inside Claude Code:

```
/plugin marketplace add osamabinjannat/remote-hiring-skills
/plugin install remote-hiring-skills@remote-hiring-skills
```

That's it. All eight skills are now available. Claude picks the right one from what you type.

### Claude.ai

1. Download the ZIP for the skill you want from the [latest release](https://github.com/osamabinjannat/remote-hiring-skills/releases/latest). Or zip a skill folder yourself, keeping the folder inside the ZIP.
2. In Claude.ai, go to **Settings > Capabilities** and turn on **Code execution and file creation**.
3. Go to **Customize > Skills**, click **+**, then **+ Create skill**, then **Upload a skill**.
4. Upload the ZIP and switch the skill on.

Custom skills work on Free, Pro, Max, Team and Enterprise plans. On Team and Enterprise, an owner may need to allow them. See [Anthropic's guide](https://support.claude.com/en/articles/12512180-using-skills-in-claude).

### Codex, Cursor and other tools

Most AI coding tools now read the same skill format. The quickest way to install is the open-source [`skills`](https://skills.sh) installer:

```
npx skills add osamabinjannat/remote-hiring-skills
```

Or copy the folders by hand. Codex and Cursor both read skills from `~/.agents/skills/`:

```
git clone https://github.com/osamabinjannat/remote-hiring-skills.git
mkdir -p ~/.agents/skills
cp -r remote-hiring-skills/skills/* ~/.agents/skills/
```

### Any AI chat

Open any `SKILL.md` file, copy everything and paste it into ChatGPT, Gemini or any other AI chat as your first message. Then give it your task. Each skill works as a plain prompt.

## Quick start (60 seconds)

1. Install the skills (see above).
2. Paste your notes from a hiring manager conversation, however messy:

   > Can you turn my intake notes into a role brief? We need a customer success manager, remote in Pakistan, for our US team. They'll look after 40 clinic accounts. Budget $1,800 to $2,400 a month. Needs 4 hours overlap with US Central mornings. The manager wants "5+ years SaaS, native English, preferably female".

3. You get a one-page role brief with must-haves, overlap hours in both time zones, open questions and a note on what was removed and why.
4. Keep going: "Turn this into a scorecard", then "Write the job post", then "Build the interview kit".

## Before and after

**Before:** the hiring manager's wish list, straight from intake notes.

```
- 5+ yrs SaaS customer success
- business degree
- native English speaker, clinic owners are American
- "preferably female, our clinic owners seem to like talking to women"
- healthcare software experience
- knows HubSpot
- can explain software to non-tech people
- good at difficult convos
- writes clearly
- young and energetic, the team is young
```

**After:** what `role-intake` wrote.

| # | Must be able to... | How we'll check it |
|---|---|---|
| 1 | Lead a client call in fluent spoken English and explain software simply to non-technical people | Mock client call |
| 2 | Stay calm and solve the problem when a client is upset, for example when their bookings have broken | Mock client call |
| 3 | Write clear, friendly emails and ticket replies | Short written exercise |
| 4 | Keep track of many client accounts at once: check-ins, renewals and follow-ups | Hiring manager interview |
| 5 | Work 9am to 1pm US Central, Monday to Friday | Recruiter screen |

> **Notes on this draft**
> - Removed "preferably female". Gender can't be a hiring requirement.
> - Removed "young and energetic". Age can't be a hiring requirement.
> - Replaced "native English speaker" with "fluent spoken English".
> - Moved "business degree" to "Deliberately not required".

See the [full example](skills/role-intake/examples/output.md).

## How I hire

The skills are built on a public playbook: [**How I hire**](docs/hiring-playbook.md). It covers role intake, scorecards, job posts, remote interviews, debriefs, candidate emails, onboarding and pipeline speed, and why time-to-hire is a queueing problem, not a sourcing problem.

## Roadmap

Next up: outreach messages, a reference check guide, a take-home assignment designer, a cross-border offer checklist, a hiring process health check and a kit for candidates. See the [roadmap](docs/roadmap.md).

## Contributing

New skills, better examples and bug reports are all welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md). There's a [template](template) to copy, and automatic checks tell you in plain English if anything is missing.

Got a bad output? [Report it](https://github.com/osamabinjannat/remote-hiring-skills/issues/new/choose). That's the most useful contribution of all.

## License

[MIT](LICENSE). Free to use, change and share, including at work.

---

Made by [Osama Bin Jannat](https://www.osamabinjannat.com), Chief People Officer at Z360 and founder of ScholyHub and Remotire.
