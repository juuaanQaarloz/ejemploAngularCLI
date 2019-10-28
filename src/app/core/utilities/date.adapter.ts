import {NativeDateAdapter} from '@angular/material';

export class MyDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: any): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return year + '/' + this._to2digit(month) + '/' + this._to2digit(day);
    } else {
      return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
  },
  display: {
    // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    dateInput: 'input',
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'short', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'short'},
  }
};
