import dotenv from 'dotenv';
dotenv.config();

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  date: string;
  icon: string;
  iconDesc: string;
  humidity: string;
  tempF: string;
  windSpeed: string;

  constructor(
    city: string,
    date: string,
    tempF: string,
    windSpeed: string,
    icon: string,
    iconDesc: string,
    humidity: string) {
    this.city = city;
    this.date = date;
    this.tempF = tempF;
    this.humidity = humidity;
    this.icon = icon;
    this.iconDesc = iconDesc;
    this.windSpeed = windSpeed;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  baseURL: string;
  private apiKey: string;
  
  // TODO: Define the baseURL, API key, and city name properties

  constructor() {
    this.baseURL = process.env.API_BASE_URL || ''; 
    this.apiKey = process.env.OPENWEATHER_API_KEY || '';
  }


  // TODO: Complete getWeatherForCity method
  //disregard geolocation methods

}

export default new WeatherService();
