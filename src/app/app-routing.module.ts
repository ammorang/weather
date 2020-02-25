import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentTempComponent } from './pages/current-temp/current-temp.component';
import { FiveDayForecastComponent } from './pages/five-day-forecast/five-day-forecast.component';


const routes: Routes = [
  { path: '',
    component: CurrentTempComponent },
  { path: 'currentTemp',
    component: CurrentTempComponent },
  { path: 'fiveDayForecast',
    component: FiveDayForecastComponent },
  { path: '**',
    component: CurrentTempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
