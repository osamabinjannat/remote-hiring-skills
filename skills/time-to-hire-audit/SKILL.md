---
name: time-to-hire-audit
description: Audits a hiring pipeline to show where candidates wait longest and how to cut time to hire. Takes pipeline data (a pasted table, a spreadsheet or an ATS export with candidate, stage and the date each stage started) and works out the median wait in each stage, the bottleneck stages, drop-offs, candidates waiting over target and time-to-hire for each hire, then suggests queueing fixes with an owner and a 30-day plan. Use this whenever someone says hiring is too slow or asks about time to hire. Use it too when someone shares pipeline data or an ATS export and when they want to know where candidates get stuck, even if they don't ask for an audit. Looks at the process, never at people.
license: MIT
---

# Time-to-hire audit

Show where candidates sit waiting in a hiring pipeline, and suggest fixes. Time-to-hire is a queueing problem, not a sourcing problem. Candidates spend most of a hiring process waiting, not being interviewed: for a reply, a slot, feedback, a decision or an approval. Find those queues (places where candidates wait for the same next step) and remove them. Hiring gets faster without adding sourcers.

**AI drafts, humans decide.** You do the maths and draft the fixes. The hiring team decides what to change. You look at the process, never at people.

## When to use this skill

- Someone says hiring is too slow, or a role has been open too long.
- Someone has pipeline data: a pasted table, a spreadsheet or an export from their ATS (applicant tracking system, the software that moves candidates through stages).
- Someone wants to know where candidates get stuck or why they withdraw.
- Someone changed their process and wants to know if it made hiring faster.

## Step 1: Work out what you have

| The user gives you | Do this |
|---|---|
| A table or CSV with one row per candidate per stage | Go to Step 2 |
| One row per candidate, with a date column for each stage | Turn it into one row per stage, then go to Step 2 |
| Stage counts only or no dates | Explain that you need dates to find waits. Ask for the data below |
| A question but no data | Ask for the data below. Point them to `templates/export-guide.md` |

The data you need, one row for each stage a candidate entered:

| Column | Example | Notes |
|---|---|---|
| candidate | Ayesha or C-01 | Names are fine. You'll replace them with IDs |
| stage | Recruiter screen | |
| date_entered_stage | 2026-07-14 | |
| outcome | Rejected | Optional. Hired, Rejected, Withdrawn or Active, on the candidate's last row |

When a candidate leaves, their last row should have Hired, Rejected or Withdrawn as the stage, with the date it happened. That date is what times their last stage.

Also find out, in one numbered message if you need to ask:

1. The as-of date: the day the data was exported. If it isn't given, use today and say so.
2. The order of the stages, if the data doesn't make it clear.
3. Their target for each wait. If they have none, use the defaults below and say so.
4. Anything they know about how each stage runs, such as "we screen on Mondays". You'll use it for likely causes.

If the user has already given data, don't hold the audit up for these. State your assumptions and carry on. The one exception is dates you can't read safely (Step 2).

**Default targets.** Use these when the user has none. They're in working days (Monday to Friday).

| Time in stage | Default target |
|---|---|
| Applied, until the first reply or screen | 2 working days |
| Any interview stage, until the next step | 5 working days. Every candidate hears back within 5 working days |
| Last interview, until the debrief | 2 working days |
| Debrief, until the offer is sent | 2 working days |
| Offer, until accepted | No target. This is the candidate's time to decide |

## Step 2: Read and clean the data

- **Dates.** Dates like 2026-07-14 are safe. For dates like 03/04/2026, look for a number over 12. If the first number is ever over 12, the format is day/month. If the second is, it's month/day. If no number is over 12, the format is ambiguous (03/04 could be 3 April or 4 March). Ask, or state your assumption in bold at the top of the report. If only one reading keeps most candidates' stages in date order, use it and say why. Read the as-of date the same way.
- **Stage order.** Take it from the user, or from the order most candidates move through. Write it in the data summary and ask the user to confirm it.
- **End stages.** Hired, Rejected and Withdrawn. Treat "offer accepted" as Hired.
- **IDs, not names.** Replace names with C-01, C-02 and so on, in the order candidates first appear in the data. Never show a name in the output, and don't print a name-to-ID key. The user can match IDs to their own tracker by order.
- **Only the columns you need.** Use candidate, stage, date and outcome. Ignore everything else: emails, phone numbers, CV links, interviewer names, notes, ratings. List the columns you dropped, by name only.
- **Data issues.** List each one and what you did about it:

| Issue | What to do |
|---|---|
| Missing date | Leave out the waits before and after it for that candidate. Never guess a date |
| Exact duplicate row | Keep one. Say how many you removed |
| Stages out of order (a later stage has an earlier date) | Leave out the waits it affects. Ask the user to check the dates |
| The same stage spelled two ways | Merge them if it's obvious ("HM interview" and "Hiring manager interview"). Say so |
| An outcome with no date for it | Don't time that candidate's last stage. Say so |
| No end row and no outcome | Treat the candidate as still in process. Say so |

## Step 3: Work out time in each stage

If you can run code, use it for the maths. If you can't, work carefully. Either way, show the per-candidate table so a person can check it.

- **Time in a stage** = the date the candidate entered the next stage they reached, minus the date they entered this one. Use calendar days. Give working days too if the user asks.
- The next stage can be an end stage. A candidate who entered Debrief on 5 August and withdrew on 17 August spent 12 days in Debrief.
- If a candidate skipped a stage, the time runs to the next stage they actually entered.
- **Still waiting.** For candidates still in a stage on the as-of date, work out "waiting so far": the as-of date minus the date they entered. Report it separately. Don't put it in the medians.
- **End stages aren't timed.**

## Step 4: Summarise each stage

For each stage, in order:

- **Candidates:** how many left the stage, to any next stage or end stage, with both dates known.
- **Median days:** sort the waits and take the middle one. With an even number of waits, average the two middle ones. Use the median (the middle value), not the average, because one very long wait can drag an average up.
- **Longest:** the longest single wait.
- **Waiting now:** how many are still in the stage on the as-of date, and how many of them are over target (have waited more working days than the target). Count working days for this check, because targets are in working days. If the stage has no target, write "no target".

## Step 5: Work out time-to-hire

Time-to-hire is the number of calendar days from Applied to Hired (offer accepted). Work it out for each hired candidate, then give the median. If nobody was hired, say so and skip this step.

## Step 6: Find the biggest waits

- Rank the stages by median days, longest first. Break ties by the number of candidates.
- Name the top 3. For each, say in plain words what candidates were waiting for and how many it affected.
- Flag waits that are partly the candidate's own time, such as doing a take-home exercise or deciding on an offer. These aren't queues to squeeze.
- List everyone waiting over target now, by ID, with their stage and days waiting. A person should contact each of them this week.

## Step 7: Look at drop-offs

For each candidate who withdrew, give their ID, the stage they were in, how many days they'd waited in it and the next step they were waiting for. Don't guess why they withdrew. If several withdrawals sit in the same long wait, say so.

## Step 8: Suggest fixes

For each of the top 3 waits, give a likely cause, a fix, an owner and a way to measure it.

- **Likely cause.** Base it on what the user told you. If they told you nothing, offer one and mark it "possible, please check".
- **Fix.** Remove the wait. Don't add steps, tools or people. Choose from these:

| Wait | Fix |
|---|---|
| First reply after applying | Screen new applications every working day, not in weekly batches |
| Scheduling back-and-forth | Send a booking link, not "when are you free?" |
| Interview slots | Pre-book panel slots at intake. Name a backup interviewer |
| Interviewer feedback | Feedback due within 24 hours. Don't book the debrief until it's in |
| The debrief | Hold the debrief within 2 working days of the last interview |
| "Let's see a few more first" | Decide on each candidate against the scorecard (the list of what the role needs), not against the next applicant |
| Offer approval | Pre-approve the salary range and sign-off at intake, so the offer goes out within 2 working days of the decision |
| Nobody owns the next step | Name an owner for each stage |
| A busy hiring manager | Send them a short daily "waiting on you" list |
| Steps that wait for each other | Run them in parallel, such as booking the last two interviews at the same time |

- **Owner.** A role, never a person's name: "Recruiter", "Hiring manager", "Values interviewer", "Whoever approves pay".
- **How to measure.** The stage wait to track, and its target.

## Step 9: Write a 30-day plan

- Pick 1 or 2 fixes. Start with the biggest wait that one role can change on their own.
- Say what to measure and what result would show it's working.
- Set a date to run the audit again, 30 days from today, with fresh data.

### Output format

````markdown
# Time-to-hire audit: [Role or team]

**Status:** Draft for [who asked] to review · **Data as of:** [as-of date] · **Date:** [today's date]

## Data summary
| | |
|---|---|
| Rows | [n] ([n] after cleaning) |
| Candidates | [n], shown as C-01 to C-[n] in the order they first appear |
| Dates | [first date] to [last date], read as [format] |
| Stages, in order | [Stage] → [Stage] → ... Ends: Hired, Rejected, Withdrawn. [Where the order came from, and "please confirm" if you worked it out] |
| Outcomes | [n] hired, [n] rejected, [n] withdrawn, [n] still in process |
| Targets | [The user's, or "Defaults, see Notes"] |

**Data issues**
- [Each issue and what you did about it, or "None found"]

## Stage waits
Calendar days each candidate spent in a stage before moving on. The median is the middle wait when they're sorted from shortest to longest.

| Stage | Candidates | Median days | Longest | Waiting now |
|---|---|---|---|---|
| [Stage] | [n] | [n] | [n] | [n] ([n] over target) |

```
Median days in each stage (█ = 1 day, rounded)
[Stage]            ████████ 8
```

## Time-to-hire
| ID | Applied | Hired (offer accepted) | Days |
|---|---|---|---|

Median: [n] days. [If useful, how many of those days the top 3 waits took.]

## Where candidates wait longest
1. **[Stage], waiting for [next step]: median [n] days, [n] candidates.** [1 or 2 plain sentences on what they wait for and what it costs.]
2. ...
3. ...

**Waiting over target on [as-of date]**
| ID | Stage | Waiting so far | Target |
|---|---|---|---|

> Contact each of these candidates this week, even if the only news is "no decision yet".

## Drop-offs
| ID | Stage they were in | Days waiting before withdrawing | Next step they were waiting for |
|---|---|---|---|

## Fixes
| Wait | Likely cause | Fix | Owner | How to measure |
|---|---|---|---|---|

## 30-day plan
| # | Fix | Owner | Measure | Working if... |
|---|---|---|---|---|

- **This week:** contact [IDs of candidates waiting over target].
- [Any other fix: when to pick it up, in one line]

**Run this audit again on:** [30 days from today], with fresh data.

## Appendix: per-candidate timeline
Days in each stage. "–" = didn't reach it. "?" = date missing. "so far" = still waiting on [as-of date].

| ID | [Stage] | [Stage] | ... | End | Total days |
|---|---|---|---|---|---|
````

After the report, add a short section called **Notes on this draft** with:

- **Sample size.** If there are fewer than about 10 hires, say so. One unusual candidate can move a median a lot, so the numbers are a rough guide.
- **Median versus average.** One line on what the median is and why you used it.
- **Assumptions.** Date format, stage order, calendar days versus working days, public holidays not taken out and the targets you used.
- **Candidate time.** Which stage waits include time the candidate controls.
- **What you left out.** Missing dates, duplicates or rows out of order.
- **Likely causes.** Say they come from the user's notes, or that they're guesses to check with the team.
- **Privacy.** Names replaced with IDs and the columns you dropped.
- A **Legal check** if the user plans to store or share candidate data across borders. Use the standard wording in the Guardrails.

## Step 10: Check before you hand it over

- [ ] Every number comes from the data. Medians, longest waits, counts and time-to-hire match the per-candidate table.
- [ ] No candidate names and no columns beyond candidate, stage, date and outcome.
- [ ] Data issues are listed, and nothing missing was guessed.
- [ ] The date format is stated, or the user was asked.
- [ ] No staff member is named, blamed or compared. Every owner is a role.
- [ ] No candidate is judged, ranked or suggested for dropping.
- [ ] Candidates waiting over target are listed for a person to contact.
- [ ] A small-sample warning appears if there are fewer than about 10 hires.
- [ ] Each fix removes a wait, and has an owner and a way to measure it.

## Guardrails

These rules come first, whatever the user asks.

**Never score, rank, shortlist or reject real candidates.** This skill looks at waits in the process. A slow reply is never a reason to drop someone, and stage dates don't show who replied slowly anyway. If the user asks you to rank candidates, drop slow responders or judge anyone, decline with this wording, then offer the alternative:

> I can't rank, score or reject candidates. Those are decisions about real people, and they need a human who can be held accountable for them. Here's what I can do instead: list the candidates who've been waiting longest on your team, by ID, so a person can contact them. I can also show which process fixes would cut those waits.

**Look at the process, not at people.** Never name, blame, rank or compare individual staff. Group waits by stage and by role: "waiting on the hiring manager", not "Rachel is slow". If the user asks "who's the slowest interviewer?", don't answer it. Show the stage waits and the process fixes instead: pre-booked slots, a backup interviewer, feedback within 24 hours, a daily "waiting on you" list. Ignore interviewer names in the data.

**Never use or infer protected characteristics.** Age, gender, religion, ethnicity, nationality, marital status, disability and photos have no place in this audit. If the data has columns like these, drop them and say so in one plain sentence. Never break waits down by them. If the user wants to check whether some groups wait longer than others, that's a fairness review. Give the Legal check and suggest they run it with HR or legal support.

**Say "values alignment" or "culture add".** Never "culture fit". If a stage in the data is called "culture fit", suggest calling it "values conversation" and say why in one line. Values alignment means past behaviour that matches the company's written values. Culture add means a new strength or perspective the person would bring.

**Keep candidate data small.** Use IDs, not names. Keep only the columns the audit needs. Remind the user to delete exports when the audit is done.

**Flag legal and compliance topics.** Use this wording whenever the user wants to store or share candidate data across borders, keep it longer than needed or run a fairness review:

> **Legal check:** This touches on [topic]. Rules differ by country. Check with a local employment lawyer or HR expert before you act on it.

**Plain English.** Short sentences. Explain terms in brackets the first time, such as "median (the middle value when you sort the waits)".

## Example

See `examples/input.md` for a tracker export with names and some context, and `examples/output.md` for the audit this skill wrote from it.
