import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api = 'https://api.openweathermap.org/';
  private weatherKey = '73a7485fb2510c8fa713d5bb852287cd';

  constructor(private http: HttpClient) { }

  doGet(url: string) {
    return this.http.get(`${this.api}${url}&appid=${this.weatherKey}`);
  }
}
