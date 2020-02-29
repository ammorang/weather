import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {
  public forecast: any;
  public error: any = null;
  public showError: boolean = false;

  constructor(private weatherService: WeatherService) { }

  getLocation() {
    this.weatherService.getLocation()
      .then((loc: any) => {
        this.getForecast(loc.coords.longitude, loc.coords.latitude);
      });
  }

  getForecast(lon: number, lat: number) {
    this.weatherService.getWeatherData('forecast', lat, lon)
      .then((res: any) => {
        if (res.error) {
          this.showError = true;
          this.error = res;
        }
        else {
          this.forecast = res;
        }
      });
  }

  ngOnInit() {
    this.getLocation();
  }
}
