export class ForecastWeather {
  constructor(public date: any,
              public icon: string,
              public temp: number) {
    this.date = new Date(date * 1000);
  }
}