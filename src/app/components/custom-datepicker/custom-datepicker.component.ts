import {AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../models';
import {FormGroup} from '@angular/forms';
import {addSlashesToDate, calculateAge} from '../../core/utilities';
import {ApplicationService} from '../../core/services';
import * as moment from 'moment';

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

  constructor(private appService: ApplicationService) {
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
    console.log('onDateInput...');
    if (typeEvent === 'input') {
      event.targetElement.value = addSlashesToDate(event.targetElement.value);
    }
  }

  onDateChange(event) {
    const elem: Element = document.getElementById(this.fieldObj.idHtml);

    console.log('event.targetElement.value: ', event.targetElement.value);
    // console.log('type of event.targetElement.value: ', typeof event.targetElement.value);
    elem.setAttribute('value', event.targetElement.value);

    if (this.fieldObj.name === 'birthDate' || this.fieldObj.name === 'birthDateS') {
      const age = calculateAge(event.targetElement.value);
      // console.log('edad: ', age);
      if (age) {
        if (this.fieldObj.name === 'birthDate') {
          this.setAge('age', 'txtAge', age);
        } else if (this.fieldObj.name === 'birthDateS') {
          this.setAge('ageS', 'txtAgeS', age);
        }
      }
    }
    this.validate.emit(true);
  }

  onBlur() {
    console.log('onBlur from custom-datepicker');
    // console.log('formControlValue: ', this.form.controls[this.fieldObj.name]);
    this.validate.emit(true);
  }

  setAge(formControlName, htmlID, value) {
    this.form.controls[formControlName].setValue(value);
    const el2 = document.getElementById(htmlID);
    el2.setAttribute('value', value.toString());
  }
}
