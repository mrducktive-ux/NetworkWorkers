export function createCompletionReport(job, score, xp, completedAt = new Date().toISOString()) {
  const outcome = score >= 80 ? 'Satisfactory' : score >= 50 ? 'Coaching recommended' : 'Retraining recommended';
  return {
    reference: job.id,
    title: job.title,
    location: job.location,
    department: job.department,
    qualityScore: score,
    outcome,
    experienceAwarded: xp,
    completedAt,
    evidenceNote: 'Fictional simulation record. Not a real railway work instruction.'
  };
}
