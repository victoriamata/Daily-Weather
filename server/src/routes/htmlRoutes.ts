import express, { type Request, type Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

//logging dirname so that ts will allow me to run
console.log(__dirname);
// TODO: Define route to serve index.html
router.use(express.static(path.join(__dirname, '../../../client/dist/index.html')));

router.get('/', (_req: Request, res: Response) => {
   res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;
