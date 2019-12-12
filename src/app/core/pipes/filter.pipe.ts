import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string, labelKey?: string): any {
    if (!items || !searchTerm) {
      return items;
    }

    // console.log('onPipe...');
    // console.log('item: ', items);

    return items.filter(
      item =>
        item[labelKey || 'name']
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) === true
    );
  }
}
