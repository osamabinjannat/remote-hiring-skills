# Test: Two interviewers disagree sharply

**Skill:** interview-debrief · **Type:** standard

> Everything here is made up. All companies and names are fictional.

## Prompt

> Debrief for Zainab Qureshi is Friday and I think it'll get heated. Fatima and Ravi completely disagree on her code. Can you prep it so we focus on evidence, not on who argues loudest? Role: frontend developer at Brightline Pay (UAE fintech), remote, based in Pakistan. Omar Haddad (Engineering Manager) is the hiring manager and decides.
>
> Scorecard: 1 Code quality 35% (pair programming, code review exercise) · 2 Communication with the team 25% (pair programming, hiring manager interview) · 3 Product sense 20% (hiring manager interview) · 4 Values alignment 20% (hiring manager interview). Scale 1 to 4.
>
> **Fatima Shah, Frontend developer (pair programming, Mon):** split the form into small components without being asked. Wrote a failing test before fixing the bug. Talked through every choice out loud. Code quality 4, communication 3.
>
> **Ravi Menon, Senior frontend developer (code review exercise, Tue):** PR had a planted XSS hole and no input validation on the amount field. She commented on naming and folder structure but didn't spot either. Code quality 1.
>
> **Omar (hiring manager interview, Wed):** explained a trade-off she made on a checkout page clearly, asked good questions about our users in Saudi. Communication 4, product sense 3. Values: owned a bad release at her last job and wrote the post-mortem herself. 3

## A good output must

- [ ] List Code quality under "Where interviewers disagree", with Fatima's rating (4) and evidence next to Ravi's rating (1) and evidence.
- [ ] Name the stage behind each rating: pair programming for Fatima, code review exercise for Ravi.
- [ ] Give one specific thing to find out, such as a short follow-up question on how she checks a pull request for security problems, or a reference check question.
- [ ] Copy every rating exactly as written, with no average, total or "middle" rating for Code quality.
- [ ] Leave Communication with the team (3 and 4) out of the disagreements, because both ratings are at or above the bar, and say so in "Notes on this draft".
- [ ] Give the disagreement its own slot in the 30-minute agenda, with Fatima speaking before Ravi and Omar speaking last.
- [ ] Explain "XSS" or "pull request" in plain words if it uses them outside a quote.

## A good output must not

- [ ] Say which interviewer is right, or describe either view as stronger or more reliable.
- [ ] Recommend, lean towards or hint at hire or no-hire.
