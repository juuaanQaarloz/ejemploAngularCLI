import { Component, OnInit, Input } from '@angular/core';
import {Operation} from '../../models/operation';
import {ApplicationService} from '../../core/services';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent implements OnInit {
  @Input() operationObj: Operation;
  @Input() form: FormGroup;
  show =  true;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    if (this.operationObj.renderConditions) {
      const renderConditions = this.applicationService.getConditions(this.operationObj.renderConditions);
      console.log('onInit Operation renderConditions: ', renderConditions);
      this.show = this.applicationService.evaluateCondition(this.form, renderConditions[0]);
      console.log('onInit Operation show: ', this.show);
      this.form.controls[renderConditions[0][1]].valueChanges.subscribe((value) => {
        console.log('onValueChanges: ', value);
        console.log('formControl : ', renderConditions[0][1]);
        console.log('show: before: ', this.show);
        this.show = this.applicationService.evaluateCondition(this.form, renderConditions[0]);
        console.log('show: after: ', this.show);
      });
    }
  }

  executeOperation(typeOperation) {
    switch (typeOperation) {
      case 'saveApplication':
        this.applicationService.submitFunction(typeOperation);
        break;
      case 'validateApplication':
        this.applicationService.submitFunction(typeOperation);
        break;
      case 'cancelApplication':
        this.applicationService.submitFunction(typeOperation);
        break;
      default:
        this.applicationService.submitFunction(typeOperation);
        break;
    }
  }
}
