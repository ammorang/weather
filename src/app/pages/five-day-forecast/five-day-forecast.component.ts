import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {
  private location: any;
  public forecast: [] = [];
  public city: string = null;
  public error: any = null;
  public showError: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((l) => {
      this.location = {
        lat: l.coords.latitude,
        lon: l.coords.longitude
      }
      
      this.weatherService.getWeatherData('forecast', this.location.lat, this.location.lon)
        .then((res: any) => {
          if (res.error) {
            this.showError = true;
            this.error = res;
          }
          else {
            this.forecast = res.list;
            this.city = res.city.name;
          }
        });
    });
  }

}
