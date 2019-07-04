import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'campoYear'
})
export class CampoYearPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
