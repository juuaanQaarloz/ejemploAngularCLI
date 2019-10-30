import {AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../models';
import {FormGroup} from '@angular/forms';
import {calculateAge} from '../../core/utilities';
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
  }

  onDateChange(event) {
    console.log('onDateChange... ', event);
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    console.log('event.targetElement.value: ', event.targetElement.value);
    // const transformedDate = transformDate(event.target.value, this.dateFormat);
    // event.targetElement.value = transformedDate;
    elem.setAttribute('value', event.targetElement.value);

    const age = calculateAge(event.targetElement.value);
    console.log('edad: ', age);
    this.appService.getFormGroup().controls.age.setValue(age);
    const el2 = document.getElementById('txtAge');
    el2.setAttribute('value', age.toString());
    this.validate.emit(true);
  }

  onBlur() {
    console.log('onBlur from custom-datepicker');
    console.log('formControlValue: ', this.form.controls[this.fieldObj.name]);
    this.validate.emit(true);
  }
}
