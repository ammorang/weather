import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrentTempComponent } from './pages/current-temp/current-temp.component';
import { FiveDayForecastComponent } from './pages/five-day-forecast/five-day-forecast.component';
import { DateComponent } from './ui/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTempComponent,
    FiveDayForecastComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
