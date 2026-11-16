import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const base = process.env.SERVE_DIR || 'dist';
const types = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.webmanifest':'application/manifest+json','.json':'application/json'};
http.createServer(async (req,res)=>{try{let path=decodeURIComponent((req.url||'/').split('?')[0]);if(path==='/'||path.endsWith('/'))path+='index.html';const file=normalize(join(base,path));if(!file.startsWith(normalize(base)))throw new Error('invalid path');const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(data);}catch{res.writeHead(404);res.end('Not found');}}).listen(4173,()=>console.log('RAILWORKERS preview: http://localhost:4173'));
