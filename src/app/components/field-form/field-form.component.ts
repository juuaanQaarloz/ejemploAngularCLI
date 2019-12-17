import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Field} from '../../models/field';
import {FormControl, FormGroup} from '@angular/forms';
import {SelectOption} from '../../models/select-option-interface';
import {ApplicationService, validateAge} from '../../core/services';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {calculateRFC, correctFieldValue, stringToRegExp, transformDate} from '../../core/utilities';
import {SepomexObj} from '../../models/sepomex-obj';
import {Pattern} from '../../models/pattern/pattern';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css']
})
export class FieldFormComponent implements OnInit, AfterViewInit {
  @Input() fieldObj: Field;
  @Input() form: FormGroup;
  @Input() item?: any;
  showSelectLabel = false;
  isSelected = true;
  radioOptions = [];
  selectOptions = [];
  checkBoxOptions = [];
  autocompleteOptions = [];
  toggleVisible = true;
  datePickerClicked = false;
  show = true;
  disable: boolean;
  regExpPattern;
  regnNoAllowedCharactersExpPattern;
  loading = true;

  constructor(private applicationService: ApplicationService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.registerCustomIcons();

  }

  onChangeCheckbox(event) {
    console.log('event: ', event);
    console.log('value from form: ', this.form.controls[this.fieldObj.name].value);
  }

  ngOnInit() {
    if (this.fieldObj.type === 'radio' || this.fieldObj.type === 'select'
      || this.fieldObj.type === 'checkbox-n' || this.fieldObj.type === 'select-multiple'
      || this.fieldObj.type === 'autocomplete') {
      this.getOptions();
    }
    if (this.fieldObj.type === 'select' && this.fieldObj.value) {
      this.showSelectLabel = true;
    }

    if (this.fieldObj.renderConditions) {
      const dependedFields = this.applicationService.getDependedFields(this.fieldObj.renderConditions);
      this.show = this.applicationService.evaluateConditions(this.fieldObj.renderConditions, this.form);
      dependedFields.forEach((dependedField) => {
        this.form.controls[dependedField].valueChanges.subscribe((value) => {
          this.show = this.applicationService.evaluateConditions(this.fieldObj.renderConditions, this.form);
        });
      });
    }

    if (this.fieldObj.requiredConditions) {
      const dependedFields = this.applicationService.getDependedFields(this.fieldObj.requiredConditions);
      this.fieldObj.required = this.applicationService.evaluateConditions(this.fieldObj.requiredConditions, this.form);

      dependedFields.forEach((dependedField) => {
        this.form.controls[dependedField].valueChanges.subscribe((value) => {

          this.fieldObj.required = this.applicationService.evaluateConditions(this.fieldObj.requiredConditions, this.form);
          this.form.controls[this.fieldObj.name].setValidators(this.applicationService.getValidationFunctions(this.fieldObj));
          this.form.controls[this.fieldObj.name].updateValueAndValidity();

          if (this.fieldObj.name === 'beneficiaryBusinessName') {
            console.log('this.fieldObj.required: ', this.fieldObj.required);
          }
        });
      });
    }

    if (this.fieldObj.disable) {
      // to disable the field
      this.form.controls[this.fieldObj.name].disable();
      // to change the background color of the field
      this.disable = this.checkState();
      this.form.controls[this.fieldObj.name].valueChanges.subscribe(() => {
        this.disable = this.checkState();
        // console.log('this.disable: ', this.disable);
      });
    }

    if (this.fieldObj.enableConditions) {
      console.log('onEnableConditions...');
      // console.log('fieldName: ', this.fieldObj.name);
      const dependedFields = this.applicationService.getDependedFields(this.fieldObj.enableConditions);
      // console.log('dependedFields: ', dependedFields);
      let status;

      dependedFields.forEach((dependedField) => {
        console.log('dependedField: ', dependedField);

        this.form.controls[dependedField].valueChanges.subscribe((value) => {

          if (value) {
            console.log('onValueChanges of ', dependedField);
            console.log('value: ', value);
            const resEval = this.applicationService.evaluateConditions(this.fieldObj.enableConditions, this.form);
            console.log('resEval: ', resEval);

            if (resEval) {
              console.log('here true');
              this.form.controls[this.fieldObj.name].disable();
              this.fieldObj.disable = true;
              status = this.checkState();

            } else {
              console.log('here false');
              this.form.controls[this.fieldObj.name].enable();
              this.fieldObj.disable = false;
              status = this.checkState();

            }
          }
          /*this.disable = this.checkState2(this.applicationService.evaluateConditions(this.fieldObj.enableConditions, this.form));
          console.log('disable2: ', this.disable);
          console.log('this.fieldObj.name: ', this.fieldObj.name);
          if (this.disable === true) {
            this.form.controls[this.fieldObj.name].disable();
          } else {
            this.form.controls[this.fieldObj.name].enable();
          }*/
      });
      });
    }

    /*if (this.fieldObj.enableConditions) {
      console.log('onEnableConditions...');

      const dependedFields = this.applicationService.getDependedFields(this.fieldObj.enableConditions);
      console.log('dependedFields: ', dependedFields);

      const result = this.applicationService.evaluateConditions(this.fieldObj.enableConditions, this.form);
      console.log('result: ', result);
      if (result) {
        this.form.controls[this.fieldObj.name].disable();
      } else {
        this.form.controls[this.fieldObj.name].enable();
      }
      this.disable = this.checkState();
      console.log('disable: ', this.disable);

      dependedFields.forEach((dependedField) => {
        this.form.controls[dependedField].valueChanges.subscribe((value) => {
          const result2 = this.applicationService.evaluateConditions(this.fieldObj.enableConditions, this.form);
          // console.log('result2: ', result2);
          if (result2) {
            this.form.controls[this.fieldObj.name].disable();
          } else {
            this.form.controls[this.fieldObj.name].enable();
          }
          this.disable = this.checkState();
        });
      });
    }*/

    if (this.fieldObj.name === 'age' || this.fieldObj.name === 'ageS') {
      this.form.controls[this.fieldObj.name].valueChanges.subscribe((value) => {
        console.log('onValueChange age: ', value);
        if (value) {
          this.isValid(this.fieldObj.name);
        }
      });
    }

    this.fieldObj.valid = true;

    if (this.fieldObj.type === 'radio') {
      this.form.controls[this.fieldObj.name].valueChanges.subscribe((value) => {
        // console.log('onValueChanges value: ', value);
        // console.log('formControlName: ', this.fieldObj.name);
        this.isValid();
      });
    }

    if (this.fieldObj.pattern) {
      let optionsPattern: Pattern[] ;
      this.applicationService.getPatternCatalog()
        .subscribe((results) => {
          optionsPattern = results;
          let patternFind: Pattern;
          const resultado = optionsPattern.find( patternFind => patternFind.id === this.fieldObj.pattern );
          if (resultado !== undefined) {
            this.regExpPattern = stringToRegExp(resultado.value);
          } else {
            this.regExpPattern = stringToRegExp(this.fieldObj.pattern);
          }
        });
      // this.regExpPattern = stringToRegExp(this.fieldObj.pattern);
      // this.regExpPattern = this.fieldObj.pattern;
      // console.log('regExpPattern: ', this.regExpPattern);
    }

    if (this.fieldObj.noAllowedCharactersPattern) {
      // this.regnNoAllowedCharactersExpPattern = stringToRegExp(this.fieldObj.noAllowedCharactersPattern);
      // this.regExpPattern = this.fieldObj.pattern;
      // console.log('regExpPattern: ', this.regExpPattern);
    }

    /*if (this.fieldObj.detonateFunction) {
      this.form.controls[this.fieldObj.name].valueChanges.subscribe((value) => {
        // console.log('detonateFunction: ', this.fieldObj.detonateFunction);
        // console.log('itemFromFieldComponent: ', this.item);
        if (this.fieldObj.detonateFunction === 'updateItem') {
          this.item.participationPercentage = value;
          const result = this.applicationService.updateItem(this.item, 'beneficiary');
          // console.log('result: ', result);
          if (!result.status) {
            this.fieldObj.valid = false;
            this.fieldObj.message = '';
          }
        }
      });
    }*/

    /*this.form.controls[this.fieldObj.name].valueChanges.subscribe((value) => {
      console.log('onValueChanges...');
      console.log('formGroup: ', this.form);
      console.log('formControlName: ', this.fieldObj.name);
      console.log('value: ',  value);
    });*/
  }

  esPatter( patron: string) {
    let pattern: Pattern;
    return pattern.id === patron;
  }

  ngAfterViewInit() {
    // console.log('on ngAfterViewInit...');
    if (this.fieldObj.type === 'text') {
      const elem: Element = document.getElementById(this.fieldObj.idHtml);
      // // console.log('elem: ', elem);
      let valueToSet;
      if (elem) {
        if (this.fieldObj.value) { // set default value from configuration
          valueToSet = this.fieldObj.value;
          elem.setAttribute('value', valueToSet);
          this.form.controls[this.fieldObj.name].setValue(valueToSet);
        } else if (this.form.controls[this.fieldObj.name].value) { // set value from an older capture
          valueToSet = this.form.controls[this.fieldObj.name].value;
          elem.setAttribute('value', valueToSet);
          this.form.controls[this.fieldObj.name].setValue(valueToSet);
        }
      }
    }
  }

  onKeyUp(event) {
    // console.log('onKeyUp event: ', event);
    let value;
    value = event.target.value;
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    event.target.value = correctFieldValue(value);
    elem.setAttribute('value', event.target.value);
    this.form.controls[this.fieldObj.name].setValue(event.target.value);

    // // console.log('value.length: ', value.length);
    if (this.fieldObj.name === 'rfc' || this.fieldObj.name === 'rfcS' || this.fieldObj.name === 'formatwoRfc') {
      if (value.length === 10 && event.key !== 'Backspace') { // calculate rfc when the user capture the first 10 characters
        const calcRFC = this.calculateRFC();
        if (calcRFC !== null) {
          // // console.log('calculateRFC: ', calcRFC);
          this.setCalculatedRFC(calcRFC);
        }
      }
    }
    // validar
    if (this.fieldObj.name === 'currency') {
      // this.setFunds();
    }
    if (this.fieldObj.name === 'assuredImport') {
      // console.log('Entro assuredImport: ');
    }

    if (value) {
      this.isValid();
    }
  }

  fileChange(event) {
    // console.log('event: ', event.target.files);
  }

  onChange(event) {
    console.log('onChange event.target.value: ', event.target.value);
    console.log('formControlName: ', this.fieldObj.name);
    this.isValid();
  }

  onBlur() {
    // console.log('onBlur...');
    if (this.fieldObj.name === 'zipCode' || this.fieldObj.name === 'zipCodeS' || this.fieldObj.name === 'zipCodeM') {
      const zipCode = this.form.controls[this.fieldObj.name].value;
      // console.log('zipCode: ', zipCode);
      if (zipCode) {
        this.applicationService.getInfoFromSepomex(zipCode).subscribe((sepoMexResponse: SepomexObj) => {
          // console.log('sepoMexResponse: ', sepoMexResponse);
          if (sepoMexResponse) {
            this.setAddress(sepoMexResponse);
          }
        });
      }
    }

    this.isValid();
  }

  onValidate(event) {
    // console.log('onValidate: ');
    this.isValid();
  }

  onClickToggle() {
    this.toggleVisible = !this.toggleVisible;
  }

  onDatePickerClick() {
    this.datePickerClicked = !this.datePickerClicked;
  }

  onChangeSelect(event) {
    // console.log('onChangeSelect...');
    // console.log('event.target.value: ', event.target.value);
    if (event.target.value === '') {
      this.showSelectLabel = false;
    } else {
      this.showSelectLabel = true;
    }

    if (event.target.value) {
      this.isValid();
    }

    this.isValid();
    this.setFunds();
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
              console.log('selectItem-checkbox: ', selectItem);
              this.checkBoxOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            } else if (this.fieldObj.type === 'autocomplete') {
              this.autocompleteOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            }
          });

          if (this.fieldObj.type === 'autocomplete') {
            this.loading = false;
          }
          // console.log('autoComplete: ', this.autocompleteOptions);
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
    // console.log('onIsValid value: ', this.form.controls[this.fieldObj.name].value);
    // console.log('formControlName: ', formControlName);
    if (formControlName) {
      console.log('formControlNameEntro: ', formControlName);
      const validateAgeResult = validateAge(this.form.controls[formControlName]);

      if (validateAgeResult) {
        this.fieldObj.valid = false;
        // this.valid;
      } else {
        this.fieldObj.valid = true;
        // this.valid = true;
      }

    } else {
      // this.valid =  this.form.controls[this.fieldObj.name].valid;
      this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
    }

    /*if (!this.fieldObj.valid) {
      console.log('errors: ', this.form.controls[this.fieldObj.name].errors);
    }*/

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
        result = true;
      } else {
        result = false;
      }
    }
    // // console.log('result: ', result);
    return result;
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

  checkState2(acceso: boolean) {
    const status = this.form.controls[this.fieldObj.name].status;
    // console.log('state2: ', status);
    // console.log('acceso: ', acceso);
    let result = false;
    if (status === 'DISABLED' && acceso === true) {
      result = true;
    } else {
      result = acceso;
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
    } else if (this.fieldObj.name === 'formatwoRfc') {
      apellidoPaterno = this.form.controls.formatwoFatherLastName.value;
      apellidoMaterno = this.form.controls.formatwoMotherLastName.value;
      nombre = this.form.controls.formatwoName.value;
      date = this.form.controls.formatwoBirthDate.value;
      fechaNacimiento = transformDate(date, 'YYYY/MM/DD');
    }

    const calculatedRFC = calculateRFC(apellidoPaterno, apellidoMaterno, nombre, fechaNacimiento);
    // // console.log('calculatedRFC: ', calculatedRFC);
    return calculatedRFC;
  }

  setCalculatedRFC(calculatedRFC) {
    if (this.fieldObj.name === 'rfc') {
      this.setValueField('rfc', 'txtRFC', calculatedRFC);
    } else if (this.fieldObj.name === 'rfcS') {
      this.setValueField('rfcS', 'txtRFCS', calculatedRFC);
    } else if (this.fieldObj.name === 'formatwoRfc') {
      this.setValueField('formatwoRfc', 'txtFormatwoRFC', calculatedRFC);
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

  getStyle(style: string): any {
    const obj: { [k: string]: any } = {};
    const resultSplit = style.split(':');

    // // console.log('resultSplit: ', resultSplit);
    obj[resultSplit[0]] = resultSplit[1];

    // // console.log('obj: ', obj);
    return obj;
  }

  setFunds() {
    const currency = this.form.controls.currency.value;
    const packing = this.form.controls.packing.value;
    if (currency === 'usd') {
      this.setValueField('variableSaving', 'txtVariableSaving', 0);
      this.setValueField('variableRetirement', 'txtVariableRetirement', 0);
      this.setValueField('variableFunds', 'txtVariableFunds', 0);
    }
    if (packing !== '4') {
      this.setValueField('fixedSaving', 'txtFixedSaving', 0);
      this.setValueField('fixedRetirement', 'txtFixedRetirement', 0);
      this.setValueField('variableSaving', 'txtVariableSaving', 0);
      this.setValueField('variableRetirement', 'txtVariableRetirement', 0);
    }
  }
}


