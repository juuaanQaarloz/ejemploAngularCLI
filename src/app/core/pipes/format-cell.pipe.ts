import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCell'
})
export class FormatCellPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === undefined) {
      return 'not available';
    }
    return value;
  }

}
