import {AfterViewChecked, AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {Field} from '../../models';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import {dateTitPattern} from '../../core/validators';

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
export class CustomDatepickerComponent implements OnInit, AfterViewInit { // , ControlValueAccessor {
  @Input() fieldObj: Field;
  @Input() form: FormGroup;
  @Input() dateFormat = 'YYYY/MM/DD';
  isValid: boolean;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    /*console.log('onAfterViewInit datepicker: ');
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    let value;
    console.log('value before: ', value);
    if (this.fieldObj.value) {
      value = this.fieldObj.value;
      elem.setAttribute('value', value);
    } else if (this.form.controls[this.fieldObj.name].value) {
      value = this.form.controls[this.fieldObj.name].value;
      elem.setAttribute('value', value);
    }
    console.log('value after: ', elem.getAttribute('value'));*/
  }

  onDateInput(typeEvent: string, event) {
    console.log('onDateInput...  ');
    console.log('event: ', event.targetElement.value);
    this.isValid = dateTitPattern.test(event.targetElement.value);
  }

  onDateChange(event) {
    console.log('onDateChange...');
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    console.log('isValid: ', this.isValid);

    if (this.isValid) {
      console.log(' event.targetElement.value',  event.targetElement.value);
      elem.setAttribute('value', event.targetElement.value);
    } else {

      console.log('dateFormat: ', this.dateFormat);
      const transformDate =  moment(event.value).format(this.dateFormat);
      console.log('transformDate: ', transformDate);

      event.targetElement.value = transformDate;

      // set value to the input element
      elem.setAttribute('value', event.targetElement.value);
    }


  }
}
