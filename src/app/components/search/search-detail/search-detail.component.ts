import { AppConstants } from 'src/app/app.constants';
import { pdfOperation } from './../../../core/mock/mock-operations';
import { FormGroup } from '@angular/forms';
import { Template } from './../../../models/template';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApplicationService } from 'src/app/core/services';
import { DialogService } from '../../dialog/dialog.service';
import { ModalService } from '../../custom-modal';
import { MockTemplate } from 'src/app/core/mock/mock-template';
import set from 'lodash/set';
import { SearchService } from '../search.service';
import { JsonApplicationService } from 'src/app/core/services/json-application.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  appId: string;
  detail:any;
  applicationObj: Template;
  payLoad = '';
  formGroup: FormGroup;
  @ViewChild('content', { static: true }) content: ElementRef;
  pdfOperation = pdfOperation;
  items = [];
  errors:any;

  constructor(private appService: ApplicationService,
    public dialog: DialogService,
    private modalService: ModalService,
    private searchService: SearchService,
    private jsonApplicationService: JsonApplicationService
  ) {
  }

  ngOnInit() {
    this.detail = JSON.parse(localStorage.getItem('detail'));
    this.appId = this.detail.app_id;
    this.jsonApplicationService.setAppJson(this.detail);
    console.log(this.detail);
    this.appService.setApplicationObject(MockTemplate);
    this.applicationObj = this.appService.getApplicationObject();
    this.formGroup = this.appService.toFormGroupReadOnly(this.applicationObj, this.detail);
    this.appService.setFormGroup(this.formGroup);

    let partyAppType = this.appService.getFormGroup().controls.typePerson.value;
    if (partyAppType !== null && partyAppType !== undefined) {
      // set(this.appJson, 'insurer.party_typ_cd', partyAppType === 'P' ? true : false);
      set(this.detail, 'insurer.party_typ_cd', partyAppType);
    }

    // an example array of 150 items to be paged
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
    /*this.appService.updateItemProperty(
      'beneficiary',
      '1',
      'participationPercentage',
      '40');*/  
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.formGroup.value);
    // // console.log(this.formGroup.value);
  }

  openDialog(modalID: string) {
    this.modalService.open(modalID);
  }

  downloadPDF() {
    console.log("PDF");
    console.log(this.appId);
    this.searchService.downloadPDF(this.appId);
  }

  validateForm() {
    /*Object.keys(this.formGroup.controls).forEach(key => {
      // // console.log('formControlName: ', key);
      // // // console.log('formControl: ', this.formGroup.controls[key]);
      const isValid =  this.formGroup.controls[key].valid;
      if (!isValid) {
        this.formGroup.controls[key].markAsTouched();
      } else {
        this.formGroup.controls[key].markAsUntouched();
      }
      // // console.log('isValid: ', isValid);
    });*/

    this.applicationObj.sections.forEach(section => {
      section.contents.forEach((contentFromSection) => {
        if (contentFromSection.fields) {
          contentFromSection.fields.forEach(field => {
            field.valid = this.formGroup.controls[field.name].valid;
            // // console.log('formControlName: ', field.name);
            // // console.log('valid: ', field.valid);
          });
        } else {
          if (contentFromSection.process) {
            contentFromSection.process.steps.forEach(step => {
              step.contents.forEach((contentFromStep) => {
                if (contentFromStep.fields) {
                  contentFromStep.fields.forEach(field => {
                    field.valid = this.formGroup.controls[field.name].valid;
                    // // console.log('formControlName: ', field.name);
                    // // console.log('valid: ', field.valid);
                  });
                } else {
                  if (contentFromStep.contentChildren) {
                    contentFromStep.contentChildren.forEach(contentChild => {
                      if (contentChild.fields) {
                        contentChild.fields.forEach(field => {
                          field.valid = this.formGroup.controls[field.name].valid;
                          // // console.log('formControlName: ', field.name);
                          // // console.log('valid: ', field.valid);
                        });
                      }
                    });
                  }
                }
              });
            });
          }
        }
      });

    });
  }

  getValidateField() {
    this.errors = this.formGroup.errors;
    console.log('erros: ', this.errors);
    if (this.errors) {
      console.log('invalidEmailConfirmation: ', this.errors.invalidEmailConfirmation);
    }
  }

}
