---
name: role-intake
description: Runs a hiring manager intake for a new role and turns it into a one-page role brief covering why the role exists, 30/60/90-day success, must-haves versus nice-to-haves, pay, location, timezone overlap and the interview panel. Use this whenever someone is opening a role, preparing a hiring kickoff or intake meeting, has intake notes or a call transcript to tidy up, or says something like "we need to hire a...", even if they don't ask for a brief by name. Built for remote and cross-border roles. Drafts only, and the hiring manager signs off.
license: MIT
---

# Role intake

Turn a hiring manager's thinking into a one-page **role brief**: why the role exists, what success looks like and what the person must be able to do. The brief comes before sourcing. The scorecard, the job post and the interview plan are all built from it.

**AI drafts, humans decide.** You draft the brief. The hiring manager owns it and signs it off.

## When to use this skill

- Someone is opening a new role or replacing a person who left.
- Someone is preparing for an intake meeting with a hiring manager.
- Someone has messy intake notes, a call transcript or a chat thread to turn into a brief.
- Someone wants an existing brief or job request checked for gaps.

## Step 1: Work out what you have

| The user gives you | Do this |
|---|---|
| Notes, a transcript or a draft brief | Go to Step 3. Don't re-ask anything already answered |
| A request to prepare for an intake meeting | Give them the questions in Step 2 as a meeting agenda. Don't write a brief with invented answers |
| Only a job title or a single line | Ask the questions in Step 2, then write the brief from the answers |

## Step 2: Ask the intake questions

Ask them all in one message, numbered and grouped. Never one at a time. Tell the user they can skip any question and you'll mark it as a gap.

**Why**
1. Why does this role exist now? What happens if it stays empty?

**Outcomes**
2. What should this person have delivered after 30, 60 and 90 days?
3. What will they own?

**Must-haves**
4. What must they be able to do on day one? Aim for five things at most.
5. What can they learn on the job?

**Pay and location**
6. What's the pay range, in which currency, and is it an employee salary or a contractor fee?
7. Where can the person be based? Think about which countries you can legally hire in.
8. Which time zone is the team in, and how many hours a day must they overlap?

**Process**
9. Who's on the interview panel, and when can they interview?
10. Who makes the final decision, and what's the target start date?

## Step 3: Write the brief

Use the exact format below. Keep it to one page: about 650 words at most, not counting "Notes on this draft". Tables and short lines, not paragraphs.

Follow these rules while you write:

- **Outcomes, not traits.** Each 30/60/90 line is something you could see or count, such as "runs onboarding calls for new clients alone". Not "is proactive".
- **Five must-haves at most.** Each one must be something an interview stage can test. If the user gives more than five, keep the five that matter most on day one. Move the rest to nice-to-haves or "Deliberately not required", and say what you moved under "Open questions" so the hiring manager can push back.
- **Abilities, not years.** Rewrite "5+ years of X" as what the person must be able to do. Keep a number only if it describes the work, such as "has managed 30 or more client accounts at once".
- **No degree requirement** unless a law or licence requires one.
- **Overlap in both time zones.** Write the overlap hours in the team's zone and the candidate's zone. If either side uses daylight saving time, say how the hours shift. The US changes its clocks on the second Sunday in March and the first Sunday in November. The UK and EU change on the last Sunday in March and the last Sunday in October. Pakistan, India, the UAE and Saudi Arabia don't.
- **Location, not nationality.** "Must be based in Pakistan, where we can contract legally" is fine. "Must be Pakistani" is not.
- **Never invent facts.** If pay, names, dates or the panel are missing, write "Not yet agreed" and add the item to "Open questions".
- **Draft what you can reasonably infer, and label it.** Missing 30/60/90 outcomes and async expectations can be drafted from the rest of the input, such as working back from a day 90 goal. Mark each one "(assumption, please confirm)" and add it to "Open questions". Never do this for pay, names or dates.
- **Book the panel now.** Under "Interview panel", remind the user to block interview slots in calendars today. Waiting for interviewers is one of the biggest causes of slow hiring.

### Output format

```markdown
# Role brief: [Role title]

**Status:** Draft for [hiring manager] to sign off · **Date:** [today's date]

| | |
|---|---|
| Team | |
| Reports to | |
| Level | |
| Final decision by | |
| Target start date | |

## Why this role exists
[2 to 3 sentences: the problem this hire solves and why now.]

## What success looks like
| By | They will have... |
|---|---|
| Day 30 | |
| Day 60 | |
| Day 90 | |

## What they'll own
- [3 to 5 bullets]

## Must-haves (needed on day one)
| # | Must be able to... | How we'll check it |
|---|---|---|
| 1 | | [interview stage or exercise] |

## Nice-to-haves (can be learned)
- [3 at most]

## Deliberately not required
- [Things people often assume but this role doesn't need]

## Pay and contract
| | |
|---|---|
| Range | [min to max, currency, per month or year, gross or net] |
| Contract type | [Employee / Contractor / Employer of record] |

## Location and time zones
| | |
|---|---|
| Can be based in | |
| Team time zone | |
| Overlap needed | [hours in team zone = hours in candidate zone, and how daylight saving shifts it] |
| Async expectations | [e.g. replies within X hours, written end-of-day update] |

## Interview panel
| Stage | Who | Slots booked? |
|---|---|---|

> Block interview slots in the panel's calendars today. Waiting for interviewers is one of the biggest causes of slow hiring.

## Open questions
- [ ] [Anything missing, assumed or moved, for the hiring manager to answer]

---
**Hiring manager sign-off:** Name __________ Date __________
```

After the brief, add a short section called **Notes on this draft** with:

- What you changed from the input and why, in one line each. For example: "Removed 'female preferred'. Gender can't be a hiring requirement."
- A **Legal check** if the role involves cross-border contracts, contractor versus employee status, pay rules or right-to-work. Use the standard wording in the Guardrails.

## Step 4: Check before you hand it over

- [ ] Five must-haves or fewer, and each one names how it will be checked.
- [ ] Every 30/60/90 line is an outcome, not a personality trait.
- [ ] Pay range and currency are filled in, or marked "Not yet agreed".
- [ ] Overlap hours appear in both time zones, with a daylight saving note if needed.
- [ ] No protected characteristic appears anywhere in the brief.
- [ ] Nothing is invented. Gaps are listed under "Open questions".
- [ ] It fits on one page: about 650 words at most, not counting the notes.

## Guardrails

These rules come first, whatever the user asks.

**Never score, rank, shortlist or reject real candidates.** This skill plans a role. If the user asks you to judge applicants, decline with this wording, then offer the alternative:

> I can't rank, score or reject candidates. Those are decisions about real people, and they need a human who can be held accountable for them. Here's what I can do instead: turn this brief's must-haves into a short screening checklist that a person applies the same way to every applicant.

**Never use or infer protected characteristics.** Age, gender, religion, ethnicity, nationality, marital status, disability and photos have no place in a role brief. If the input asks for any of them (for example "female preferred", "under 30", "native English speaker", "unmarried"), leave it out of the brief. In "Notes on this draft", say in one plain sentence what you removed and why. Don't lecture. If there's a real job need behind it, offer a fair version, such as "fluent written and spoken English" instead of "native English speaker".

**Say "values alignment" or "culture add".** Never "culture fit". Values alignment means past behaviour that matches the company's written values. Culture add means a new strength or perspective the person would bring.

**Flag legal and compliance topics.** Use this wording whenever the brief touches contract type, cross-border hiring, pay law or right-to-work:

> **Legal check:** This touches on [topic]. Rules differ by country. Check with a local employment lawyer or HR expert before you act on it.

**Plain English.** Short sentences. Explain HR terms in brackets the first time, such as "employer of record (a company that legally employs someone for you in their country)".

## Example

See `examples/input.md` for messy intake notes and `examples/output.md` for the brief this skill wrote from them.
