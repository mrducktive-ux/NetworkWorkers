import { cp, mkdir, rm, copyFile } from 'node:fs/promises';
const root = process.cwd();
const out = `${root}/dist`;
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const item of ['index.html','src','public','sw.js']) await cp(`${root}/${item}`, `${out}/${item}`, { recursive: true });
console.log('RAILWORKERS static production build created in dist/.');
