import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-temp',
  templateUrl: './current-temp.component.html',
  styleUrls: ['./current-temp.component.css']
})
export class CurrentTempComponent implements OnInit {
  public currentInfo: any = null;
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
    this.weatherService.getWeatherData('weather', lat, lon)
      .then((res: any) => {
        if (res.error) {
          this.showError = true;
          this.error = res;
        }
        else {
          this.currentInfo = res;
        }
      });
  }

  ngOnInit() {
    this.getLocation();
  }
}
