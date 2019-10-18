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

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    // console.log('operationObject: ', this.operationObj);
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
