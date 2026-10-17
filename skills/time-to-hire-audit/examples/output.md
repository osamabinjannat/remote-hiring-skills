# Example output

> Made from `input.md`. Fernhill and all names are fictional.

# Time-to-hire audit: Support Specialist (remote, Pakistan)

**Status:** Draft for the hiring team to review · **Data as of:** 30 September 2026 · **Date:** 1 October 2026

## Data summary
| | |
|---|---|
| Rows | 73 (72 after cleaning) |
| Candidates | 14, shown as C-01 to C-14 in the order they first appear |
| Dates | 1 July to 22 September 2026, read as year-month-day |
| Stages, in order | Applied → Recruiter screen → Written exercise → Hiring manager interview → Mock client call → Values conversation → Debrief → Offer. Ends: Hired, Rejected, Withdrawn. Taken from the data, where every candidate moved in this order. Please confirm |
| Outcomes | 2 hired, 8 rejected, 2 withdrawn, 2 still in process |
| Targets | Defaults, see Notes |

**Data issues**
- C-04's Written exercise row (15 July) appears twice. I kept one.
- C-09 has no date for the Hiring manager interview. I left C-09 out of the Written exercise and Hiring manager interview waits. C-09 still counts in every other stage.

## Stage waits
Calendar days each candidate spent in a stage before moving on. The median is the middle wait when they're sorted from shortest to longest.

| Stage | Candidates | Median days | Longest | Waiting now |
|---|---|---|---|---|
| Applied | 13 | 8 | 11 | 1 (1 over target) |
| Recruiter screen | 11 | 1 | 4 | 0 |
| Written exercise | 9 | 3 | 4 | 0 |
| Hiring manager interview | 7 | 3 | 4 | 0 |
| Mock client call | 6 | 6 | 10 | 1 (1 over target) |
| Values conversation | 4 | 2.5 | 4 | 0 |
| Debrief | 4 | 7 | 12 | 0 |
| Offer | 2 | 2.5 | 3 | 0 |

```
Median days in each stage (█ = 1 day, rounded)
Applied                   ████████ 8
Recruiter screen          █ 1
Written exercise          ███ 3
Hiring manager interview  ███ 3
Mock client call          ██████ 6
Values conversation       ███ 2.5
Debrief                   ███████ 7
Offer                     ███ 2.5
```

## Time-to-hire
| ID | Applied | Hired (offer accepted) | Days |
|---|---|---|---|
| C-02 | 3 July 2026 | 10 August 2026 | 38 |
| C-05 | 6 July 2026 | 19 August 2026 | 44 |

Median: 41 days. For both hires, the three waits below took more than half that time: 24 of 38 days for C-02 and 27 of 44 days for C-05.

## Where candidates wait longest
1. **Applied, waiting for the recruiter screen: median 8 days, 13 candidates.** Every candidate waits here, so this is the biggest queue in the process. Getting from applying to a screen took 7 to 11 days. The 2 candidates turned down at this stage waited 7 and 10 days to hear. The target is a first reply within 2 working days.
2. **Debrief, waiting for a decision or offer: median 7 days, 4 candidates.** Both offers went out 7 days after the debrief. C-08 withdrew 12 days after their debrief, with no decision recorded. The target is an offer within 2 working days of the decision.
3. **Mock client call, waiting for the values conversation: median 6 days, 6 candidates.** This is a wait for an interview slot. Two candidates waited 10 days here, and one of them (C-04) withdrew. C-13 has been waiting 9 days so far.

**Waiting over target on 30 September 2026**
| ID | Stage | Waiting so far | Target |
|---|---|---|---|
| C-13 | Mock client call, waiting for the values conversation | 9 days (7 working days) | 3 working days |
| C-14 | Applied, waiting for the recruiter screen | 8 days (6 working days) | 2 working days |

> Contact each of these candidates this week, even if the only news is "no decision yet".

## Drop-offs
| ID | Stage they were in | Days waiting before withdrawing | Next step they were waiting for |
|---|---|---|---|
| C-04 | Mock client call | 10 | Values conversation |
| C-08 | Debrief | 12 | A decision or offer |

2 of 14 candidates withdrew. Both left during one of the three biggest waits. The data doesn't say why.

## Fixes
| Wait | Likely cause | Fix | Owner | How to measure |
|---|---|---|---|---|
| Applied → recruiter screen (median 8 days) | New applications were reviewed once a week, then a time for the screen was agreed by email | Review new applications every working day. Put a booking link for the screen in the first reply, instead of asking "when are you free?" | Recruiter | Days from Applied to Recruiter screen. Target: first reply within 2 working days |
| Debrief → offer (median 7 days) | Every offer needed pay sign-off after the debrief. Also waiting to see more candidates before deciding (possible, please check) | Pre-approve the salary range and who signs it off at the intake meeting (when the role is planned), so the offer goes out within 2 working days. Decide on each candidate against the scorecard (the list of what the role needs), not against the next one | Hiring manager, with whoever approves pay | Days from Debrief to Offer. Target: 2 working days |
| Mock client call → values conversation (median 6 days) | One values interviewer, with few free slots while travelling | Pre-book 2 values conversation slots a week at intake. Name a backup values interviewer. Send a booking link | Recruiter (booking), values interviewer (holding slots) | Days from Mock client call to Values conversation. Target: 3 working days |

## 30-day plan
| # | Fix | Owner | Measure | Working if... |
|---|---|---|---|---|
| 1 | Review new applications every working day, with a booking link for the screen in the first reply | Recruiter | Days from Applied to Recruiter screen | Every new applicant hears back within 2 working days, and the median wait is well under 8 days |
| 2 | Agree the pay range and sign-off for the open seat now, before its next debrief | Hiring manager, with whoever approves pay | Days from Debrief to Offer | The next offer goes out within 2 working days of the decision |

- **This week:** contact C-13 and C-14.
- **Fix 3 (values conversation slots):** book them at the Customer Success Manager intake, along with the rest of the panel.

**Run this audit again on:** 31 October 2026, with fresh data. Compare the Applied and Debrief rows with this report.

## Appendix: per-candidate timeline
Days in each stage. "–" = didn't reach it. "?" = date missing. "so far" = still waiting on 30 September 2026.

| ID | Applied | Recruiter screen | Written exercise | Hiring manager interview | Mock client call | Values conversation | Debrief | Offer | End | Total days |
|---|---|---|---|---|---|---|---|---|---|---|
| C-01 | 8 | 1 | 4 | – | – | – | – | – | Rejected | 13 |
| C-02 | 11 | 3 | 3 | 2 | 6 | 3 | 7 | 3 | Hired | 38 |
| C-03 | 10 | – | – | – | – | – | – | – | Rejected | 10 |
| C-04 | 8 | 1 | 2 | 4 | 10 | – | – | – | Withdrawn | 25 |
| C-05 | 10 | 4 | 4 | 3 | 10 | 4 | 7 | 2 | Hired | 44 |
| C-06 | 7 | 2 | – | – | – | – | – | – | Rejected | 9 |
| C-07 | 7 | 2 | 3 | 2 | – | – | – | – | Rejected | 14 |
| C-08 | 8 | 1 | 2 | 4 | 6 | 2 | 12 | – | Withdrawn | 35 |
| C-09 | 8 | 1 | ? | ? | 6 | 2 | 3 | – | Rejected | 27 |
| C-10 | 7 | – | – | – | – | – | – | – | Rejected | 7 |
| C-11 | 7 | 2 | 3 | – | – | – | – | – | Rejected | 12 |
| C-12 | 9 | 1 | 4 | 2 | 2 | – | – | – | Rejected | 18 |
| C-13 | 8 | 1 | 2 | 3 | 9 so far | – | – | – | In process | 23 so far |
| C-14 | 8 so far | – | – | – | – | – | – | – | In process | 8 so far |

## Notes on this draft

- **Small sample.** 14 candidates and 2 hires. With fewer than about 10 hires, one unusual candidate can move a median a lot. Read these numbers as a rough guide, and check them against the table above.
- **Median, not average.** The median is the middle value when the waits are sorted from shortest to longest. One very long wait drags an average up but barely moves the median.
- **Days.** Stage waits are calendar days. The over-target check uses working days (Monday to Friday), because the targets are in working days. I didn't take out public holidays.
- **Targets.** You didn't give any, so I used these defaults: a first reply within 2 working days of applying, the next step within 3 working days of any interview, the debrief within 2 working days of the last interview and the offer within 2 working days of the decision. Change them if yours are different.
- **Candidate time.** The Written exercise wait includes the candidate's own time to do the exercise. The Offer wait is the candidate deciding. Neither is a queue to squeeze.
- **What I left out.** C-09's Written exercise and Hiring manager interview waits, because of the missing date. C-09's total of 27 days is still shown, because the first and last dates are known.
- **Likely causes** come from your notes. "Waiting to see more candidates" is my guess, based on C-08 waiting 12 days with no decision. Check every cause with the team before you change anything.
- **Privacy.** Names are replaced with IDs in the order they appear in your export. I used only the candidate, stage, date and outcome columns. Keep the list of who's who in your tracker, not in this report.
- **People.** Every owner is a role. This report is about the process, not anyone's performance.
