import { Component, OnInit, Input } from '@angular/core';
import {OperationsInterface} from '../../models/operations-interface';
import {ApplicationService} from '../../core/services';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent implements OnInit {
  @Input() operationObj: OperationsInterface;
  @Input() form: FormGroup;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
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
