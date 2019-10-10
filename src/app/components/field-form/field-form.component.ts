import {Component, Input, OnInit} from '@angular/core';
import {FieldInterface} from '../../models/field-interface';
import {FormGroup} from '@angular/forms';
import {SelectOption} from '../../models/select-option-interface';
import {ApplicationService} from '../../core/services';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css']
})
export class FieldFormComponent implements OnInit {
  @Input() fieldObj: FieldInterface;
  @Input() form: FormGroup;
  showSelectLabel = false;
  isSelected = true;
  radioOptions = [];
  selectOptions = [];
  checkBoxOptions = [
    {id: 'chk1', name: 'chkb1', value: 'chkb1Value'},
    {id: 'chk2', name: 'chkb2', value: 'chkb2Value'},
    {id: 'chk3', name: 'chkb3', value: 'chkb3Value'},
    {id: 'chk4', name: 'chkb4', value: 'chkb4Value'},
  ];
  toggleVisible = true;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    if (this.fieldObj.type === 'radio' || this.fieldObj.type === 'select') {
      this.getOptions();
    }
  }

  onKeyUp(event) {
    console.log('onKeyUp() ');
    console.log('even.target: ', event.target);
    console.log('even.target.value: ', event.target.value);
    this.form.get(this.fieldObj.name).setValue(event.target.value);
  }

  onClickToggle() {
    this.toggleVisible = !this.toggleVisible;
  }

  onChangeSelect(event) {
    console.log('event.target.value: ', event.target.value);
    if (event.target.value === '') {
      this.showSelectLabel = false;
    } else {
      this.showSelectLabel = true;
    }
  }

  getOptions() {
    let options = [];
    if (this.fieldObj.source === 'IPRE') {
      this.applicationService.getIpreCatalogById(this.fieldObj.sourceID)
        .subscribe((results) => {
          options = results;
          options.forEach((selectItem) => {
            if (this.fieldObj.type === 'select') {
              this.selectOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            } else if (this.fieldObj.type === 'radio') {
              this.radioOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            }
          });
        });
    }
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
  get isValid() { return this.form.controls[this.fieldObj.name].valid; }
}


