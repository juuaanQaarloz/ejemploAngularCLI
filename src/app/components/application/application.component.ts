import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApplicationService, AuthService, StorageService} from '../../core/services';
import {MockTemplate} from '../../core/mock/mock-template';
import {DialogService} from '../dialog/dialog.service';
import {ModalService} from '../custom-modal';
import * as jsPDF from 'jspdf';
import {APPL_OPERATIONS} from '../../core/mock/mock-operations';
import {Template} from '../../models/template';
import {Operation} from '../../models';
import {ApplicationJson} from '../../models/applicationJson/applicationJson';
import {split} from 'ts-node';
import set from 'lodash/set';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  applicationObj: Template;
  payLoad = '';
  formGroup: FormGroup;
  @ViewChild('content', {static: false}) content: ElementRef;
  applOperations = APPL_OPERATIONS;
  items = [];
  errorMessage;
  isValidApplication = true;
  applicationJson: ApplicationJson;

  closeWindowOpt: Operation = {
    id: 'opt-1',
    idHtml: 'btnClose',
    name: 'cerrar',
    label: 'CERRAR',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'closeModal',
    renderConditions: '',
    enableConditions: ''
  };

  constructor(private appService: ApplicationService,
              private authService: AuthService,
              private storageService: StorageService,
              public dialog: DialogService,
              private modalService: ModalService
  ) {
  }

  ngOnInit() {
    this.appService.setApplicationObject(MockTemplate);
    this.applicationObj = this.appService.getApplicationObject();
    this.formGroup = this.appService.toFormGroup(this.applicationObj);
    this.appService.setFormGroup(this.formGroup);
    // an example array of 150 items to be paged
    this.items = Array(150).fill(0).map((x, i) => ({id: (i + 1), name: `Item ${i + 1}`}));
    /*this.appService.updateItemProperty(
      'beneficiary',
      '1',
      'participationPercentage',
      '40');*/

  }
  getJson() {
    this.appService.getApplicationFromJson().subscribe((result) => {
      // this.applicationJson = JSON.parse(result.toString());
      this.applicationJson = result;
      let entityFieldElement = 'shareHolders[0].person.per_age';

      set(this.applicationJson, entityFieldElement, 26);

      console.log('applicationJson after parse', this.applicationJson);
    });
  }

  executeOperation(delegateOperation) {
    console.log('delegateOperation: ', delegateOperation);

    if (delegateOperation === 'generatePDF') {
      this.downloadPDF();
    } else if (delegateOperation === 'validateApplication') {
      console.log('validateApplication ');
      this.validateApplication();
    } else if (delegateOperation === 'closeModal') {
      this.closeModal('modal-error');
    } else if (delegateOperation === 'toJsonApplication') {
      console.log('on toJsonApplication...');
      this.getJson();
    }
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.formGroup.value);
    // // console.log(this.formGroup.value);
  }

  openDialog(modalID: string) {
    this.modalService.open(modalID);
  }

  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  downloadPDF() {
    let link=document.createElement("a");
    link.download="VV-1-087.pdf";
    link.href="/assets/pdf/VV-1-087.pdf";
    link.click();
    // const doc = new jsPDF();

    // doc.addHTML(document.getElementById('content'), () => {
    //   doc.save('solicitud.pdf');
    // });
  }

  validateApplication() {
    const response = this.appService.validateApplicationForm();
    console.log('response: ', response);
    if (response.status === false) {
      this.openDialog('modal-error');
      this.errorMessage = response.msg;
      console.log('errorMessage: ', this.errorMessage);
    }
  }

  getMessages() {
    let errors = [];
    errors = this.errorMessage.split('-');
    // console.log('errors: ', errors);
    return errors;
  }
}
