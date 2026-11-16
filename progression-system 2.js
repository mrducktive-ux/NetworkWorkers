import { ranks } from '../data/content.js';

export const rankThresholds = [0, 400, 1100, 2200, 3800, 6000, 9000];

export function rankFromExperience(xp) {
  let rank = 0;
  rankThresholds.forEach((threshold, index) => {
    if (xp >= threshold) rank = index;
  });
  return rank;
}

export function progressionSnapshot(employee) {
  const rank = rankFromExperience(employee.xp);
  const next = rankThresholds[rank + 1] ?? null;
  return {
    rank,
    rankName: ranks[rank],
    nextThreshold: next,
    remaining: next === null ? 0 : Math.max(0, next - employee.xp),
    progress: next === null ? 100 : Math.min(100, Math.round(employee.xp / next * 100))
  };
}
