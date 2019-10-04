import {Component, Input, OnInit} from '@angular/core';
import {FieldInterface} from '../../models/field-interface';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../services/application.service';
import {SelectOption} from '../../models/select-option-interface';

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
  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    if (this.fieldObj.type === 'radio' ) {
      this.radioOptions = this.getOptions(this.fieldObj.source, this.fieldObj.sourceID, this.fieldObj.type);
    }
    if (this.fieldObj.type === 'select') {
      this.getOptions(this.fieldObj.source, this.fieldObj.sourceID, this.fieldObj.sourceStructure);
    }
  }

  onChangeSelect(event) {
    console.log('event.target.value: ', event.target.value);
    if (event.target.value === '') {
      this.showSelectLabel = false;
    } else {
      this.showSelectLabel = true;
    }
  }

  getOptions(source, sourceID, structure) {
    let options = [];
    if (source === 'IPRE') {
      this.applicationService.getIpreCatalogById(sourceID)
        .subscribe((results) => {
          options = results;
          options.forEach((selectItem) => {
            this.selectOptions.push(this.constructSelectOption(selectItem, structure));
          });
          // console.log('options: ', options);
        });
    }
    /*if (type === 'radio') {
      options.push({
        id: '0',
        name: 'Si',
        value: 'yes'
      });
      options.push({
        id: '1',
        name: 'No',
        value: 'no'
      });
    } else if (type === 'select') {
      options.push({
          id: 0,
          name: 'MetaLife',
          code: 'metaLifeProduct'
        });
    }*/

    return options;
  }
  constructSelectOption(option, structure) {
    const finalSelectOption: SelectOption = {
      id: this.getValueByProperty(option, structure[0]),
      name: this.getValueByProperty(option, structure[1]),
      value: this.getValueByProperty(option, structure[2])
    };

    console.log('finalSelectOption: ', finalSelectOption);

    return finalSelectOption;
  }
  getValueByProperty(option, property) {
    let value;
    const properties = Object.getOwnPropertyNames(option);
    properties.forEach((propertyItem) => {
      console.log('propertyItem: ', propertyItem);
      console.log('property: ', property);
      if (propertyItem === property) {
        value = option[propertyItem];
      }
      console.log('value: ', value);
    });
    return value;
  }
  get isValid() { return this.form.controls[this.fieldObj.name].valid; }
}


