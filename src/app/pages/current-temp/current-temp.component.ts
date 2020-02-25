import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { convertToFahrenheit } from 'src/app/utils';

@Component({
  selector: 'app-current-temp',
  templateUrl: './current-temp.component.html',
  styleUrls: ['./current-temp.component.css']
})
export class CurrentTempComponent implements OnInit {
  private location = {
    lat: null,
    lon: null
  };
  public currentTemp: number;
  public currentArea: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(async (l) => {
      this.location.lat = l.coords.latitude;
      this.location.lon = l.coords.longitude;
      
      this.weatherService.getWeatherData('weather', this.location.lat, this.location.lon)
        .then((res: any) => { 
          this.currentTemp = convertToFahrenheit(res.main.temp);
          this.currentArea = res.name;
        })
    });
  }

}
