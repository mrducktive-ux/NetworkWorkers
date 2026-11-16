export const activityTypes = Object.freeze({
  inspection: { title: 'Field observation', mechanic: 'evidence-selection' },
  search: { title: 'Scene search', mechanic: 'evidence-selection' },
  evidence: { title: 'Evidence review', mechanic: 'evidence-selection' },
  matching: { title: 'Asset matching', mechanic: 'pair-matching' },
  sequence: { title: 'Workflow sequence', mechanic: 'ordered-selection' },
  logic: { title: 'Logic investigation', mechanic: 'question-branching' },
  quiz: { title: 'Knowledge check', mechanic: 'multiple-choice' },
  compare: { title: 'Condition comparison', mechanic: 'comparative-choice' },
  sorting: { title: 'Evidence triage', mechanic: 'multi-select' },
  planning: { title: 'Resource planning', mechanic: 'allocation' }
});

export function activityDefinition(type) {
  return activityTypes[type] || activityTypes.evidence;
}
