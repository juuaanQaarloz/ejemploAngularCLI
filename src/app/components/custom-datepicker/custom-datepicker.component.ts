import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FieldInterface} from '../../models';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDatepickerComponent), // Name of our component
      multi: true
    }
  ]
})
export class CustomDatepickerComponent implements OnInit, ControlValueAccessor {
  @Input() fieldObj: FieldInterface;
  @Input() form: FormGroup;
  @Input() dateFormat: 'YYYY/MM/DD';
  @Input() _dateValue: string = null;

  constructor() { }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<moment.Moment>) {
    this.dateValue = moment(event.value, this.dateFormat);
    console.log('dateValue: ', this.dateValue.toString());
    let elem: Element = document.getElementById(this.fieldObj.idHtml);
    elem.setAttribute('value', this.dateValue.toString());
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.dateValue = moment(value, this.dateFormat);
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  get dateValue() {
    return moment(this._dateValue, this.dateFormat);
  }

  set dateValue(val) {
    this._dateValue = moment(val).format(this.dateFormat);
    this.propagateChange(this._dateValue);
  }

}
