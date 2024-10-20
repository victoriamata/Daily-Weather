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
  private async read() {
    return await fs.readFile('db/db.json', {
      flag: 'r',
      encoding: 'utf8',
    });
  }
 
  
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    return await fs.writeFile(
      'db/db.json',
      JSON.stringify(cities, null, '\t');
    );
  }
 

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    return await this.read().then((citiesJson) => {
      let parsedCities: City[];
 
 
     
      try {
        parsedCities = [].concat(JSON.parse(citiesJson));
      } catch (err) {
        parsedCities = [];
      }
 
 
      return parsedCities;
    });
  }
 
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string, weather: any) {
    if (!city) {
      throw new Error('Please enter city');
    }
    const citiesArray = await this.getCities();
    let cityExists = false;
    let existingCity = new City('','',null);
   
    for (let i = 0; i < citiesArray.length; i++) {
      if (city.toLowerCase() === citiesArray[i].name.toLowerCase()) {
        cityExists = true;
        existingCity = citiesArray[i];
        break;
      }
    }
  
    if (!cityExists) {
      const newCity: City = {
        name: city,
        id: uuidv4(),
        weather
      }
      console.log(JSON.stringify(newCity));
 
 
      return await this.getCities()
        .then((parsedCities) => {
          return [...parsedCities, newCity];
        })
        .then((updatedCities) => this.write(updatedCities))
        .then(() => newCity);
    } else {
      console.log('City already exists: ' + city);
      return existingCity;
  } }
}
  

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  

export default new HistoryService();
