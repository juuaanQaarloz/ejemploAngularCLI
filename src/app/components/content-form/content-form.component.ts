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
  show = true;

  constructor(public applicationService: ApplicationService) { }

  ngOnInit() {
    this.orderFields();
    if (this.contentObj.renderConditions) {
      const renderConditions = this.applicationService.getDependedFields(this.contentObj.renderConditions);
      this.show = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
      // console.log('renderConditions : ', renderConditions );
      renderConditions.forEach((renderCondition) => {
        this.form.controls[renderCondition].valueChanges.subscribe((value) => {
          // this.show = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
          this.contentObj.showContent = this.applicationService.evaluateConditions(this.contentObj.renderConditions, this.form);
        });
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
