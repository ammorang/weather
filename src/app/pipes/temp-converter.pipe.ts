import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {
  transform(kelvinTemp: any): any {
    const farTemp = (kelvinTemp * 9 / 5) - 459.67;
    // const f = farTemp.toFixed(2); 

    return farTemp;
  }
  
}
