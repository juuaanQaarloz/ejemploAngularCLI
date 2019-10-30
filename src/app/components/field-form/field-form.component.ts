import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Field} from '../../models/field';
import {FormGroup} from '@angular/forms';
import {SelectOption} from '../../models/select-option-interface';
import {ApplicationService} from '../../core/services';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {calculateAge, calculateRFC, correctFieldValue, transformDate} from '../../core/utilities';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css']
})
export class FieldFormComponent implements OnInit, AfterViewInit {
  @Input() fieldObj: Field;
  @Input() form: FormGroup;
  showSelectLabel = false;
  isSelected = true;
  radioOptions = [];
  selectOptions = [];
  checkBoxOptions = [];
  toggleVisible = true;
  datePickerClicked = false;
  show = true;
  valid = true;
  disable: boolean;

  constructor(private applicationService: ApplicationService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.registerCustomIcons();

  }

  ngOnInit() {
    // console.log('fieldObject: ', this.fieldObj);
    if (this.fieldObj.type === 'radio' || this.fieldObj.type === 'select'
      || this.fieldObj.type === 'checkbox' || this.fieldObj.type === 'select-multiple') {
      this.getOptions();
    }
    // this.form = this.applicationService.getFormGroup();
    if (this.fieldObj.type === 'select' && this.fieldObj.value) {
      // console.log('...aqui');
      // console.log('value: ', this.fieldObj.value);
      this.showSelectLabel = true;
    }

    if (this.fieldObj.renderConditions) {
      const renderConditions = this.applicationService.getConditions(this.fieldObj.renderConditions);
      // console.log('----from Field----');
      // console.log('renderConditions: ', renderConditions);
      // console.log('renderConditions[0][1]: ', renderConditions[0][1]);
      // console.log('this.form: field component: ', this.form);
      this.show = this.applicationService.evaluateCondition(this.form, renderConditions[0]);
      this.form.controls[renderConditions[0][1]].valueChanges.subscribe((value) => {
        console.log('onValueChanges: ', value);
        console.log('formControl : ', renderConditions[0][1]);
        this.show = this.applicationService.evaluateCondition(this.form, renderConditions[0]);
        // console.log('show: after: ', this.show);
      });
    }

    if (this.fieldObj.requiredConditions) {
      const requiredConditions = this.applicationService.getConditions(this.fieldObj.requiredConditions);
      // console.log('requiredConditions: ', requiredConditions);
      this.fieldObj.required = this.applicationService.evaluateCondition(this.form, requiredConditions[0]);
      this.form.controls[requiredConditions[0][1]].valueChanges.subscribe((value) => {
        // console.log('value: ', value);
        this.fieldObj.required = this.applicationService.evaluateCondition(this.form, requiredConditions[0]);
        this.form.controls[this.fieldObj.name].setValidators(this.applicationService.getValidationFunctions(this.fieldObj));
        this.form.controls[this.fieldObj.name].updateValueAndValidity();
      });
    }

    if (this.fieldObj.disable) {
      this.form.controls[this.fieldObj.name].disable();
      this.disable = this.checkState();
      this.form.controls[this.fieldObj.name].valueChanges.subscribe(() => {
        this.disable = this.checkState();
        console.log('onValueChanges disable: ', this.disable);
      });
      console.log('disable: ', this.disable);
    }
  }

  ngAfterViewInit() {
    const currentValue = this.form.controls[this.fieldObj.name].value;
    // console.log('value: ', currentValue);
    const defaultValue = this.fieldObj.value;
    // console.log('defaultValue: ', defaultValue);

    if (this.fieldObj.type === 'text') {
      const elem: Element = document.getElementById(this.fieldObj.idHtml);
      // console.log('elem: ', elem);
      let valueToSet;
      if (elem) {
        if (this.fieldObj.value) { // set default value from configuration
          valueToSet = this.fieldObj.value;
          elem.setAttribute('value', valueToSet);
        } else if (this.form.controls[this.fieldObj.name].value) { // set value from an older capture
          valueToSet = this.form.controls[this.fieldObj.name].value;
          elem.setAttribute('value', valueToSet);
        }
      }
    }
    /*if (this.fieldObj.disable) {
      this.form.controls[this.fieldObj.name].disable();
    }*/
  }

  onKeyUp(event) {
    console.log('event.key: ', event.key);
    let value;
    value = event.target.value;
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    event.target.value = correctFieldValue(value);
    elem.setAttribute('value', event.target.value);
    this.form.controls[this.fieldObj.name].setValue(event.target.value);

    if (this.fieldObj.name === 'rfc') {
      if (value.length === 10 && event.key !== 'Backspace') { // calcutate rfc when the user capture the first 10 characters
        const apellidoPaterno = this.form.controls.fatherLastName.value;
        const apellidoMaterno = this.form.controls.motherLastName.value;
        const nombre = this.form.controls.name.value;
        const date = this.form.controls.birthDate.value;
        const fechaNacimiento = transformDate(date, 'YYYY/MM/DD');

        console.log('apellidoPaterno: ', apellidoPaterno );
        console.log('apellidoMaterno: ', apellidoMaterno );
        console.log('nombre: ', nombre );
        console.log('fechaNacimiento: ', fechaNacimiento);
        const calculatedRFC = calculateRFC(apellidoPaterno, apellidoMaterno, nombre, fechaNacimiento);
        console.log('calculatedRFC: ', calculatedRFC);
        if (calculatedRFC !== null) {
          console.log('calculateRFC: ', calculatedRFC);
          this.form.controls[this.fieldObj.name].setValue(calculatedRFC);
          event.target.value = calculatedRFC;
          elem.setAttribute('value', event.target.value);
        }
      }
    }
  }

  onChange(event) {
    console.log('onChange: ', event.target.value);
    this.isValid();
  }

  onBlur() {
    this.isValid();
  }

  onValidate(event) {
    this.isValid();
  }

  onClickToggle() {
    this.toggleVisible = !this.toggleVisible;
  }

  onDatePickerClick() {
    this.datePickerClicked = !this.datePickerClicked;
  }

  onChangeSelect(event) {
    console.log('onChangeSelect...');
    console.log('event.target.value: ', event.target.value);
    if (event.target.value === '') {
      this.showSelectLabel = false;
    } else {
      this.showSelectLabel = true;
    }
  }

  getOptions() {
    let options = [];
    this.applicationService.getCatalogById(this.fieldObj.sourceID, this.fieldObj.source)
      .subscribe((results) => {
        options = results;
        if (options !== undefined) {
          options.forEach((selectItem) => {
            if (this.fieldObj.type === 'select' || this.fieldObj.type === 'select-multiple') {
              this.selectOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            } else if (this.fieldObj.type === 'radio') {
              this.radioOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            } else if (this.fieldObj.type === 'checkbox') {
              this.checkBoxOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            }
          });
        }
      });
  }

  constructSelectOption(object, structure) {
    const finalSelectOption: SelectOption = {
      id: this.getValueByProperty(object, structure[0]),
      name: this.getValueByProperty(object, structure[1]),
      value: this.getValueByProperty(object, structure[2])
    };
    return finalSelectOption;
  }

  getValueByProperty(object, property) {
    let value;
    const properties = Object.getOwnPropertyNames(object);
    properties.forEach((propertyItem) => {
      if (propertyItem === property) {
        value = object[propertyItem];
      }
    });
    return value;
  }

  isValid() {
    console.log('value: ', this.form.controls[this.fieldObj.name].value);
    this.valid =  this.form.controls[this.fieldObj.name].valid;
    console.log('errors: ', this.form.controls[this.fieldObj.name].errors);
  }

  registerCustomIcons() {
    this.matIconRegistry.addSvgIcon(
      'calendar-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/utility-3_calendar_16p_HVR.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'calendar-icon-clicked',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/utility-3_calendar_16p.svg')
    );
  }

  checkValue(value) {
    const currentValue = this.form.controls[this.fieldObj.name].value;
    const defaultValue = this.fieldObj.value;
    let result: boolean;

    if (currentValue) {
      if (currentValue === value) {
        result = true;
      } else {
        result = false;
      }
    } else if (defaultValue) {
      if (defaultValue === value) {
        result =  true;
      } else {
        result = false;
      }
    }
    return  result;
  }

  setElementValue(htmlID: string, newValue) {
    const el = document.getElementById(htmlID);
    console.log('el: ', el);
    el.setAttribute('value', newValue);
  }

  checkState() {
    const status = this.form.controls[this.fieldObj.name].status;
    console.log('state: ', status);
    let result = false;
    if (status === 'DISABLED') {
      result = true;
    }
    return result;
  }
}


