import { Router, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import historyService from '../../service/historyService.js';
import weatherService from '../../service/weatherService.js';
// import objects from historyService and weatherService 

dotenv.config();
const router = Router();

console.log(process.env);
console.log("Start");
console.log(process.env.API_KEY);
console.log(process.env.API_BASE_URL);
console.log("end");

// TODO: POST Request with city name to retrieve weather data
// TODO: GET weather data from city name 
router.post('/', async (req: Request, res: Response) => {}

// TODO: save city to search history

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {}


// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {}

export default router;