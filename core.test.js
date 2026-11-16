import test from 'node:test';
import assert from 'node:assert/strict';
import {freshState,rankForXp,awardJob,exportState,importState} from '../src/core/store.js';
import {formatTime,scoreEvidence,scoreSequence,makeReference} from '../src/core/engine.js';
import {workOrders,departments,courses} from '../src/data/content.js';

test('career rank thresholds are consistent',()=>{assert.equal(rankForXp(0),0);assert.equal(rankForXp(400),1);assert.equal(rankForXp(2200),3);assert.equal(rankForXp(9000),6);});
test('work order awards XP, credits and completion once',()=>{const s=freshState();const job={id:'RW-TEST',title:'Test job',department:'track',xp:100};const r=awardJob(s,job,80);assert.equal(r.xp,80);assert.equal(r.state.employee.completed,1);assert.equal(r.state.credits,282);assert.equal(awardJob(r.state,job,100).already,true);});
test('save export and import preserve career state',()=>{const s=freshState();s.employee.name='Test Employee';s.employee.xp=650;const copy=importState(exportState(s));assert.equal(copy.employee.name,'Test Employee');assert.equal(copy.employee.xp,650);});
test('time formatting wraps around midnight',()=>{assert.equal(formatTime(0),'00:00');assert.equal(formatTime(1500),'01:00');assert.equal(formatTime(-1),'23:59');});
test('evidence and sequence scoring are bounded',()=>{assert.equal(scoreEvidence(3,4),75);assert.equal(scoreSequence(['a','b'],['a','b']),100);assert.equal(scoreSequence(['a','x'],['a','b']),50);});
test('reference IDs are padded',()=>{assert.equal(makeReference('RW',7),'RW-00007');});

test('content catalogue contains thirty unique work orders across six departments',()=>{assert.equal(workOrders.length,30);assert.equal(new Set(workOrders.map(j=>j.id)).size,30);assert.equal(departments.length,6);assert.ok(departments.every(d=>workOrders.some(j=>j.department===d.id)));});
test('academy catalogue contains ten courses',()=>{assert.equal(courses.length,10);assert.ok(courses.every(c=>c.lessons>=3));});

import {advanceWeather,weatherDifficulty} from '../src/systems/weather-system.js';
import {progressionSnapshot} from '../src/systems/progression-system.js';
import {activityTypes} from '../src/minigames/activity-catalogue.js';
import {validateSaveEnvelope} from '../src/validation/save-schema.js';

test('weather cycles and provides fictional difficulty levels',()=>{assert.equal(advanceWeather(7),0);assert.equal(weatherDifficulty(3),3);});
test('progression snapshot identifies the next career milestone',()=>{const p=progressionSnapshot({xp:650});assert.equal(p.rank,1);assert.equal(p.remaining,450);});
test('mini-game catalogue defines all ten activity mechanics',()=>{assert.equal(Object.keys(activityTypes).length,10);});
test('save validation rejects unrelated and incomplete files',()=>{assert.equal(validateSaveEnvelope({app:'OTHER'}).valid,false);assert.equal(validateSaveEnvelope({app:'RAILWORKERS',state:{employee:{name:'Test',xp:0}}}).valid,true);});
