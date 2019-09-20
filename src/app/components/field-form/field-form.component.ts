import {Component, Input, OnInit} from '@angular/core';
import {FieldInterface} from '../../models/field-interface';
import {FormGroup} from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

  onChangeSelect(event) {
    console.log('event.target.value: ', event.target.value);
    if (event.target.value === '') {
      this.showSelectLabel = false;
    } else {
      this.showSelectLabel = true;
    }
  }

  getSelectOptions(source, sourceID) {
    let options = [];

    options.push(
      {
        id: 0,
        name: 'Mujer',
        code: 'F'
      }
    );
    options.push(
      {
        id: 1,
        name: 'Hombre',
        code: 'M'
      }
    );

    return options;
  }

  getRadioOptions(source, sourceID) {
    let options = [];
    options.push({
      id: 0,
      name: 'Si',
      value: 'Si'
    });
    options.push({
      id: 1,
      name: 'No',
      value: 'No'
    });
    return options;
  }
}


