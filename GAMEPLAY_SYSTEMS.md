# Gameplay Systems

## Career loop

1. Select an available work order from the assignment register.
2. Review the fictional brief, location, department, priority and duration.
3. Launch the activity mechanic assigned to the scenario.
4. Complete the interactive evidence, matching, sequencing, logic, quiz, comparison, triage or resource-allocation challenge.
5. Submit the result for a quality score.
6. Receive experience and fictional depot credits; update the career record and achievements.

## Career progression

| Rank | Experience threshold |
|---|---:|
| Trainee | 0 XP |
| Maintenance Assistant | 400 XP |
| Technician | 1,100 XP |
| Senior Technician | 2,200 XP |
| Team Leader | 3,800 XP |
| Supervisor | 6,000 XP |
| Area Manager | 9,000 XP |

Experience is earned from work-order quality results and course completion. The rank calculation is centralised in `src/systems/progression-system.js` and `src/core/store.js`.

## Activity mechanics

- Evidence selection: choose the strongest scene observations.
- Asset matching: pair fictional asset references with descriptions.
- Workflow sequence: arrange report stages in order.
- Logic investigation: answer branching evidence questions.
- Knowledge check: answer awareness-level course questions.
- Condition comparison: compare two fictional scene summaries.
- Evidence triage: select the strongest report records.
- Resource planning: allocate a limited token budget.

## Weather

The regional weather catalogue cycles through clear, rain, heavy rain, fog, snow, wind, frost and autumn leaves. `src/systems/weather-system.js` exposes the current condition, cycling and a lightweight fictional difficulty index.

## Saving

The browser stores the career object under `railworkers-save-v1`. The export envelope includes the application identifier and schema version. The import function rejects unrelated files and reconstructs missing default fields. Users should export a backup before resetting browser data.
