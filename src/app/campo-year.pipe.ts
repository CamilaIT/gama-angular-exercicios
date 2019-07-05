import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'campoYear'
})
export class CampoYearPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    return value < 2000 ? 'linguagem criada antes de 2000' : 'linguagem criada depois de 2000';
  }

}
