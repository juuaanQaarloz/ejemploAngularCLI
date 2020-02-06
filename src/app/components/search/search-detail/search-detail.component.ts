import {APPL_OPERATIONS, CLOSE_MODALS_OPT, pdfOperation} from './../../../core/mock/mock-operations';
import {FormGroup} from '@angular/forms';
import {Template} from './../../../models/template';
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ApplicationService} from 'src/app/core/services';
import {DialogService} from '../../dialog/dialog.service';
import {ModalService} from '../../custom-modal';
import {MockTemplate} from 'src/app/core/mock/mock-template';
import set from 'lodash/set';
import {SearchService} from '../search.service';
import {JsonApplicationService} from 'src/app/core/services/json-application.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  appId: string;
  appFuc: string;
  detail: any;
  applicationObj: Template;
  payLoad = '';
  formGroup: FormGroup;
  @ViewChild('content', {static: true}) content: ElementRef;
  pdfOperation = pdfOperation;
  errors: any;
  errorMessage;
  closeWindowOpt = CLOSE_MODALS_OPT;
  modalLoadPDFId;
  viewLoading = false;
  modalMessage;
  modalErrorId;
  applOperations = APPL_OPERATIONS;

  constructor(private appService: ApplicationService,
              public dialog: DialogService,
              private modalService: ModalService,
              private searchService: SearchService,
              private jsonApplicationService: JsonApplicationService) {
  }

  ngOnInit() {
    this.detail = this.jsonApplicationService.getAppJson();
    this.appId = this.detail.app_id;
    this.appFuc = this.detail.app_dcn_num;
    this.appService.setApplicationObject(MockTemplate);
    this.applicationObj = this.appService.getApplicationObject();
    this.formGroup = this.appService.toFormGroupReadOnly(this.applicationObj, this.detail);
    this.appService.setFormGroup(this.formGroup);

    if (this.detail.app_stts_cd >= 30) {
      APPL_OPERATIONS[0].disable = true;
      APPL_OPERATIONS[1].disable = false;
    } else {
      APPL_OPERATIONS[0].disable = false;
      APPL_OPERATIONS[1].disable = true;
    }

    let partyAppType = this.appService.getFormGroup().controls.typePerson.value;
    if (partyAppType !== null && partyAppType !== undefined) {
      // set(this.appJson, 'insurer.party_typ_cd', partyAppType === 'P' ? true : false);
      set(this.detail, 'insurer.party_typ_cd', partyAppType);
    }

    this.modalErrorId = 'modal-error-pdf';
    this.modalLoadPDFId = 'modal-loading';
  }

  executeOperation(delegateOperation, disable?) {
    // console.log('delegateOperation: ', delegateOperation);
    if (disable !== true) {
      if (delegateOperation === 'generatePDF') {
        this.downloadPDF();
      } else if (delegateOperation === 'validateApplication') {
        this.validateApplication();
      } else if (delegateOperation === 'closeModal') {
        this.closeModal('modal-error');
        this.closeModal(this.modalErrorId);
      }
    }
  }

  validateApplication() {
    const response = this.appService.validateApplicationForm();
    if (response.status === false) {
      this.openDialog('modal-error');
      this.errorMessage = response.msg;
    } else if (response.status === true) {
      let currentJson = this.detail;

      // change the status of the application to 'Validada' --> '30'
      currentJson.app_stts_cd = '30';
      console.log('current JSON: ', currentJson);

      this.jsonApplicationService.setAppJson(currentJson);

      this.viewLoading = true;
      this.openDialog(this.modalLoadPDFId);
      this.modalMessage = 'Validando solicitud ... ';
      // able 'GENERAR PDF button
      APPL_OPERATIONS[0].disable = true;
      APPL_OPERATIONS[1].disable = false;

      this.appService.saveApplication(currentJson).subscribe((res: any) => {
        console.log('response from saveApplication on ValidateApplication: ', res);
        if (res.data) {
          console.log('res.data: ', res.data);
          this.jsonApplicationService.setAppJson(res.data);
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

  getFormValue() {
    this.payLoad = JSON.stringify(this.formGroup.value);
    // // // console.log(this.formGroup.value);
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

  downloadPDF() {
    this.viewLoading = true;
    this.openDialog(this.modalLoadPDFId);
    this.modalMessage = 'Generando PDF ... ';
    if (this.detail.app_id === null) {
      this.viewLoading = false;
      this.closeModal(this.modalLoadPDFId);
      this.openDialog(this.modalErrorId);
    } else {
      this.appService.getPDF(this.detail.app_id.toString()).subscribe((response: any) => {
        if (response) {
          this.viewLoading = false;
          this.closeModal(this.modalLoadPDFId);
          this.convertPdf(response.binaryData);
        }

      }, error => {
        console.log('error: ', error);
        this.viewLoading = false;
        this.closeModal(this.modalLoadPDFId);
        this.modalMessage = 'Lo sentimos, ha ocurrido un error al generar el PDF';
        this.openDialog(this.modalErrorId);
      });
    }
  }

  convertPdf(base64) {
    if (base64 === null) {
      // console.log('ocurrio un error al generar el pdf');
      this.openDialog(this.modalErrorId);
    } else {
      const linkSource = 'data:application/pdf;base64,' + this.fromHexaToBase64(base64);
      const downloadLink = document.createElement('a');
      const fileName = this.detail.app_id + '.pdf';

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
  }

  fromHexaToBase64(hexa) {
    return btoa(String.fromCharCode.apply(null, hexa.replace(/\r|\n/g, '').
    replace(/([\da-fA-F]{2}) ?/g, '0x$1 ').replace(/ +$/, '').
    split(' ')));
  }
}
