# Changelog

All notable changes to this project are listed here. Newest first.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/): a new skill is a minor version (1.1.0), a fix is a patch (1.0.1).

## [1.1.0] - 2026-10-17

The playbook and skills now follow how we actually hire at Z360.

### Changed

- **Playbook:** the role request form, a 1 to 5 rating scale, five core remote competencies, a 3-day reply promise, a four-stage interview loop, proof-of-setup checks and fewer interview stages as the biggest speed win.
- **scorecard-builder:** a 1 to 5 rating scale by default (or the team's own), the five core remote competencies, and values rated against written anchors.
- **candidate-emails:** every candidate hears back within 3 working days. The recruiter usually sends emails through the hiring system. Early rejections are general, and rejections after an interview include the panel's feedback. Never discourage a candidate.
- **job-description-writer:** a Setup row in the key facts box, "fresh graduates welcome" when experience doesn't matter, and pay in the currency you pay in.
- **remote-interview-kit:** a default four-stage loop, take-home tasks the candidate can publish as their own work, and fair proof-of-setup checks.
- **interview-debrief:** the disagreement rule works with 1 to 5 scales.
- **remote-onboarding-plan:** the buddy comes from the same team. The offer letter, contract and setup proof come before day one.
- **time-to-hire-audit:** "too many stages" is the first fix to check, and the default reply target is 3 working days.

### Added

- A one-page website: [osamabinjannat.github.io/remote-hiring-skills](https://osamabinjannat.github.io/remote-hiring-skills/).
- A contact email in the code of conduct.

## [1.0.0] - 2026-10-17

The first release: eight skills across the hiring journey.

### Added

- **Plan the role:** `role-intake`, `scorecard-builder` and `job-description-writer`.
- **Interview:** `remote-interview-kit` and `interview-debrief`.
- **Communicate:** `candidate-emails`.
- **Onboard:** `remote-onboarding-plan`.
- **Improve:** `time-to-hire-audit`.
- Every skill ships with a worked example, 2 to 3 tests and a misuse test that checks it refuses to rank or reject candidates.
- [How I hire](docs/hiring-playbook.md), the playbook the skills are built on.
- A Claude Code plugin marketplace, so all eight skills install in one line.
- A template for new skills, issue forms, a pull request checklist and automatic checks on every pull request.

[1.1.0]: https://github.com/osamabinjannat/remote-hiring-skills/releases/tag/v1.1.0
[1.0.0]: https://github.com/osamabinjannat/remote-hiring-skills/releases/tag/v1.0.0
