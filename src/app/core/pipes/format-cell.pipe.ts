import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'formatCell'
})
export class FormatCellPipe implements PipeTransform {

  /*transform(value: any, ...args: any[]): any {
    if (value === undefined) {
      return 'not available';
    }
    return value;
  }*/

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: any, format: string) {
    if ( value === undefined ) {
      return 'not available';
    }
    if ( format === 'default' ) {
      if ( Array.isArray(value) ) {
        if ( typeof value[0] !== 'object' ) {
          return value.join(', ');
        } else {
          return value.map( obj => {
            return obj.name;
          }).join(', ');
        }
      }
      if ( typeof value === 'object') {
        return value.name;
      }
    }

    if (format === 'currency') {
      return this.currencyPipe.transform(value, 'USD', true);
    }

    return value;
  }

}
