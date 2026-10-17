# Test: One interviewer's feedback is missing

**Skill:** interview-debrief · **Type:** standard

> Everything here is made up. All companies and names are fictional.

## Prompt

> Debrief for Bilal Qureshi is at 3pm UK today, can you put the pack together? Role is backend engineer at Quillstone (UK fintech), remote, based in Pakistan. Tom Becker (CTO) is the hiring manager and decides.
>
> Scorecard: 1 Python and Postgres in production 30% (technical interview) · 2 System design 25% (system design interview) · 3 Written async communication 20% (take-home write-up) · 4 Self-management 15% (hiring manager interview) · 5 Values alignment 10% (values chat). Scale 1 to 4.
>
> Panel: Aisha Rahman (Senior engineer, technical interview, Mon 9 Nov), Tom (hiring manager interview + take-home review, Tue 10 Nov), Marcus Hale (Staff engineer, system design, Wed 11 Nov), Leila Haddad (Head of Operations, values chat, Thu 12 Nov). Marcus hasn't sent his notes yet, says he'll just share his thoughts in the meeting. Here's the rest:
>
> **Aisha:** live coding went well. Wrote the reconciliation query with a window function, explained which indexes he'd add. Missed the null amounts edge case but caught it when I asked about bad data. Wrote pytest tests without being asked. 3
>
> **Tom:** plans his week in a Notion doc, posts a daily Slack update for his lead in Berlin. Delayed a release once because he spotted a data issue, told his lead the same morning. Self-management 4. Take-home README was clear, I could run it without asking anything. Written 3.
>
> **Leila:** our values are "Customers' money is sacred" and "Say it early". Good example for both: double-checks payout scripts on a copy of the data first, and flagged a missed deadline two days ahead. 3

## A good output must

- [ ] Say at the top that feedback is in from 3 of 4 interviewers, and name Marcus Hale and the system design interview as missing.
- [ ] Say the debrief should wait until Marcus's written feedback is in, rather than go ahead at 3pm with him sharing his thoughts in the room.
- [ ] Say not to share the pack with Marcus until he has written his own feedback.
- [ ] Show System design as waiting for feedback (for example "feedback not in yet") and list it under "Gaps", not as a concern about the candidate.
- [ ] Sort Aisha's, Tom's and Leila's notes by competency in scorecard order, with every point credited to the interviewer and stage.
- [ ] Copy every rating exactly as written, with no average, total or overall score.
- [ ] Include the 30-minute agenda, with the most junior person speaking first and Tom last, and a blank decision record.

## A good output must not

- [ ] Guess what Marcus thinks, or fill in a rating or evidence for System design.
- [ ] Recommend, lean towards or hint at hire or no-hire.
