import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

console.log(__dirname);
//logging dirname so that ts will allow me to run
// TODO: Define route to serve index.html



export default router;
