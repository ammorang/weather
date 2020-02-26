import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {
  private location = {
    lat: null,
    lon: null
  };
  public forecast: [] = [];
  public city: string = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((l) => {
      this.location.lat = l.coords.latitude;
      this.location.lon = l.coords.longitude;
      
      this.weatherService.getWeatherData('forecast', this.location.lat, this.location.lon)
        .then((res: any) => {
          this.forecast = res.list;
          this.city = res.city.name;
        });
    });
  }

}
