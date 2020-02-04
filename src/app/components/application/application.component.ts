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
import {BehaviorSubject, Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
  errorMessage;
  viewLoading = false;
  closeWindowOpt = CLOSE_MODALS_OPT;

  modalErrorId;
  modalLoadPDFId;

  appFolio;
  appFuc;

  subscription: Subscription;
  modalMessage;

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
    console.log('ngOnInit ApplicationComponent');
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
    // console.log('Entro a la aplicación');
    // console.log('Session user: ', this.storageService.setCurrentSession(null));
    let user = this.storageService.getSessionUser();
    // console.log(user);
    // console.log(user['userName']);

    // clean tables
    this.appService.beneficiaries.next([]);
    this.appService.agents.next([]);
    this.appService.sports.next([]);
    this.appService.diseases.next([]);
    this.appService.diseases2.next([]);
    this.appService.diseases3.next([]);
    this.appService.countries.next([]);
    this.appService.payments.next([]);
    this.appService.coverages.next([]);
    this.appService.currentPlan.next(null);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fromHexaToBase64(hexa) {
    return btoa(String.fromCharCode.apply(null, hexa.replace(/\r|\n/g, '').replace(/([\da-fA-F]{2}) ?/g, '0x$1 ').replace(/ +$/, '').split(' ')));
  }

  convertPdf(base64) {
    if (base64 === null) {
      // console.log('ocurrio un error al generar el pdf');
      this.openDialog(this.modalErrorId);
    } else {
      const linkSource = 'data:application/pdf;base64,' + this.fromHexaToBase64(base64);
      const downloadLink = document.createElement('a');
      const fileName = this.appFolio + '.pdf';

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
  }

  executeOperation(delegateOperation, disable?) {
    // console.log('delegateOperation: ', delegateOperation);
    if (disable !== true) {
      if (delegateOperation === 'generatePDF') {
        this.downloadPDF();
      } else if (delegateOperation === 'validateApplication') {
        // console.log('validateApplication ');
        this.validateApplication();
      } else if (delegateOperation === 'closeModal') {
        this.closeModal('modal-error');
        this.closeModal(this.modalErrorId);
      } else if (delegateOperation === 'toJsonApplication') {
        // console.log('on toJsonApplication...');
      }
    }
  }

  downloadPDF() {
    this.viewLoading = true;
    this.openDialog(this.modalLoadPDFId);
    this.modalMessage = 'Generando PDF ... ';
    if (this.jsonAppService.getAppJson().app_id === null) {
      this.viewLoading = false;
      this.closeModal(this.modalLoadPDFId);
      this.openDialog(this.modalErrorId);
    } else {
      this.appService.getPDF(this.jsonAppService.getAppJson().app_id.toString()).subscribe((response: any) => {
        // this.appService.getPDF('2001220018').subscribe((result: any) => {
        // console.log('result PDF service: ', response);
        if (response) {
          this.viewLoading = false;
          this.closeModal(this.modalLoadPDFId);
          this.convertPdf(response.binaryData);
        }

      }, error => {
        this.viewLoading = false;
        this.closeModal(this.modalLoadPDFId);
        this.modalMessage = 'Lo sentimos, ha ocurrido un error al generar el PDF';
        this.openDialog(this.modalErrorId);
      });
    }
  }

  validateApplication() {
    const response = this.appService.validateApplicationForm();
    if (response.status === false) {
      this.openDialog('modal-error');
      this.errorMessage = response.msg;
    } else if (response.status === true) {
      let currentJson = this.jsonAppService.getAppJson();

      // change the status of the application to 'Validada' --> '30'
      currentJson.app_stts_cd = '30';
      console.log('current JSON: ', this.jsonAppService.getAppJson());

      this.jsonAppService.setAppJson(currentJson);

      this.viewLoading = true;
      this.openDialog(this.modalLoadPDFId);
      this.modalMessage = 'Validando solicitud ... ';
      // able 'GENERAR PDF button
      APPL_OPERATIONS[1].disable = false;

      this.appService.saveApplication(currentJson).subscribe((res: any) => {
        console.log('response from saveApplication on ValidateApplication: ', res);
        if (res.data) {
          console.log('res.data: ', res.data);
          this.jsonAppService.setAppJson(res.data);
          this.viewLoading = false;
          this.closeModal(this.modalLoadPDFId);
        }
      }, error => {
        console.log('error: ', error);
        this.viewLoading = false;
        this.closeModal(this.modalLoadPDFId);
        this.modalMessage = 'Lo sentimos, ha ocurrido un error al validar la solicitud';
        this.openDialog(this.modalErrorId);
      });
    }
  }

  getMessages() {
    let errors = [];
    errors = this.errorMessage.split('-');
    return errors;
  }

  openDialog(modalID: string) {
    this.modalService.open(modalID);
  }

  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }
}
