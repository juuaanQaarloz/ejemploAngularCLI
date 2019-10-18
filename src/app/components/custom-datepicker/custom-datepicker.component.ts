import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {Field} from '../../models';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.css']
  /*providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDatepickerComponent), // Name of our component
      multi: true
    }
  ]*/
})
export class CustomDatepickerComponent implements OnInit { // , ControlValueAccessor {
  @Input() fieldObj: Field;
  @Input() form: FormGroup;
  @Input() dateFormat = 'YYYY/MM/DD';
  constructor() { }

  ngOnInit() {
  }

  onDateInput(typeEvent: string, event) {
    console.log('onDateInput...  ');

    console.log('dateFormat: ', this.dateFormat);
    const transformDate =  moment(event.value).format(this.dateFormat);
    console.log('transformDate: ', transformDate);

    event.targetElement.value = transformDate;

    // set value to the input element
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    elem.setAttribute('value', event.targetElement.value);
  }
}
