import {AfterViewChecked, AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../models';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as moment from 'moment';
import {dateTitPattern} from '../../core/validators';
import {transformDate} from '../../core/utilities';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.css']
})
export class CustomDatepickerComponent implements OnInit, AfterViewInit {
  @Input() fieldObj: Field;
  @Input() form: FormGroup;
  @Input() dateFormat = 'YYYY/MM/DD';
  @Output() validate = new EventEmitter<boolean>();
  isValid: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    /*console.log('onAfterViewInit datepicker: ');
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    let value;
    console.log('value before: ', value);
    if (this.fieldObj.value) {
      value = this.fieldObj.value;
      console.log('attributesNames: ', elem.getAttributeNames());
      elem.setAttribute('value', value);
    } else if (this.form.controls[this.fieldObj.name].value) {
      value = this.form.controls[this.fieldObj.name].value;
      elem.setAttribute('value', value);
    }
    console.log('value after: ', elem.getAttribute('value'));*/
  }

  onDateInput(typeEvent: string, event) {
  }

  onDateChange(event) {
    console.log('onDateChange... ', event);
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    console.log('event.targetElement.value: ', event.targetElement.value);
    // const transformedDate = transformDate(event.target.value, this.dateFormat);
    // event.targetElement.value = transformedDate;
    elem.setAttribute('value', event.targetElement.value);
    this.validate.emit(true);
  }

  onBlur() {
    console.log('onBlur from custom-datepicker');
    this.validate.emit(true);
  }
}
