import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Step} from '../../models/step';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../core/services';
import {MockOperations} from '../../core/mock/mock-operations';
import {FORM_MSG_ERROR} from '../../core/mock/errors/mock-erros-datos-plan';
import {JsonApplicationService} from '../../core/services/json-application.service';
import {ContentFormComponent} from '../content-form/content-form.component';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css']
})
export class StepFormComponent implements OnInit {
  @Input() stepObj: Step;
  @Input() form: FormGroup;
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() index: number;
  @ViewChild(ContentFormComponent, {static: false}) contentFormComponent: ContentFormComponent ;
  accordionExpanded: boolean;
  renderCondition;
  completed = false;
  stepsOperations = MockOperations;
  // isValidStep = true;
  // stepMsgError = FORM_MSG_ERROR;
  documentsValid = [];

  constructor(private applicationService: ApplicationService,
              private jsonApplicationService: JsonApplicationService
  ) {
  }

  ngOnInit() {
    // console.log('step: ', this.stepObj);
    this.applicationService.currentValue.subscribe(value => {
      // console.log('value: ', value);
      // console.log('id step: ', this.stepObj.id);
      if (Number(this.stepObj.id) === value) {
        if (Number(this.stepObj.id) === 0) {
          this.accordionExpanded = false;
        } else {
          this.accordionExpanded = true;
        }
      } else {
        this.accordionExpanded = false;
      }
      // console.log('from child', this.accordionExpanded);
    });

    if (this.stepObj.renderConditions) {
      this.renderCondition = this.applicationService.getDependedFields(this.stepObj.renderConditions);
      this.stepObj.show = this.applicationService.evaluateConditions(this.stepObj.renderConditions, this.form);
      this.renderCondition.forEach((item) => {
        this.form.controls[item].valueChanges.subscribe(() => {
          this.stepObj.show = this.applicationService.evaluateConditions(this.stepObj.renderConditions, this.form);
        });
      });
    }
  }

  toggleAccordion() {
    // console.log('before: ', this.accordionExpanded);
    this.accordionExpanded = this.accordionExpanded ? false : true;
    // console.log('after: ', this.accordionExpanded);
  }

  completeStep() {
    this.completed = !this.completed;
    this.accordionExpanded = false;
    this.applicationService.changeValue(this.index + 1);
  }

  getErrorStatus(errorId) {
    const status = this.applicationService.getStatusError(errorId);
    console.log('status: ', status);
    return status;
  }

  executeOperation(delegateOperation) {
    console.log('delegateOperation: ', delegateOperation);
    if (delegateOperation === 'closeStep') {
      this.closeStep();
    } else if (delegateOperation === 'validateStep') {
      this.validateStep();
      if (this.stepObj.isValid) {
        this.applicationService.submitFunction('nextStep', this.stepObj);
        // save in JSON
        this.jsonApplicationService.saveInJsonSwagger(this.stepObj);

      }
    }
  }

  validateStep() {
    const response = this.applicationService.validateFormByStep(this.stepObj);
    console.log('response: ', response);
    this.stepObj.isValid = response.status;
    // this.stepMsgError =
    this.stepObj.message = response.msg ? response.msg : this.stepObj.message;
    if ( response.listDocument && response.listDocument.length > 0 ) {
      this.documentsValid = response.listDocument;
      this.contentFormComponent.documentValid(this.documentsValid);
    }
  }

  closeStep() {
    console.log('onCloseStep...');
    this.accordionExpanded = false;
    // this.applicationService.changeValue(this.index + 1);
  }
}

