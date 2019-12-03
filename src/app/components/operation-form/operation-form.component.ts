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
      const dependedFields = this.applicationService.getDependedFields(this.operationObj.renderConditions);
      this.show = this.applicationService.evaluateConditions(this.operationObj.renderConditions, this.form);
      dependedFields.forEach((dependedField) => {
        this.form.controls[dependedField].valueChanges.subscribe((value) => {
          this.show = this.applicationService.evaluateConditions(this.operationObj.renderConditions, this.form);
        });
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
