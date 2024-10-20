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
  async getWeatherForCity(city: string): Promise<Weather[]> {
    try {
      console.log(city);
      console.log(`${this.baseURL}/data/2.5/forecast?q=${city}&units=metric&appid=${this.apiKey}`);
      let response = await fetch(`${this.baseURL}/data/2.5/forecast?q=${city}&units=imperial&appid=${this.apiKey}`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
      }
 
      const data = await response.json();
      console.log(data);
      const weatherInfo = this.parseWeather(data);
      console.log(weatherInfo);
      return weatherInfo;
    } catch (error) {
      console.error(`Error:`, error);
      throw error;
    }
  }
 
  private parseWeather(data: any): Weather[] {
    // Ensure there is data to parse
    if (!data) {
      throw new Error('No data');
    }
    const forecast = data.list.filter((forecastItem: any) => {
      const time = forecastItem.dt_txt.split(' ')[1];
      return time === '12:00:00';
  });
  const cityName = data.city.name;
    const weatherInfo: Weather[] = forecast.map((forecastItem: any) => {
      const city = cityName;
      const date = new Date(forecastItem.dt * 1000).toLocaleDateString();
      const tempF = forecastItem.main.temp;
      const icon = forecastItem.weather[0].icon;
      const iconDescription = forecastItem.weather[0].description;
      const windSpeed = forecastItem.wind.speed;
      const humidity = forecastItem.main.humidity;
      return new Weather(city, date, icon, iconDescription, tempF, windSpeed, humidity);
    });
    console.log(weatherInfo);
    return weatherInfo;
  }
 }

export default new WeatherService();
