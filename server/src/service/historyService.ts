import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;
  weather:
    | [
        {
          name: string;
          temperature: string;
          date: string;
          icon: string;
          iconDescription: string;
          tempF: string;
          windSpeed: string;
          humidity: string;
        }
      ]
    | null;
  constructor(name: string, id: string, weather = null) {
    this.name = name;
    this.id = id;
    this.weather = weather;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {
  //TODO: Define a read method that reads from the db.json file
  private async read() {
    return await fs.readFile("db/db.json", {
      flag: "r",
      encoding: "utf8",
    });
  }
  //
  // TODO: Define a write method that writes the updated cities array to the db.json file
  private async write(cities: City[]) {
    return await fs.writeFile("db/db.json", JSON.stringify(cities, null, "\t"));
  }

  // TODO: Define a getCities method that reads the cities from the db.json file and returns them as an array of City objects
  async getCities() {
    return await this.read().then((citiesJson) => {
      let parsedCities: City[];
      try {
        parsedCities = [].concat(JSON.parse(citiesJson)); // return empty if not an array
      } catch (err) {
        parsedCities = [];
      }
      return parsedCities;
    });
  }

  // TODO Define an addCity method that adds a city to the db.json file
  async addCity(city: string, weather: any) {
    if (!city) {
      throw new Error("Please enter city");
    }
    const citiesArray = await this.getCities(); //get cities array
    let cityExists = false; // create new city if city does not exist
    let existingCity = new City("", "", null);
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
        weather,
      };
      console.log(JSON.stringify(newCity));

      return await this.getCities()
        .then((parsedCities) => {
          return [...parsedCities, newCity];
        })
        .then((updatedCities) => this.write(updatedCities))
        .then(() => newCity); // return new city to JSON file as an array
    } else {
      console.log("City already exists: " + city); // in case city is already logged
      return existingCity;
    }
  }

  // * BONUS TODO: Define a removeCity method that removes a city from the db.json file
  async removeCity(id: string) {
    return await this.getCities()
      .then((cities: City[]): City[] => {
        // array of parsed cities
        return cities.filter((city) => city.id !== id);
      })
      // filter and update array
      .then((filteredCities) => this.write(filteredCities));
  }
}

export default new HistoryService();
