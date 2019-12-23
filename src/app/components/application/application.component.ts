import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApplicationService, AuthService, StorageService} from '../../core/services';
import {MockTemplate} from '../../core/mock/mock-template';
import {DialogService} from '../dialog/dialog.service';
import {ModalService} from '../custom-modal';
import * as jsPDF from 'jspdf';
import {APPL_OPERATIONS} from '../../core/mock/mock-operations';
import {Template} from '../../models/template';


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
  errors;

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

  executeOperation(delegateOperation) {
    if (delegateOperation === 'generatePDF') {
      this.downloadPDF();
    } else if (delegateOperation === 'validateApplication') {
      console.log('validateApplication ');
      this.validateApplication();
    }
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.formGroup.value);
    // // console.log(this.formGroup.value);
  }

  openDialog(modalID: string) {
    this.modalService.open(modalID);
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
    this.appService.validateApplicationForm();
  }

  getValidateField() {
    this.errors = this.formGroup.errors;
    console.log('erros: ', this.errors);
    if (this.errors) {
      console.log('invalidEmailConfirmation: ', this.errors.invalidEmailConfirmation);
    }
  }



}
