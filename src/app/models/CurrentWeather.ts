export class CurrentWeather {
  constructor(public area: string,
              public date: any,
              public temp: number) {
    this.date = new Date(date * 1000);
  }
}