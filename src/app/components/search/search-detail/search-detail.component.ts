import {pdfOperation} from './../../../core/mock/mock-operations';
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

    let partyAppType = this.appService.getFormGroup().controls.typePerson.value;
    if (partyAppType !== null && partyAppType !== undefined) {
      // set(this.appJson, 'insurer.party_typ_cd', partyAppType === 'P' ? true : false);
      set(this.detail, 'insurer.party_typ_cd', partyAppType);
    }
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.formGroup.value);
    // // // console.log(this.formGroup.value);
  }

  openDialog(modalID: string) {
    this.modalService.open(modalID);
  }

  downloadPDF() {
    // console.log('PDF');
    // console.log(this.appId);
    if (this.appId) {
      // this.searchService.downloadPDF(this.appId);
      this.appService.getPDF(this.appId).subscribe((response) => {
        // console.log('response from PDF: ', response);
      }, error => {
        // console.log('on Error from download PDF: ', error);
      });
    }
  }
}
