import {Component, Input, OnInit} from '@angular/core';
import {FieldInterface} from '../../models/field-interface';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../services/application.service';

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
      this.getOptions(this.fieldObj.source, this.fieldObj.sourceID, this.fieldObj.type);
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

  getOptions(source, sourceID, type) {
    let options = [];
    if (source === 'IPRE') {
      this.applicationService.getIpreCatalogById(sourceID)
        .subscribe((results) => {
          options = results;
          this.selectOptions = results;
          console.log('options: ', options);
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
  get isValid() { return this.form.controls[this.fieldObj.name].valid; }
}


