import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Step} from '../../models/step';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../core/services';
import {CLOSE_MODALS_OPT, MockOperations} from '../../core/mock/mock-operations';
import {JsonApplicationService} from '../../core/services/json-application.service';
import {ContentFormComponent} from '../content-form/content-form.component';
import {ModalService} from '../custom-modal';

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
  @ViewChild(ContentFormComponent, {static: false}) contentFormComponent: ContentFormComponent;
  accordionExpanded: boolean;
  renderCondition;
  completed = false;
  stepsOperations = MockOperations;
  documentsValid = [];
  showLoading = false;

  closeWindowOpt = CLOSE_MODALS_OPT;
  modalErrorId;
  modalLoadingId;

  constructor(private applicationService: ApplicationService,
              private jsonApplicationService: JsonApplicationService,
              private modalService: ModalService
  ) {
  }

  ngOnInit() {

    this.modalErrorId = 'modal-error-save' + this.stepObj.id;
    this.modalLoadingId = 'modal-loading' + this.stepObj.id;
    this.applicationService.currentValue.subscribe(value => {
      if (Number(this.stepObj.id) === value) {
        if (Number(this.stepObj.id) === 0) {
          this.accordionExpanded = false;
        } else {
          this.accordionExpanded = true;
        }
      } else {
        this.accordionExpanded = false;
      }
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
    this.accordionExpanded = this.accordionExpanded ? false : true;
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
        this.showLoading = true;
        this.openDialog(this.modalLoadingId);

        /*this.completed = true;
        this.stepObj.isCompleted = true;

        if (this.stepObj.id === '21') {
          console.log('isApplicationComplete: ', this.applicationService.isApplicationComplete());
          this.applicationService.changeLastStepCompleted(true);
        }*/

        this.applicationService.saveApplication(this.jsonApplicationService.saveInJsonSwagger(this.stepObj))
          .subscribe((response: any) => {
            console.log('response from saveApplication service in component step: ', response);
            this.jsonApplicationService.setAppJson(response.data);
            console.log('response.data: ', response.data);
            this.jsonApplicationService.change(response.data);
            this.showLoading = false;
            this.closeModal(this.modalLoadingId);
            this.applicationService.submitFunction('nextStep', this.stepObj);
            this.completed = true;
            this.stepObj.isCompleted = true;
            // emits a true when the section 21 is valid and save
            /*if (this.stepObj.id === '21') {
              console.log('application Object: ', this.applicationService.getApplicationObject());
              this.applicationService.changeLastStepCompleted(true);
            }*/
          }, error => {
            this.showLoading = false;
            this.closeModal(this.modalLoadingId);
            this.openDialog(this.modalErrorId);
            console.log('error: ', error);
          });
      }
    } else if (delegateOperation === 'closeModal') {
      this.closeModal(this.modalErrorId);
    }
  }

  validateStep() {
    const response = this.applicationService.validateFormByStep(this.stepObj);
    console.log('response: ', response);
    this.stepObj.isValid = response.status;
    this.stepObj.message = response.msg ? response.msg : this.stepObj.message;
    if (response.listDocument && response.listDocument.length > 0) {
      this.documentsValid = response.listDocument;
      this.contentFormComponent.documentValid(this.documentsValid);
    }
  }

  closeStep() {
    console.log('onCloseStep...');
    this.accordionExpanded = false;
    // this.applicationService.changeValue(this.index + 1);
  }

  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  openDialog(modalID: string) {
    this.modalService.open(modalID);
  }
}

