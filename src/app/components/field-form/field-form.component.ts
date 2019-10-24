import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Field} from '../../models/field';
import {FormGroup} from '@angular/forms';
import {SelectOption} from '../../models/select-option-interface';
import {ApplicationService} from '../../core/services';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

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

  constructor(private applicationService: ApplicationService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.registerCustomIcons();

  }

  ngOnInit() {
    // console.log('fieldObject: ', this.fieldObj);
    if (this.fieldObj.type === 'radio' || this.fieldObj.type === 'select' || this.fieldObj.type === 'checkbox') {
      this.getOptions();
    }
    // this.form = this.applicationService.getFormGroup();
    if (this.fieldObj.type === 'select' && this.fieldObj.value) {
      // console.log('...aqui');
      // console.log('value: ', this.fieldObj.value);
      this.showSelectLabel = true;
    }

    if (this.fieldObj.renderConditions) {
      const renderConditions = this.applicationService.getRenderConditions(this.fieldObj.renderConditions);
      // console.log('----from Field----');
      // console.log('renderConditions: ', renderConditions);
      // console.log('renderConditions[0][1]: ', renderConditions[0][1]);
      // console.log('this.form: field component: ', this.form);
      this.show = this.applicationService.evaluateRenderCondition(this.form, renderConditions[0]);
      this.form.controls[renderConditions[0][1]].valueChanges.subscribe((value) => {
        this.show = this.applicationService.evaluateRenderCondition(this.form, renderConditions[0]);
        // console.log('show: after: ', this.show);
      });
    }
  }

  ngAfterViewInit() {
    let currentValue = this.form.controls[this.fieldObj.name].value;
    // console.log('value: ', currentValue);
    let defaultValue = this.fieldObj.value;
    // console.log('defaultValue: ', defaultValue);

    if (this.fieldObj.type === 'text') {
      let elem: Element = document.getElementById(this.fieldObj.idHtml);
      console.log('elem: ', elem);
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
  }

  onKeyUp(event) {
    // console.log('onKeyUp: ', this.fieldObj.name);
    let value;
    value = event.target.value;
    // console.log('value: ', value);
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    // console.log('elem: ', elem);
    elem.setAttribute('value', event.target.value);
    // console.log('elem.getAttribute: ', elem.getAttribute('value'));
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
  }

  getOptions() {
    let options = [];
    this.applicationService.getCatalogById(this.fieldObj.sourceID, this.fieldObj.source)
      .subscribe((results) => {
        options = results;
        if (options !== undefined) {
          options.forEach((selectItem) => {
            if (this.fieldObj.type === 'select') {
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
  get isValid() {
    // console.log('errors: ', this.form.controls[this.fieldObj.name].errors);
    return this.form.controls[this.fieldObj.name].valid;
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

    if (defaultValue) {
      if (defaultValue === value) {
        result =  true;
      } else {
        result = false;
      }
    } else if (currentValue) {
      if (currentValue === value) {
        result = true;
      } else {
        result = false;
      }
    }
    return  result;
  }
}


