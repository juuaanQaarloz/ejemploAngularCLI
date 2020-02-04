import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: string, key: string): any {
    if (key === 'appSttsCd') {
      let status = Number(value);
      if (status < 30) {
        return 'Capturada';
      } else if (status >= 30) {
        return 'Validada';
      }
    } else {
      return value;
    }
  }

}
