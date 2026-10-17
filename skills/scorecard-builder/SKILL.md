---
name: scorecard-builder
description: Builds a weighted interview scorecard from a role brief, or from a job title and must-haves, with 4 to 6 competencies, weights that add up to 100, a 1 to 5 rating scale, what strong and weak look like, behavioural and situational interview questions with follow-ups, yes or no must-have checks and a blank interviewer scoresheet. Use this whenever someone needs a scorecard, interview rubric, evaluation criteria, competencies or interview questions for a role, or says something like "what should we ask candidates for a...", even if they don't say scorecard. Built for remote and cross-border roles. Drafts only, and interviewers fill in the ratings themselves.
license: MIT
---

# Scorecard builder

Turn a role brief into a **scorecard** (a list of what the role needs, what good looks like and how you'll test it). Every interviewer uses it to rate candidates against the same bar. Build it before the job post goes out.

**AI drafts, humans decide.** You draft the scorecard. The hiring manager signs it off. Interviewers fill in the ratings. You never rate a real candidate.

## When to use this skill

- Someone has a role brief, for example from the role-intake skill, and needs a scorecard.
- Someone has a job title and a list of must-haves and wants interview questions.
- Someone wants a rating scale, an interview rubric or an interviewer scoresheet for a role.
- Someone wants an existing scorecard checked: too many competencies, weights that don't add up, vague or unfair questions.

## Step 1: Work out what you have

| The user gives you | Do this |
|---|---|
| A role brief | Go to Step 3. Use its must-haves, panel and interview stages. Don't re-ask anything it answers |
| A job title and must-haves, but no brief | Ask only what's missing from Step 2. If they'd rather not wait, build it and list the gaps in "Notes on this draft" |
| Only a job title | Say that a role brief should come first (the role-intake skill writes one). Ask the Step 2 questions. Don't invent must-haves |
| An existing scorecard | Check it against Step 3 and Step 4. List what you'd change, then give the fixed version |
| Notes on real candidates, or a request to rate, total or rank them | Decline. See Guardrails |

## Step 2: Ask for what's missing

Ask in one message, numbered. Never one at a time. Tell the user they can skip any question and you'll mark it as a gap.

1. What must the person be able to do on day one? Five things at most.
2. Which of those matters most?
3. Where is the team, where can the hire be based and which hours must they overlap?
4. What are the interview stages, and who runs each one?
5. What are your company's written values? Paste them exactly as they're written.
6. Who signs off the scorecard?

## Step 3: Build the scorecard

Use the exact format below. Follow these rules while you write:

- **4 to 6 competencies.** A competency is a skill or behaviour the job needs. Build them from the must-haves. If the user asks for more than six, merge the ones that overlap and cut the ones that can be learned on the job. Say what you merged or cut in "Notes on this draft".
- **Yes-or-no must-haves stay separate.** Overlap hours, location and pay go under "Must-have checks", for a person to check at the screen. They aren't weighted or rated.
- **Weights.** Whole numbers, in multiples of 5, adding up to 100. Put the most weight on what the hiring manager says matters most. Weights guide the debrief (the meeting where the panel shares evidence). They don't produce a score. Never calculate a total for anyone.
- **Rating scale.** Use the team's own scale if they have one. Otherwise use 1 to 5, where 3 means "meets the bar", with every number defined by the evidence.
- **Values alignment gets about 10 to 20%.** If the user wants more, keep their weight and say in Notes that the role's skills should carry most of it, because a heavy values weight lets "people like us" back in. The hiring manager decides.
- **Remote roles need remote competencies.** Include at least one, and usually two, of these five: written communication (writing that someone in another time zone can act on without a call), self-direction (knowing when to push on and when to ask), proactive transparency (raising problems early), reliability (doing what they said, when they said) and async judgment (documenting decisions and knowing when a call is actually needed).
- **Values come from the company's own words.** Pick the two or three written values that genuinely set the team apart, use them word for word and write what each one looks like in action. Rate values answers against those written anchors, like any other competency. Add culture add (a new strength or perspective the person would bring). If you don't have the values, ask for them or write "[Value: paste your company's written value here]". Never invent values.
- **Strong and weak are behaviour.** Write what an interviewer could see or hear, such as "puts the next step in the first line of the email". No personality labels such as "confident", "outgoing", "energetic" or "good communicator". Never accent, appearance, home, background or video quality.
- **2 to 3 questions per competency, each with a follow-up.** Mix behavioural ("Tell me about a time...") and situational ("What would you do if..."). Use the role's real situations. Add a remote question where it fits: overlap hours, handovers, being stuck while the other time zone sleeps, power or internet cuts. Label each one behavioural, situational, role play or written task, and add "remote" or the value it tests where useful. If two people test a competency, say who asks each question. For a role play, say who plays whom.
- **Exercises get tasks, not questions.** For a written exercise or work sample, write the tasks and build the follow-up into the task, such as the client's reply. Write "Look for" instead of "Listen for". Take-home work over 60 minutes should be paid or cut down. Say so in Notes.
- **Job-related questions only.** Never ask about family, children, marriage, pregnancy, age, religion, health, nationality or where someone grew up. Not even as small talk. Don't swap in a stand-in either, such as gaps in their CV or how long they stayed in past jobs.
- **Every competency has an owner.** Name the stage and the person. If one person tests more than one stage, suggest they hand in each scoresheet before their next stage.
- **Overlap hours in both time zones.** In the must-have checks, write the hours in the team's zone and the candidate's zone, and how daylight saving shifts them. The US changes its clocks on the second Sunday in March and the first Sunday in November. The UK and EU change on the last Sunday in March and the last Sunday in October. Pakistan, India, the UAE and Saudi Arabia don't.
- **Never invent facts.** If names, stages or values are missing, write "Not yet agreed" and list the gap in Notes.
- **Leave the scoresheet blank.** No ratings, no evidence and no totals.

### Output format

```markdown
# Scorecard: [Role title]

**Built from:** [The role brief and its date, or "A job title and must-haves. No role brief yet"]
**Status:** Draft for [hiring manager] to sign off · **Date:** [today's date]

## How to use this scorecard
- Rate alone, before the debrief (the meeting where the panel shares evidence). Don't read anyone else's notes first.
- Rate the evidence (what they said or did), not your impression of them.
- No evidence for a competency? Pick "No evidence" rather than guessing.

## Rating scale
| Rating | What the evidence shows |
|---|---|
| 5 Well above the bar | Several specific examples. They already do much more than the role needs on day one |
| 4 Above the bar | Specific examples, some going beyond what the role needs on day one |
| 3 Meets the bar | Specific examples that show they can do what the role needs on day one |
| 2 Some concern | Some evidence, but it's vague, general or falls short in places |
| 1 Clear concern | Specific examples that show they can't yet do what the role needs |
| No evidence | Your stage didn't cover it, or time ran out. It's not a mark against them |

A 3 means "meets the bar", not "not sure". If you're unsure, write down what evidence is missing.

## Competencies (the skills and behaviours this job needs)
| # | Competency | Weight | Tested in | Interviewer |
|---|---|---|---|---|
| 1 | | % | | |
| | **Total** | **100%** | | |

> **About the weights:** They show what matters most for this role, so the debrief spends the most time there. Don't add up a total to decide. A weighted total can start a conversation, but it never makes the decision. The hiring manager does.

## 1. [Competency] ([weight]%)
**What it means:** [One line]
**Tested in:** [Stage], by [interviewer]

| Strong looks like | Weak looks like |
|---|---|
| [Something you could see or hear] | [Something you could see or hear] |
| | |
| | |

**Questions**
1. *([Type], [who asks, if needed])* "[Question]"
   - Follow-up: "[Probe]"
2. *([Type])* "[Question]"
   - Follow-up: "[Probe]"

**Listen for:** [What good evidence sounds like, and what to ignore]

[Repeat for each competency. In the values alignment block, list the company's written values word for word, straight after "Tested in".]

## Must-have checks
Yes or no, checked by [recruiter] at the [screen stage]. These aren't weighted or rated.

| Must-have | How to check | Yes / No |
|---|---|---|
| | | |

Ask every candidate the same way. Don't ask about family or home life to judge the hours. If a candidate brings it up, don't write it down.

## Interviewer scoresheet
Copy this for each interviewer and each candidate. Fill in only the competencies your stage tests. Hand it in within 24 hours of your interview, before you read anyone else's.

**Candidate:** __________ **Interviewer:** __________ **Stage:** __________ **Date:** __________

| Competency | Evidence (what they said or did) | Rating (1 to 5 or No evidence) |
|---|---|---|
| 1. [Competency] ([weight]%) | | |

**One thing I'd want to find out next:** __________

---
**Hiring manager sign-off:** Name __________ Date __________
```

After the scorecard, add a short section called **Notes on this draft**, with one line each for:

- What you merged, cut, renamed or left out, and why. For example: "Left out the question about children. Family plans can't be part of a hiring decision."
- Why the weights are what they are.
- Gaps or decisions for the hiring manager.
- A **Legal check** if you left out a question for legal reasons, or if the user asks about contract type, pay law, right-to-work or recording interviews. Use the Guardrails wording exactly, and fill [topic] with the reason, such as "interview questions about family plans".

## Step 4: Check before you hand it over

- [ ] 4 to 6 competencies. Anything merged or cut is listed in Notes.
- [ ] Weights are whole numbers in multiples of 5 and add up to 100.
- [ ] A remote role has at least one remote competency.
- [ ] Every competency names a stage and an interviewer.
- [ ] Every strong and weak line is something you could see or hear. No personality labels.
- [ ] Each competency has 2 to 3 questions or tasks, each with a follow-up.
- [ ] Every question is about the job. None touches a protected characteristic or a stand-in for one.
- [ ] Values are in the company's own words, or a clearly marked placeholder. "Culture fit" appears only in a note explaining the swap.
- [ ] Must-have checks are yes or no, separate from the weights, with overlap hours in both time zones.
- [ ] The scoresheet is blank, with no space for a total score.

## Guardrails

These rules come first, whatever the user asks.

**Never score, rank, shortlist or reject real candidates.** This skill builds the scorecard. Interviewers fill it in. If the user asks you to rate a candidate, fill in a scorecard for someone, total the scores or say who "wins", decline with this wording, then offer the alternative:

> I can't rank, score or reject candidates. Those are decisions about real people, and they need a human who can be held accountable for them. Here's what I can do instead: give each interviewer a blank scoresheet, and sort your notes into evidence under each competency, with no ratings, so the panel can rate the candidates themselves.

If the notes are in the message, do the sorting straight away. Keep each candidate separate and in the order the user gave. Keep only what the candidate said or did. Mark impressions such as "seemed confident" as "not evidence", and suggest the interviewer writes down what the candidate actually said or did. Never rate, order or label anyone as stronger or weaker. For a full panel debrief, suggest the interview-debrief skill if they have it. If an interviewer asks "what rating should I give?", help them find their evidence. The rating is theirs.

**Never use or infer protected characteristics.** Age, gender, religion, ethnicity, nationality, marital status, disability and photos have no place in a scorecard. If the input asks for a question or a strong or weak line that touches any of them, leave it out. In "Notes on this draft", say in one plain sentence what you left out and why. Don't lecture. If there's a real job need behind it, offer a fair, job-related version that every candidate is asked. For example, instead of asking about plans for children: "We'd like this person to own the role for the next two years. What would you want to have achieved by then?"

**Say "values alignment" or "culture add".** Never "culture fit". Values alignment means past behaviour that matches the company's written values. Culture add means a new strength or perspective the person would bring. If the user says "culture fit", use these terms instead and explain the swap in one line.

**Flag legal and compliance topics.** Use this wording when you leave out an interview question for legal reasons, or when the user asks about contract type, pay law, right-to-work or recording interviews:

> **Legal check:** This touches on [topic]. Rules differ by country. Check with a local employment lawyer or HR expert before you act on it.

**Plain English.** Short sentences. Explain HR terms in brackets the first time, such as "competency (a skill or behaviour the job needs)".

## Example

See `examples/input.md` for Fernhill's role brief, values and interview plan, and `examples/output.md` for the scorecard this skill built from them.
