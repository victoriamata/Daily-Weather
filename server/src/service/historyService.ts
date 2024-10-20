import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;
  weather: [{ 
    name: string; 
    date: string;
    icon: string;
    iconDesc: string;
    temperature: string;
    humidity: string;
    tempF: string;
    windSpeed: string;
  }] | null;
  constructor(
    name: string,
    id: string,
    weather = null
  ) {
    this.name = name;
    this.id = id;
    this.weather = weather;
  }

}
// TODO: Complete the HistoryService class
class HistoryService {
  //TODO: Define a read method that reads from the searchHistory.json file

  
  
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
    
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  
  

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  

export default new HistoryService();
