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
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';

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
              private httpClient: HttpClient,
              public dialog: DialogService,
              private modalService: ModalService,
              private storageService: StorageService
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
    console.log('Entro a la aplicación');
    console.log('Session user: ');
    let user = this.storageService.getSessionUser();
    console.log(user);
    console.log(user['userName']);
  }

  testGetPlansCatalog() {
    this.appService.getPlan();
  }

  testGetPDFService() {
    this.appService.getPDFBroker('2001090025').subscribe((result) => {
      console.log('result PDF service: ', result);
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
      // this.getJson();
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
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });

    let params = new HttpParams();
    params = params.append('appId', '2001030089');

    this.httpClient.get(AppConstants.URL_SERVICE_DEV +"/App/getPdf", {headers, params}).subscribe( (resp:any) => {
      if (resp.result !== null) {
        window.open(resp.result.pdfDoc, "_blank");
      }
    });
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
