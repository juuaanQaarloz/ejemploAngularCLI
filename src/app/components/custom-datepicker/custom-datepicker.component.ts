import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../models';
import {FormGroup} from '@angular/forms';
import {addSlashesToDate, calculateAge} from '../../core/utilities';
import {ApplicationService} from '../../core/services';

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
  disable: boolean;

  constructor(private appService: ApplicationService) {
  }

  ngOnInit() {
    if (this.fieldObj.disable) {
      this.form.controls[this.fieldObj.name].disable();
      // console.log('this.disable: ', this.disable);
      this.disable = this.checkState();
      // console.log('this.disable: ', this.disable);
      this.form.controls[this.fieldObj.name].valueChanges.subscribe(() => {
        this.disable = this.checkState();
        // console.log('this.disable: ', this.disable);
      });
    }


  }

  ngAfterViewInit() {
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    let value;
    let currentValue = this.fieldObj.value.toString();
    if (currentValue) {
      console.log('currentValue before if : ', currentValue);
      if (currentValue.includes('-')) {
        currentValue = currentValue.replace(/-/g , '/');
      }
      console.log('currentValue after if : ', currentValue);
      value = new Date(new Date(currentValue));
      elem.setAttribute('value', value);
      this.form.controls[this.fieldObj.name].setValue(value);
    } else if (this.form.controls[this.fieldObj.name].value) { // set value from an older capture
      value = new Date(this.form.controls[this.fieldObj.name].value);
      elem.setAttribute('value', value);
      this.form.controls[this.fieldObj.name].setValue(value);
    }
  }

  onDateInput(typeEvent: string, event) {
    // console.log('onDateInput...');
    if (typeEvent === 'input') {
      event.targetElement.value = addSlashesToDate(event.targetElement.value);
      // console.log('type of input: ', typeof event.targetElement.value);
    }
  }

  onDateChange(event) {
    // console.log('onDateChange...');
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    let contractorType;

    // verify that contractorType exist in the form
    if (this.form.get('contractorType')) {
      contractorType = this.form.controls.contractorType.value;
    }

    elem.setAttribute('value', event.targetElement.value);
    console.log('type of date: ', typeof event.targetElement.value);

    if (this.fieldObj.name === 'birthDate' || this.fieldObj.name === 'birthDateS' || this.fieldObj.name === 'formatwoBirthDate') {
      const age = calculateAge(event.targetElement.value);
      // // console.log('edad: ', age);
      if (age) {
        if (this.fieldObj.name === 'birthDate') {
          if (contractorType === true) {
            this.setAge('age', 'txtAge', age);
            this.setAge2('ageS', 'txtAgeS', age);
          } else {
            this.setAge('age', 'txtAge', age);
          }
        } else if (this.fieldObj.name === 'birthDateS') {
          this.setAge('ageS', 'txtAgeS', age);
        } else if (this.fieldObj.name === 'formatwoBirthDate') {
          this.setAge('formatwoAge', 'txtFormatwoAge', age);
        }
      }
    }
    this.validate.emit(true);
  }

  onBlur() {
    this.validate.emit(true);
  }

  setAge(formControlName, htmlID, value) {
    this.form.controls[formControlName].setValue(value);
    const el2 = document.getElementById(htmlID);
    el2.setAttribute('value', value.toString());
  }

  setAge2(formControlName, htmlID, value2) {
    this.form.controls[formControlName].setValue(value2);

  }

  onKeyUp() {
    this.validate.emit(true);
  }

  checkState() {
    const status = this.form.controls[this.fieldObj.name].status;
    // console.log('state: ', status);
    let result = false;
    if (status === 'DISABLED') {
      result = true;
    }
    return result;
  }
}
