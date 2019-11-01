import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Field} from '../../models/field';
import {FormGroup} from '@angular/forms';
import {SelectOption} from '../../models/select-option-interface';
import {ApplicationService} from '../../core/services';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {calculateRFC, correctFieldValue, transformDate} from '../../core/utilities';
import {SepomexObj} from '../../models/sepomex-obj';

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
        // console.log('onValueChanges disable: ', this.disable);
      });
      // console.log('disable: ', this.disable);
    }

    /*if (this.fieldObj.name === 'age') {
      this.form.controls[this.fieldObj.name].valueChanges.subscribe((value) => {
        console.log('onValueChange: ', value);
        this.isValid('age');
      });
    }*/
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
    if (this.fieldObj.name === 'age' || this.fieldObj.name === 'ageS') {
      console.log('onKeyUp value:', this.form.controls[this.fieldObj.name].value);
    }
    // console.log('event.key: ', event.key);
    let value;
    value = event.target.value;
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    event.target.value = correctFieldValue(value);
    elem.setAttribute('value', event.target.value);
    this.form.controls[this.fieldObj.name].setValue(event.target.value);

    if (this.fieldObj.name === 'rfc' || this.fieldObj.name === 'rfcS') {
      if (value.length === 10 && event.key !== 'Backspace') { // calcutate rfc when the user capture the first 10 characters
        const calcRFC = this.calculateRFC();
        if (calcRFC !== null) {
          // console.log('calculateRFC: ', calcRFC);
          this.setCalculatedRFC(calcRFC);
        }
      }
    }
  }

  fileChange(event) {
    console.log('event: ', event.target.files);
  }

  onChange(event) {
    console.log('onChange: ', event.target.value);
    console.log('formControlName: ', this.fieldObj.name);
    // this.isValid();
  }

  onBlur() {
    if (this.fieldObj.name === 'zipCode' || this.fieldObj.name === 'zipCodeS' || this.fieldObj.name === 'zipCodeM') {
      const zipCode = this.form.controls[this.fieldObj.name].value;
      console.log('zipCode: ', zipCode);
      if (zipCode) {
        this.applicationService.getInfoFromSepomex(zipCode).subscribe((sepoMexResponse: SepomexObj) => {
          console.log('sepoMexResponse: ', sepoMexResponse);
          if (sepoMexResponse) {
            this.setAddress(sepoMexResponse);
          }
        });
      }
    }
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

  isValid(formControlName?) {
    console.log('onIsValid value: ', this.form.controls[this.fieldObj.name].value);
    /*if (formControlName) {
      console.log('formControlName: ', formControlName);
      this.valid = this.form.controls[formControlName].valid;
    } else {
      this.valid =  this.form.controls[this.fieldObj.name].valid;
    }*/
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

  checkState() {
    const status = this.form.controls[this.fieldObj.name].status;
    // console.log('state: ', status);
    let result = false;
    if (status === 'DISABLED') {
      result = true;
    }
    return result;
  }

  calculateRFC() {
    let apellidoPaterno;
    let apellidoMaterno;
    let nombre;
    let date;
    let fechaNacimiento;

    if (this.fieldObj.name === 'rfc') {
      apellidoPaterno = this.form.controls.fatherLastName.value;
      apellidoMaterno = this.form.controls.motherLastName.value;
      nombre = this.form.controls.name.value;
      date = this.form.controls.birthDate.value;
      fechaNacimiento = transformDate(date, 'YYYY/MM/DD');

    } else if (this.fieldObj.name === 'rfcS') {
      apellidoPaterno = this.form.controls.fatherLastNameS.value;
      apellidoMaterno = this.form.controls.motherLastNameS.value;
      nombre = this.form.controls.nameS.value;
      date = this.form.controls.birthDateS.value;
      fechaNacimiento = transformDate(date, 'YYYY/MM/DD');
    }

    const calculatedRFC = calculateRFC(apellidoPaterno, apellidoMaterno, nombre, fechaNacimiento);
    console.log('calculatedRFC: ', calculatedRFC);
    return calculatedRFC;
  }

  setCalculatedRFC(calculatedRFC) {
    if (this.fieldObj.name === 'rfc') {
      this.setValueField('rfc', 'txtRFC', calculatedRFC);
    } else if (this.fieldObj.name === 'rfcS') {
      this.setValueField('rfcS', 'txtRFCS', calculatedRFC);
    }
  }

  setAddress(sepoMexResponse: SepomexObj) {
    const colonia = correctFieldValue(sepoMexResponse.extension.settlement);
    const municipio = correctFieldValue(sepoMexResponse.extension.townHall);
    const estado = correctFieldValue(sepoMexResponse.stateDescription);

    if (this.fieldObj.name === 'zipCode') {
      this.setValueField('suburb', 'txtSuburb', colonia);
      this.setValueField('municipality', 'txtMunicipality', municipio);
      this.setValueField('state', 'txtState', estado);

    } else if (this.fieldObj.name === 'zipCodeS') {
      this.setValueField('suburbS', 'txtSuburbS', colonia);
      this.setValueField('municipalityS', 'txtMunicipalityS', municipio);
      this.setValueField('stateS', 'txtStateS', estado);

    } else if (this.fieldObj.name === 'zipCodeM') {
      this.setValueField('suburbM', 'txtSuburbM', colonia);
      this.setValueField('municipalityM', 'txtMunicipalityM', municipio);
      this.setValueField('stateM', 'txtStateM', estado);
    }
  }

  setValueField(formControlName, htmlID, value) {
    const el = document.getElementById(htmlID);
    el.setAttribute('value', value);
    this.form.controls[formControlName].setValue(value);
  }
}


