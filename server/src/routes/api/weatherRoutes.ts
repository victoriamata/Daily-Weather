import { Router, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import historyService from '../../service/historyService.js';
import weatherService from '../../service/weatherService.js';
// import objects from historyService and weatherService 

dotenv.config();
const router = Router();

// console.log(process.env);
// console.log("Start");
// console.log(process.env.API_KEY);
// console.log(process.env.API_BASE_URL);
// console.log("end");

// TODO: POST Request with city name to retrieve weather data
// TODO: GET weather data from city name 
router.post('/', async (req: Request, res: Response) => {
  try {
    const {cityName} = req.body; //receive city name from client
    console.log(`Saved city name: ${cityName}.`);
  if (!cityName) { //in case city name wasn't entered: client error message
    res.status(400).json({ message: 'Please enter city name.'});
 }
 
 // TODO: save city to search history
 const weatherInfo = await weatherService.getWeatherForCity(cityName);
    const savedCity = await historyService.addCity(cityName, weatherInfo);
    console.log(JSON.stringify(savedCity.weather))
    return res.status(200).json(savedCity.weather); // successfully saved weather
  } catch (error) {
    console.error('Error retrieving data', error);
    return res.status(500).json({ message: 'Error Retrieving data' }); // Server error response
  }
 });
 
 
 // TODO: GET search history
 router.get('/history', async (_req: Request, res: Response) => {
  try {
    const cities = await historyService.getCities(); 
    res.status(200).json(cities); // 
  } catch (error) {
    res.status(500).json({ message: 'Unable to get cities', error });
  }
 });
 
 // * BONUS TODO: DELETE city from search history
 router.delete('/history/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params; //req.params makes path available to use
    await historyService.removeCity(id);
    res.status(200).json({ message: 'City removed.' }); //successful response
  } catch (error) {
    res.status(500).json({ message: 'Error; unable to remove city.', error }); // server error message
  }
 });

export default router;