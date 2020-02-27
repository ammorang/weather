import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-temp',
  templateUrl: './current-temp.component.html',
  styleUrls: ['./current-temp.component.css']
})
export class CurrentTempComponent implements OnInit {
  private location: any;
  public currentInfo: any = null;
  public error: any = null;
  public showError: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((l) => {
      this.location = {
        lat: l.coords.latitude,
        lon: l.coords.longitude
      }
      
      this.weatherService.getWeatherData('weather', this.location.lat, this.location.lon)
        .then((res: any) => { 
          if (res.error) {
            this.showError = true;
            this.error = res;
          }
          else {
            this.currentInfo = res;
          }
        })
    });
  }

}
