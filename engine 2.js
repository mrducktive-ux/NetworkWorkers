export function formatTime(total){const m=((total%1440)+1440)%1440;return `${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;}
export function scoreEvidence(found,total){return Math.max(0,Math.min(100,Math.round((found/Math.max(1,total))*100)));}
export function scoreSequence(order,target){const correct=order.filter((v,i)=>v===target[i]).length;return Math.round(correct/target.length*100);}
export function getPriorityClass(priority){return priority.toLowerCase()==='priority'?'priority':priority.toLowerCase()==='standard'?'standard':'routine';}
export function makeReference(prefix,n){return `${prefix}-${String(n).padStart(5,'0')}`;}
