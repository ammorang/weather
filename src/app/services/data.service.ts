import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private envA = environment.apiUrl;
  private envK = environment.apiKey;

  constructor(private http: HttpClient) { }

  doGet(url: string) {
    return this.http.get(`${this.envA}${url}&appid=${this.envK}`);
  }
}
