import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private api: DataService) {}

  async getWeatherData(type: string, lat: number, lon: number) {
    try {
      const data:any = await this.api.doGet(`data/2.5/${type}?lat=${lat}&lon=${lon}`).toPromise();

      return data;
    } catch(err) {

      return err;
    }
  }
}

