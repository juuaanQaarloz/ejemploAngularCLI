import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../../models/content';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../core/services';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {
  @Input() contentObj: Content;
  @Input() form: FormGroup;
  payLoad = '';

  constructor(public applicationService: ApplicationService) { }

  ngOnInit() {
    this.orderFields();

    if (this.contentObj.renderConditions) {
      const renderConditions = this.applicationService.getConditions(this.contentObj.renderConditions);

      this.contentObj.showContent = this.applicationService.evaluateCondition(this.form, renderConditions[0]);
      this.form.controls[renderConditions[0][1]].valueChanges.subscribe((value) => {
        // console.log('onValueChanges: ', value);
        // console.log('formControl : ', renderConditions[0][1]);
        this.contentObj.showContent = this.applicationService.evaluateCondition(this.form, renderConditions[0]);
      });
    }

  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.form.value);
    // // console.log(this.form.value);
  }

  orderFields() {
    if (this.contentObj.fields) {
      this.contentObj.fields.sort((a, b) => a.orderAppearance - b.orderAppearance);
    }
  }
}
