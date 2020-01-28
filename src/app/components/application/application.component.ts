import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ApplicationService, StorageService} from '../../core/services';
import {MockTemplate} from '../../core/mock/mock-template';
import {DialogService} from '../dialog/dialog.service';
import {ModalService} from '../custom-modal';
import {APPL_OPERATIONS, CLOSE_MODALS_OPT} from '../../core/mock/mock-operations';
import {Template} from '../../models/template';
import {HttpClient} from '@angular/common/http';
import {SearchService} from '../search/search.service';
import {JsonApplicationService} from '../../core/services/json-application.service';
import {empty} from 'rxjs/internal/Observer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit, OnDestroy {
  applicationObj: Template;
  payLoad = '';
  formGroup: FormGroup;
  @ViewChild('content', {static: false}) content: ElementRef;
  applOperations = APPL_OPERATIONS;
  items = [];
  errorMessage;
  viewLoading = false;
  closeWindowOpt = CLOSE_MODALS_OPT;

  modalErrorId;
  modalLoadPDFId;

  appFolio;
  appFuc;

  subscription: Subscription;

  constructor(private appService: ApplicationService,
              private httpClient: HttpClient,
              public dialog: DialogService,
              private modalService: ModalService,
              private storageService: StorageService,
              private searchService: SearchService,
              private jsonAppService: JsonApplicationService
  ) {
  }

  ngOnInit() {

    this.subscription = this.jsonAppService.appJsonChange.subscribe((appJson) => {
      this.appFolio = appJson.app_id.toString();
      this.appFuc = appJson.app_dcn_num;
    });

    this.modalErrorId = 'modal-error-pdf';
    this.modalLoadPDFId = 'modal-loading';
    this.appService.setApplicationObject(MockTemplate);
    this.applicationObj = this.appService.getApplicationObject();
    this.formGroup = this.appService.toFormGroup(this.applicationObj);
    this.appService.setFormGroup(this.formGroup);
    // an example array of 150 items to be paged
    this.items = Array(150).fill(0).map((x, i) => ({id: (i + 1), name: `Item ${i + 1}`}));
    console.log('Entro a la aplicación');
    console.log('Session user: ', this.storageService.setCurrentSession(null));
    let user = this.storageService.getSessionUser();
    console.log(user);
    console.log(user['userName']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fromHexaToBase64(hexa) {
    return btoa(String.fromCharCode.apply(null, hexa.replace(/\r|\n/g, '').replace(/([\da-fA-F]{2}) ?/g, '0x$1 ').replace(/ +$/, '').split(' ')));
  }

  convertPdf(base64) {

    if ( base64 === null ) {
      console.log('ocurrio un error al generar el pdf');
      this.openDialog(this.modalErrorId);
    } else {
      const linkSource = 'data:application/pdf;base64,' + this.fromHexaToBase64(base64);
      const downloadLink = document.createElement('a');
      const fileName = 'sample.pdf';

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
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
      this.closeModal(this.modalErrorId);
    } else if (delegateOperation === 'toJsonApplication') {
      console.log('on toJsonApplication...');
      // this.getJson();
    }
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.formGroup.value);
  }

  downloadPDF() {
    this.viewLoading = true;
    this.openDialog(this.modalLoadPDFId);
    console.log( 'valor de app_id' , this.jsonAppService.getAppJson().app_id);
    if (this.jsonAppService.getAppJson().app_id === null) {
      this.viewLoading = false;
      this.closeModal(this.modalLoadPDFId);
      this.openDialog(this.modalErrorId);
    } else {
      this.appService.getPDF(this.jsonAppService.getAppJson().app_id.toString()).subscribe((response: any) => {
        // this.appService.getPDF('2001220018').subscribe((result: any) => {
        console.log('result PDF service: ', response);
        if (response) {
          this.viewLoading = false;
          this.closeModal(this.modalLoadPDFId);
          this.convertPdf(response.binaryData);
        }

      }, error => {
        this.viewLoading = false;
        this.closeModal(this.modalLoadPDFId);
        this.openDialog(this.modalErrorId);
        console.log('onError PDFBroker:');
        console.log(error);
      });
    }
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

  openDialog(modalID: string) {
    this.modalService.open(modalID);
  }

  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  searchModal(modalID: string) {
    this.modalService.search(modalID);
  }

  getAllModals() {
    const allModals = this.modalService.getAllModals();
    console.log('allModals: ', allModals);
  }

}
