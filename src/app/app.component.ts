import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  location = {
    lat: null,
    lon: null
  };

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(async (l) => {
      this.location.lat = l.coords.latitude;
      this.location.lon = l.coords.longitude;
      
      this.weatherService.getWeatherData('weather', this.location.lat, this.location.lon);
      this.weatherService.getWeatherData('forecast', this.location.lat, this.location.lon);
    });

  }
}
