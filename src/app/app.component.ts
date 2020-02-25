import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router,
              private weatherService: WeatherService) {}

  activateTab(tab: string) {
    this.router.navigate([`/${tab}`]);
  }

  ngOnInit() {
  }
}
