import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FieldInterface} from '../../models/field-interface';
import {FormGroup} from '@angular/forms';
import {SelectOption} from '../../models/select-option-interface';
import {ApplicationService} from '../../core/services';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {correctFieldValue} from '../../core/utilities';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css']
})
export class FieldFormComponent implements OnInit, AfterViewInit {
  @Input() fieldObj: FieldInterface;
  form: FormGroup;
  showSelectLabel = false;
  isSelected = true;
  radioOptions = [];
  selectOptions = [];
  checkBoxOptions = [];
  toggleVisible = true;
  datePickerClicked = false;

  constructor(private applicationService: ApplicationService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.registerCustomIcons();

  }

  ngOnInit() {
    if (this.fieldObj.type === 'radio' || this.fieldObj.type === 'select' || this.fieldObj.type === 'checkbox') {
      this.getOptions();
    }
    this.form = this.applicationService.getFormGroup();
    if (this.fieldObj.type === 'select' && this.fieldObj.value) {
      console.log('...aqui');
      console.log('value: ', this.fieldObj.value);
      this.showSelectLabel = true;
    }
  }

  ngAfterViewInit() {
    // console.log('onAfterViewInit...');
    if (this.fieldObj.type === 'text' && this.fieldObj.value) {
      const elem: Element = document.getElementById(this.fieldObj.idHtml);
      // console.log('idHtml: ', this.fieldObj.idHtml);
      elem.setAttribute('value', this.fieldObj.value);
      // const value = elem.getAttribute('value');
      // console.log('value HTML: ', value);
      // console.log('value FielObject : ', this.fieldObj.value);
    }
  }

  onKeyUp(event) {
    let value;
    value = event.target.value;
    // console.log('from onKeyUp event: ', event);
    // console.log('from onKeyUp value: ', value);
    // event.target.value = correctFieldValue(value);
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    elem.setAttribute('value', event.target.value);
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
}


