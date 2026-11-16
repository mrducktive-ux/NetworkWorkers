export const departments = [
  {id:'track',name:'Track Maintenance',short:'TRACK',accent:'#d88b3d',description:'Condition assessments, trackside asset records and fictional maintenance challenges.',jobs:8,icon:'╱'},
  {id:'signalling',name:'Signalling',short:'SIGNALLING',accent:'#6c9bd1',description:'Logic puzzles, control-panel evidence and fictional fault investigations.',jobs:5,icon:'▥'},
  {id:'electrification',name:'Electrification',short:'ELECTRIFICATION',accent:'#e1b85a',description:'Visual asset awareness and simulated equipment condition reviews.',jobs:4,icon:'ϟ'},
  {id:'telecoms',name:'Telecommunications',short:'TELECOMS',accent:'#8e85c8',description:'Communications diagnostics, radio checks and network fault reports.',jobs:4,icon:'⌁'},
  {id:'structures',name:'Structures & Drainage',short:'STRUCTURES',accent:'#5eaa91',description:'Bridge, tunnel, drainage and weather-response assessments.',jobs:5,icon:'⌂'},
  {id:'fleet',name:'Fleet & Plant',short:'FLEET',accent:'#c47d75',description:'Vehicle allocation, inventory and fictional plant condition reviews.',jobs:4,icon:'▰'}
];
const jobSeeds = [
 ['track','Rural line visual survey','Ashford Vale · Milepost 14','Routine','Record six illustrated condition observations.','inspection'],
 ['track','Sleeper condition review','Westbrook Cutting','Standard','Identify the marked sleeper condition cards.','evidence'],
 ['track','Ballast profile assessment','Hawthorn Curve','Standard','Compare the illustrated profile with the reference guide.','compare'],
 ['track','Fictional weld quality puzzle','North Fen Yard','Priority','Arrange the colour-coded quality tiles in the correct sequence.','sequence'],
 ['track','Autumn debris survey','Millbrook Junction','Standard','Locate and catalogue the seasonal trackside markers.','search'],
 ['track','Trackside asset inventory','Cedar Bank','Routine','Match asset tags to the illustrated inventory.','matching'],
 ['track','Drainage-adjacent observation','Pinewater','Priority','Review the fictional water-level indicators and file a report.','evidence'],
 ['track','Post-weather condition report','Ashford Vale · East','Standard','Compare before-and-after scene cards.','compare'],
 ['signalling','Panel logic investigation','Eldermere Control Room','Priority','Solve a fictional indicator-logic puzzle.','logic'],
 ['signalling','Indicator state review','Brookfield','Routine','Identify inconsistent display states in a mock panel.','evidence'],
 ['signalling','Control-room evidence pack','Eldermere','Standard','Sort evidence into confirmed, possible and ruled-out groups.','matching'],
 ['signalling','Route diagram puzzle','Westbrook','Standard','Complete a fictional route-colour logic grid.','logic'],
 ['signalling','Panel condition record','North Fen','Routine','Inspect the illustrated mock panel and submit observations.','inspection'],
 ['electrification','Overhead asset awareness','Merefield','Standard','Identify fictional asset labels in an illustrated scene.','search'],
 ['electrification','Equipment condition cards','Eastmere','Routine','Classify the sample cards by visual condition.','matching'],
 ['electrification','Electrical awareness quiz','Training Annex','Standard','Complete a safety-awareness knowledge check.','quiz'],
 ['electrification','Weather impact review','Cedar Bank','Priority','Assess fictional weather flags and choose a response category.','evidence'],
 ['telecoms','Radio check simulation','Ashford Depot','Routine','Match simulated radio call signs to team records.','matching'],
 ['telecoms','Communications fault log','Westbrook','Standard','Sort a fictional fault timeline into a clear report.','sequence'],
 ['telecoms','Network status investigation','Eldermere','Priority','Interpret a simplified network status board.','logic'],
 ['telecoms','Portable equipment register','Ashford Depot','Routine','Reconcile equipment labels with the issue register.','matching'],
 ['structures','Bridge visual inspection','River Stour Bridge','Standard','Locate the illustrated inspection markers.','search'],
 ['structures','Tunnel condition assessment','Merefield Tunnel','Priority','Review fictional condition indicators and record findings.','evidence'],
 ['structures','Drainage response exercise','Pinewater','Priority','Allocate response resources using the weather board.','planning'],
 ['structures','Flooding impact report','Lowmead','Standard','Compare water-level snapshots and prepare a report.','compare'],
 ['structures','Station canopy review','Ashford Vale Station','Routine','Classify the illustrated structure condition cards.','matching'],
 ['fleet','Vehicle availability review','Ashford Depot','Routine','Allocate available fictional vehicles to three teams.','planning'],
 ['fleet','Plant inventory reconciliation','North Fen Yard','Standard','Match tool silhouettes to the inventory register.','matching'],
 ['fleet','Fleet defect triage','Ashford Depot','Priority','Prioritise fictional defect cards by urgency.','sorting'],
 ['fleet','Autumn campaign allocation','Regional Operations','Priority','Balance teams, vehicles and supplies for the campaign.','planning']
];
export const workOrders = jobSeeds.map((j,i)=>({id:`RW-${String(2401+i).padStart(5,'0')}`,department:j[0],title:j[1],location:j[2],priority:j[3],description:j[4],type:j[5],duration:20+(i%5)*10,xp:80+(i%4)*20,status:i<5?'Available':'Queued',assigned:i===0?'You':null}));
export const courses = [
 {id:'intro',name:'Railway Infrastructure Fundamentals',department:'General',level:'Foundation',duration:'25 min',lessons:4,description:'An introduction to the fictional railway organisation, asset groups and reporting culture.'},
 {id:'track-awareness',name:'Track Awareness',department:'Track Maintenance',level:'Foundation',duration:'30 min',lessons:5,description:'Recognising common asset groups in illustrated learning scenes.'},
 {id:'signal-awareness',name:'Signalling Awareness',department:'Signalling',level:'Foundation',duration:'35 min',lessons:5,description:'Understand terminology and solve non-operational mock-panel puzzles.'},
 {id:'electrical-awareness',name:'Electrical Awareness',department:'Electrification',level:'Foundation',duration:'30 min',lessons:4,description:'Awareness-only learning about fictional equipment labels and reporting.'},
 {id:'comms',name:'Telecommunications Basics',department:'Telecommunications',level:'Foundation',duration:'20 min',lessons:4,description:'Communications equipment records and simulated radio etiquette.'},
 {id:'structures',name:'Structures & Environment',department:'Structures',level:'Foundation',duration:'25 min',lessons:4,description:'Bridge, tunnel, drainage and environmental observation.'},
 {id:'reporting',name:'Incident Reporting',department:'Operations',level:'Intermediate',duration:'20 min',lessons:3,description:'Build concise, evidence-based fictional incident reports.'},
 {id:'planning',name:'Work Planning Essentials',department:'Operations',level:'Intermediate',duration:'35 min',lessons:5,description:'Plan fictional teams, resources and work priorities.'},
 {id:'quality',name:'Quality Assurance',department:'Management',level:'Intermediate',duration:'25 min',lessons:4,description:'Use consistent scoring and close-out records.'},
 {id:'leadership',name:'Team Leadership',department:'Management',level:'Advanced',duration:'40 min',lessons:6,description:'Communication, coaching and performance conversations.'}
];
export const staff = [
 {name:'Morgan Ellis',role:'Area Supervisor',department:'Track Maintenance',depot:'Ashford Depot',status:'On shift',xp:8400},
 {name:'Priya Shah',role:'Senior Technician',department:'Signalling',depot:'Eldermere Control',status:'Available',xp:5200},
 {name:'Jamie Brooks',role:'Technician',department:'Structures & Drainage',depot:'Westbrook Depot',status:'On shift',xp:3100},
 {name:'Alex Morgan',role:'Team Leader',department:'Fleet & Plant',depot:'Ashford Depot',status:'On leave',xp:6900},
 {name:'Taylor Reed',role:'Technician',department:'Telecommunications',depot:'North Fen Yard',status:'Available',xp:2750},
 {name:'Sam Patel',role:'Maintenance Assistant',department:'Track Maintenance',depot:'Westbrook Depot',status:'On shift',xp:1450},
 {name:'Casey Ward',role:'Senior Technician',department:'Electrification',depot:'Merefield Depot',status:'Available',xp:6100},
 {name:'Robin Clarke',role:'Operations Planner',department:'Operations',depot:'Regional Office',status:'On shift',xp:7300}
];
export const depots = [
 {name:'Ashford Depot',code:'AFD',region:'South East',staff:34,vehicles:12,condition:94,description:'Regional operations hub with fleet parking, stores and training rooms.'},
 {name:'Westbrook Depot',code:'WBD',region:'South East',staff:21,vehicles:8,condition:88,description:'Rural maintenance base serving the Westbrook and Hawthorn areas.'},
 {name:'North Fen Yard',code:'NFY',region:'Eastern',staff:18,vehicles:7,condition:91,description:'Plant and materials yard with a small operations office.'},
 {name:'Merefield Depot',code:'MFD',region:'South East',staff:16,vehicles:6,condition:86,description:'Structures and electrification support base near Merefield.'}
];
export const fleet = [
 {id:'UTV-014',name:'Utility Support Vehicle',type:'Road vehicle',depot:'Ashford Depot',condition:96,status:'Available'},
 {id:'MPV-022',name:'Multi-purpose Plant Unit',type:'Plant',depot:'North Fen Yard',condition:82,status:'Allocated'},
 {id:'INS-031',name:'Inspection Railcar',type:'Inspection vehicle',depot:'Westbrook Depot',condition:91,status:'Available'},
 {id:'TRN-008',name:'Training Demonstrator',type:'Training asset',depot:'Ashford Depot',condition:100,status:'Available'},
 {id:'GEN-019',name:'Mobile Generator Mock-up',type:'Support equipment',depot:'Merefield Depot',condition:74,status:'Review required'},
 {id:'COM-011',name:'Communications Van',type:'Road vehicle',depot:'North Fen Yard',condition:89,status:'Available'},
 {id:'LFT-006',name:'Stores Lift Truck',type:'Depot plant',depot:'Ashford Depot',condition:78,status:'Available'},
 {id:'WTR-004',name:'Water Response Trailer',type:'Support trailer',depot:'Westbrook Depot',condition:93,status:'Available'}
];
export const weatherTypes = [
 {name:'Clear',symbol:'☀',temp:12,impact:'Normal visibility'}, {name:'Light rain',symbol:'☂',temp:10,impact:'Slightly reduced visibility'}, {name:'Heavy rain',symbol:'☔',temp:8,impact:'Reduced visibility'}, {name:'Fog',symbol:'≋',temp:7,impact:'Low visibility'}, {name:'Snow',symbol:'❄',temp:1,impact:'Seasonal conditions'}, {name:'Windy',symbol:'〰',temp:9,impact:'Wind advisory'}, {name:'Frost',symbol:'✣',temp:2,impact:'Cold conditions'}, {name:'Autumn leaves',symbol:'❧',temp:11,impact:'Seasonal debris'}
];
export const ranks = ['Trainee','Maintenance Assistant','Technician','Senior Technician','Team Leader','Supervisor','Area Manager'];
export const achievements = [
 {id:'first-job',name:'First Shift',description:'Complete your first work order.',xp:100},
 {id:'five-jobs',name:'Getting into Rhythm',description:'Complete five work orders.',xp:150},
 {id:'academy-one',name:'Back to School',description:'Complete your first academy course.',xp:100},
 {id:'perfect-report',name:'Sharp Eye',description:'Earn a quality score of 95 or more.',xp:200},
 {id:'all-rounder',name:'All-rounder',description:'Complete work in three departments.',xp:250},
 {id:'ten-jobs',name:'Reliable Colleague',description:'Complete ten work orders.',xp:300},
 {id:'campaign',name:'Autumn Ready',description:'Complete the autumn resource campaign.',xp:250}
];
