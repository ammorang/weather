import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { CurrentWeather } from '../models/CurrentWeather';
import { ForecastWeather } from '../models/ForecastWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private api: DataService) {}

  async getLocation() {
    try {
      const coords = await this.getCurrentPosition();

      return coords;
    } catch (err) {
      return err;
    }
  }

  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async getWeatherData(type: string, lat: number, lon: number) {
    try {
      const data:any = await this.api.doGet(`data/2.5/${type}?lat=${lat}&lon=${lon}&units=imperial`).toPromise();
      
      if (type === 'weather') {
        let current = {};

        current = this.setCurrentWeatherModel(data);
        return current;
      }
      else {
        let forecastData = {
          forecast: [],
          city: null
        };

        forecastData.city = data.city.name;

        for (let f of data.list) {
          forecastData.forecast.push(this.setWeatherForecast(f));
        }

        return forecastData;
      }
    } catch(err) {

      return err;
    }
  }

  private setCurrentWeatherModel(w: any) {
    return new CurrentWeather(w.name, w.dt, w.main.temp);
  }

  private setWeatherForecast(w: any) {
    return new ForecastWeather(w.dt, w.weather[0].icon, w.main.temp);
  }
}

