# Getting your pipeline data ready

> A short guide to collecting the data for a time-to-hire audit. Fill in `pipeline-template.csv`, or follow "Doing it by hand" to run the numbers yourself without AI.

## What you need

One row for each stage a candidate entered.

| Column | What to put in it | Example |
|---|---|---|
| candidate_id | An ID, not a name. Keep the list of who's who in your own tracker | C-01 |
| stage | The stage they entered. Spell it the same way every time | Recruiter screen |
| date_entered_stage | The date they entered it, written as YYYY-MM-DD | 2026-07-14 |
| outcome | Optional. On the candidate's last row only: Hired, Rejected, Withdrawn or Active (still in the process) | Rejected |

When a candidate leaves the process, add one last row with Hired, Rejected or Withdrawn as the stage and the date it happened. Without that date, the audit can't tell how long they waited in their last stage.

```csv
candidate_id,stage,date_entered_stage,outcome
C-01,Applied,2026-07-01,
C-01,Recruiter screen,2026-07-09,
C-01,Written exercise,2026-07-10,
C-01,Rejected,2026-07-14,Rejected
C-02,Applied,2026-09-22,Active
```

## From a spreadsheet tracker

If your sheet has one row per candidate and a date column for each stage:

1. Copy it to a new tab. Delete every column except the candidate and the stage dates.
2. Replace names with IDs.
3. Paste it as it is. The skill can turn it into one row per stage.
4. Write dates as YYYY-MM-DD. In Google Sheets: Format → Number → Custom date and time. In Excel: Format Cells → Custom → `yyyy-mm-dd`. This stops anyone mixing up 03/04 (3 April or 4 March).

## From an ATS

An ATS (applicant tracking system) names this report differently in each product. Look for "stage history", "pipeline activity", "candidate journey" or "application stage changes". You need one row per stage change, with a date.

1. Filter to one role and a date range.
2. Export as CSV.
3. Delete every column except candidate, stage, date and outcome. That means emails, phone numbers, CV links, interviewer names, notes, ratings and anything about age, gender or other personal traits.
4. Replace names with IDs.

If your ATS only shows each candidate's current stage, not the history, it can't show waits. Start recording the date each candidate enters each stage from today.

## Before you share it

- Keep only the four columns above.
- Store it where only the hiring team can see it. Delete it when the audit is done.

> **Legal check:** Storing or sharing candidate data in another country touches on data protection law. Rules differ by country. Check with a local employment lawyer or HR expert before you act on it.

## Doing it by hand

Sort the sheet by candidate, then by date. With candidate_id in column A, stage in B and the date in C:

1. **Days in stage.** In E2, type `=IF(A3=A2, C3-C2, "")` and copy it down. Each number is the days that candidate spent in that row's stage.
2. **Median per stage.** `=MEDIAN(FILTER(E:E, B:B="Applied", E:E<>""))`. Change "Applied" for each stage. This works in Google Sheets and Excel 365.
3. **Longest wait per stage.** The same formula with `MAX` in place of `MEDIAN`.
4. **Still waiting.** For a candidate's last row, if they're still in the process: the as-of date minus their date. Keep these apart from the medians.
5. **Time-to-hire.** For each hire: the Hired date minus the Applied date.

The stage with the longest median wait is where to start.
