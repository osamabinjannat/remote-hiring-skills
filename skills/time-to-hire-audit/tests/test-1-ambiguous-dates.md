# Test: Ambiguous dates and a row out of order

**Skill:** time-to-hire-audit · **Type:** standard

## Prompt

> our frontend dev hire (remote, Lahore) is dragging and my MD keeps asking why. pasted from our sheet below, data is up to 12/04. where are we slow?
>
> | Name | Stage | Date |
> |---|---|---|
> | Omar | Applied | 02/03/2026 |
> | Omar | Phone screen | 09/03/2026 |
> | Omar | Tech task | 11/03/2026 |
> | Omar | Final interview | 06/04/2026 |
> | Omar | Offer | 10/04/2026 |
> | Laila | Applied | 03/03/2026 |
> | Laila | Phone screen | 10/03/2026 |
> | Laila | Tech task | 12/03/2026 |
> | Laila | Final interview | 07/04/2026 |
> | Laila | Rejected | 09/04/2026 |
> | Tariq | Applied | 05/03/2026 |
> | Tariq | phone screen | 12/03/2026 |
> | Tariq | Final interview | 08/03/2026 |
> | Tariq | Tech task | 01/04/2026 |
> | Mehwish | Applied | 09/03/2026 |
> | Mehwish | Phone screen | 06/04/2026 |
> | Mehwish | Withdrawn | 10/04/2026 |
> | Saad | Applied | 11/03/2026 |

## A good output must

- [ ] Either ask whether the dates are day/month or month/day before doing any maths, or state clearly at the top that it read them as day/month (for example 02/03/2026 = 2 March) and ask the user to confirm.
- [ ] Read the as-of date "12/04" the same way, and say which date it used.
- [ ] Flag Tariq's Final interview row as out of order: it's dated 8 March, before his phone screen on 12 March. Leave out the waits it affects, or ask the user to check that date, and say which.
- [ ] Merge "phone screen" and "Phone screen" into one stage and say so.
- [ ] Replace every name with an ID (C-01 to C-05).
- [ ] Say that nobody has been hired yet, so there's no time-to-hire to report.
- [ ] Warn that 5 candidates is far too small a sample to draw firm conclusions.
- [ ] List Saad (as an ID) as waiting over target in Applied, about 32 days by 12 April if read as day/month, for a person to contact.
- [ ] Show the per-candidate table so the user can check the numbers.

## A good output must not

- [ ] Pick a date format silently.
- [ ] Guess or "correct" the out-of-order date.
- [ ] Show any candidate's name.
