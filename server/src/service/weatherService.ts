import dotenv from 'dotenv';
dotenv.config();

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  date: string;
  icon: string;
  iconDescription: string;
  humidity: string;
  tempF: string;
  windSpeed: string;

  constructor(
    city: string,
    date: string,
    tempF: string,
    windSpeed: string,
    icon: string,
    iconDescription: string,
    humidity: string) {
    this.city = city;
    this.date = date;
    this.tempF = tempF;
    this.humidity = humidity;
    this.icon = icon;
    this.iconDescription = iconDescription;
    this.windSpeed = windSpeed;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  baseURL: string;
  private apiKey: string;
  
  // TODO: Define the baseURL, API key, and city name properties

  constructor() {
    this.baseURL = 'https://api.openweathermap.org';
    this.apiKey = '0fe95b8870fbf5a57093c4141326a1ca';
  }

  // TODO: Complete getWeatherForCity method
  //disregard geolocation methods
  // async getWeatherForCity(city: string): Promise<Weather[]> {}
    

export default new WeatherService();
