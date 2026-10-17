---
name: remote-onboarding-plan
description: Writes a first-30-days onboarding plan for a new remote hire, with a before-day-one checklist, a day one schedule, a light first week, a buddy, check-ins on day 1, 3, 7, 14 and 30, a first real deliverable and remote working agreements. Every date is worked out and every time is shown in both time zones. Use this whenever someone has a new hire starting, needs an onboarding plan or a first week schedule, wants to turn a 30-60-90 plan into a real start, wants to welcome a new remote employee or contractor, or asks what to sort out before day one, even if they don't say "onboarding". Built for remote and cross-border hires. Drafts only, and the manager decides.
license: MIT
---

# Remote onboarding plan

Write a **first-30-days plan** for a new remote hire: what to set up before day one, how day one and the first week run, who their buddy is, when to check in and what their first real piece of work is. A good plan helps someone feel welcome and get useful fast, even across a big time difference.

**AI drafts, humans decide.** You draft the plan. The manager edits it, owns it and shares it with the new hire. The plan is there to support the person. It never judges them.

## When to use this skill

- Someone has a new hire starting soon and wants a plan for the first month.
- Someone asks what to sort out before a remote hire's first day.
- Someone has a role brief with 30/60/90-day outcomes and wants to turn the first 30 days into a schedule.
- Someone wants an existing onboarding plan checked for gaps.

## Step 1: Work out what you have

| The user gives you | Do this |
|---|---|
| The role or its outcomes, a start date, time zones and names | Go to Step 3. Don't re-ask anything already answered |
| Only part of it, such as a name and a start date | Ask the missing questions from Step 2 |
| An existing onboarding plan | Check it against the Step 5 list. List the gaps, then offer a fixed version |
| A request to rate, rank or compare new hires, or to decide probation | Decline with the Guardrails wording and give the alternative |

## Step 2: Ask for what's missing

Ask all your questions in one message, numbered and grouped. Never one at a time. Tell the user they can skip any question and you'll use a placeholder (a gap in [square brackets] to fill in later).

**The role**
1. What's the role, and what should the person have done by day 30? A role brief with 30/60/90-day outcomes is ideal.

**Dates and time zones**
2. What's the start date?
3. Where is the new hire based, and where is the team? What are the overlap hours (the hours when both are working)? What are the new hire's agreed working hours?
4. Which public holidays fall in the first 30 days, in both countries? Is anyone on the team on leave?

**People**
5. Who's the manager? Who's the buddy (a peer who helps the new hire settle in, not the manager)?
6. Who else will they work with closely? Who handles the contract, the equipment and the accounts?

**Setup**
7. Which tools will they use?
8. Will you ship a laptop, buy one locally or pay an allowance? Do you help with backup power or internet?
9. Is the contract for an employee, a contractor or through an employer of record (EOR, a company that legally employs the person for you in their country)?
10. Which docs should they read first? Does the company have written values?

## Step 3: Work out the dates and times

A wrong date or time in a welcome plan is a poor first impression. Get these right.

- **Day 1 is the start date.** Day N is the start date plus N minus 1 calendar days. Work out each date and its weekday properly. If you can run code, check them with it.
- **Write dates with the weekday**, such as "Tuesday 1 December". Add the year in the header.
- **Skip non-working days.** If a check-in or task lands on a weekend or a public holiday in either country, move it to the next working day. A task due before day one moves to the working day before. Check the holidays of each owner's country, not just the new hire's. Move day 30 to the working day before, so it stays inside the first 30 days. Say what you moved in "Notes on this draft".
- **Use only the holidays the user gives you.** If you don't have them, ask for public holidays in both countries. If you write the plan before you hear back, put "None given" in the header and add it to "Open questions". Some holidays move each year with the moon, such as Eid in Pakistan. If one might fall in the 30 days, name it and ask the user to confirm the dates.
- **Holidays belong to countries, not people.** A public holiday is a day off for everyone in that country. Never guess what someone observes from their name, country or anything else. In the welcome email, invite the new hire to tell the manager about any other days or times they need.
- **Every time in both zones.** Write each time in the new hire's zone and the team's zone. Put the UTC offsets in the header.
- **Watch the clocks.** The US changes its clocks on the second Sunday in March and the first Sunday in November. The UK and EU change on the last Sunday in March and the last Sunday in October. Pakistan, India, the UAE and Saudi Arabia don't. If a change falls inside the first 30 days, show the overlap before and after it. If not, say when the next change is and how the overlap will move.
- **Overlap hours for people, own hours for learning.** Keep overlap hours for client calls, team calls and 1:1s (one-to-one meetings). Put reading and tool tours in the new hire's hours outside the overlap. Put buddy time where the buddy and the new hire are both working: outside the overlap if the buddy shares the new hire's time zone, inside it if not. If the whole working day overlaps, this split doesn't apply. If the overlap is late at night for the new hire, never book regular meetings outside their agreed hours.

## Step 4: Write the plan

Use the exact format below. Tables and checklists, not paragraphs.

Follow these rules while you write:

- **Support, never judgement.** Every check-in asks the same three questions: What's going well? What's confusing? What do you need from me? No ratings, scores or probation decisions anywhere in the plan.
- **Day one has four parts:** a welcome call with the manager, meeting the buddy, the setup checklist and meeting the team in an overlap-hours call.
- **A light first week.** Read the key docs, shadow (sit in on) real work and ship one small thing. Leave room to settle in.
- **A real buddy.** A peer, not the manager, ideally with hours that overlap the new hire's. They answer the "silly" questions. 15 minutes every day in week one, then twice a week until day 30. If no buddy is named, write "[Buddy, to be named]" and say what to look for.
- **One real first deliverable.** Small, useful and visible, due by day 30 and linked to the role's day 30 outcomes. "Finish onboarding" isn't a deliverable. "Run your first client check-in calls and write up the three biggest issues" is.
- **Paperwork before day one.** The contract is signed before the start date. Payment details go through a secure channel, never over chat or email.
- **Help with power and internet.** Ask what backup the new hire has, such as a UPS (a battery that keeps power on during a cut) or a mobile hotspot. Say what the company pays for. An outage is never a mark against anyone.
- **Never invent tools, people, documents or policies.** Use [placeholders] and list them under "Open questions". If you make a reasonable assumption, mark it "(assumption, please confirm)".
- **Link to the values.** If the company has written values, show where the work connects to them. Say "values alignment", never "culture fit".
- **Legal checks.** Flag the contract, cross-border payment, who owns the equipment (and customs, if it's shipped across a border) and access to client or personal data.
- **Equipment across a border.** Say who pays customs, who owns the equipment and what happens to it if the contract ends. Add a fallback in case it's held at customs, such as buying locally or a loan laptop, with a date to decide. If an employer of record (a company that legally employs someone for you in their country) is involved, split the before-day-one tasks into what the employer of record does and what the company does.

### Output format

```markdown
# First 30 days: [Name], [Role]

**Status:** Draft for [manager] to review, then share with [Name] · **Date:** [today's date]

| | |
|---|---|
| New hire | [Name], [role], based in [city, country] |
| Contract | [Employee / Contractor / Employer of record] |
| Manager | [Name, title, location] |
| Buddy | [Name, role, location] or [Buddy, to be named] |
| Also working with | [Names, and what each one helps with] |
| Start date | [Weekday date year] (day 1) |
| Day 30 | [Weekday date year] |
| Time zones | [New hire's zone (UTC offset)] · [Team's zone (UTC offset)] |
| Overlap hours | [Team zone hours] = [new hire zone hours], [days]. [Clock change note] |
| [Name]'s working hours | [Hours in both zones] |
| Days off in the first 30 days | [Date, holiday, country] or "None given". [Name]: tell [manager] about any other days you need |

## Before day one
| Task | Owner | Due |
|---|---|---|
| Contract signed and checked for both countries (see Legal check) | | |
| Laptop shipped, bought locally or allowance paid. Arrives by [date] | | |
| Backup power and internet: ask what [Name] has and agree what the company pays | | |
| Accounts created: [each tool] | | |
| [Name] signs in to every account and confirms each one works | | |
| Agree what client data [Name] can see, and set access to match | | |
| Payment details collected through [secure channel]. Never over chat or email | | |
| Welcome email: start time in both zones, the day one plan, an invitation to share any days they need | | |
| Buddy introduced by email | | |
| First-week calendar sent. Every invite shows both time zones | | |
| Reading list sent | | |

## Day one: [Weekday date]
| [New hire's zone] | [Team's zone] | What | With |
|---|---|---|---|

## Week one
| Day | Date | Outside overlap ([hours in both zones]) | During overlap ([hours in both zones]) |
|---|---|---|---|

## Weeks 2 to 4
| Week | Dates | Goals | Check-ins |
|---|---|---|---|
[Add a last row, "To day 30", for any days between week 4 and day 30.]

## The buddy
| | |
|---|---|
| Who | |
| Why them | |
| What they do | |
| What they don't do | Judge or report on [Name]. The buddy is a peer, not a manager |
| Check-ins | 15 minutes every day in week one, then twice a week until day 30 [dates and times in both zones] |

## Check-ins
Every check-in asks the same three questions: **What's going well? What's confusing? What do you need from me?**

| Check-in | Date | Time ([zone] / [zone]) | With | Length |
|---|---|---|---|---|
| Day 1 | | | | 15 min |
| Day 3 | | | | 15 min |
| Day 7 | | | | |
| Day 14 | | | | |
| Day 30 | | | | 45 min |

**Weekly 1:1 with [manager]:** [day, time in both zones, dates]

## First real deliverable
| | |
|---|---|
| What | |
| Why it matters | |
| Due | [Weekday date] (day [N]) |
| What done looks like | |
| Support | [Who helps with what] |

## Remote working agreements
| | |
|---|---|
| Overlap hours | |
| Your own hours | |
| Reply times | |
| Where to ask questions | |
| End-of-day update | |
| Power or internet outage | |

## 30-day check-in guide
[Weekday date], [time in both zones]. [Name] and [manager].

This is a two-way conversation about support. It isn't a performance review. There's no rating and no pass or fail.

| Part | Time | Questions |
|---|---|---|
| The three questions | 15 min | What's going well? What's confusing? What do you need from me? |
| The first deliverable | 10 min | [Two questions about what they found and what happens next] |
| Hours and setup | 5 min | How are the hours working, week to week? Are your equipment, power and internet OK? |
| Our onboarding | 5 min | What should we change for the next person who joins? |
| The next 30 days | 10 min | What will you focus on next, towards [the day 60 outcome]? What help do you need? |

| Agreed action | Owner | By when |
|---|---|---|
| | | |

## Open questions
- [ ] [Anything missing, assumed or left as a placeholder, with who should answer it]

---
**Before you send:** A person must read and edit this draft. Check names, dates, facts and tone.
```

After the plan, add a short section called **Notes on this draft**. It's for the manager, so tell them to take it out before they share the plan. Include:

- How you worked out the dates: the holidays you skipped, any clock change and anything you moved (with the reason).
- What you assumed or left as a placeholder, one line each.
- Anything you left out of the input and why, such as a protected characteristic. One plain sentence each.
- A **Legal check** on the contract, cross-border payment, equipment ownership and access to client data. Use the standard wording in the Guardrails.

## Step 5: Check before you hand it over

- [ ] Every date has the right weekday. Nothing lands on a weekend or on a holiday given for either country.
- [ ] Every time appears in both time zones, and the header says whether the clocks change.
- [ ] Regular meetings sit inside overlap hours. Learning sits in the new hire's own hours, and buddy time is when both of them are working.
- [ ] "Before day one" covers the contract, equipment, backup power or internet, accounts, secure payment details, the welcome email, the buddy introduction, the first-week calendar and a reading list.
- [ ] Day one has the welcome call, the buddy, the setup checklist and a team call.
- [ ] Check-ins fall on day 1, 3, 7, 14 and 30 (or moved to a working day, as in Step 3) with the same three questions, plus a weekly 1:1.
- [ ] The first deliverable is small, real and due by day 30. It says what done looks like.
- [ ] Nothing judges the new hire. No ratings, scores, probation decisions or pass or fail.
- [ ] No invented tools, people, documents or policies. Gaps are placeholders listed under "Open questions".
- [ ] No protected characteristic, and no guess about anyone's religion, family or health.
- [ ] A Legal check covers the contract, payment, equipment and client data.

## Guardrails

These rules come first, whatever the user asks.

**Never score, rank, shortlist or reject real people.** This skill helps someone start well. It never judges how a new hire is doing. If the user asks you to rate, rank or compare new hires, or to say who should pass or fail probation (a trial period at the start of a job), decline with this wording, then offer the alternative:

> I can't rank, score or judge new hires. Those are decisions about real people, and they need a human who can be held accountable for them. Here's what I can do instead: a 30-day review form you fill in for each person on their own, with evidence against the outcomes you agreed, plus questions for a fair two-way conversation.

Then give it straight away. For each person separately: the agreed day 30 outcomes, with columns for "What happened (evidence)" and "What support they had", the three check-in questions and a line saying the manager makes and owns any decision. Never compare the people with each other. Add a Legal check, because probation and ending a contract follow local rules.

**Never use or infer protected characteristics.** Age, gender, religion, ethnicity, nationality, marital status, disability and photos have no place in an onboarding plan. Never plan around a guess about someone's religion, family or health. If the input includes any of these, leave them out and say in one plain sentence in "Notes on this draft" what you removed and why. Don't lecture. If the new hire asks for something themselves, such as a different meeting time, build it in without saying why. If the input guessed at a protected characteristic, also tell the manager in the notes that the plan can take in any change the new hire asks for, with no reason needed.

**Say "values alignment" or "culture add".** Never "culture fit". Values alignment means past behaviour that matches the company's written values. Culture add means a new strength or perspective the person would bring.

**Flag legal and compliance topics.** Use this wording for the contract, cross-border payment, equipment (who owns it and how it's shipped) and access to client or personal data:

> **Legal check:** This touches on [topic]. Rules differ by country. Check with a local employment lawyer or HR expert before you act on it.

**Plain English.** Short sentences. Explain HR terms in brackets the first time, such as "buddy (a peer who helps the new hire settle in)".

## Example

See `examples/input.md` for a manager's request and `examples/output.md` for the plan this skill wrote from it.
