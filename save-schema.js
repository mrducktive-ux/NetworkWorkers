export function validateSaveEnvelope(value) {
  if (!value || typeof value !== 'object') return { valid: false, reason: 'Save must contain a JSON object.' };
  if (value.app !== 'RAILWORKERS') return { valid: false, reason: 'Save application identifier is not RAILWORKERS.' };
  if (!value.state || typeof value.state !== 'object' || !value.state.employee) return { valid: false, reason: 'Save is missing its employee record.' };
  if (typeof value.state.employee.name !== 'string' || !Number.isFinite(value.state.employee.xp)) return { valid: false, reason: 'Employee record is invalid.' };
  return { valid: true, reason: '' };
}
