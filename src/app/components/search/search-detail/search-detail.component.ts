import { AppConstants } from 'src/app/app.constants';
import { pdfOperation } from './../../../core/mock/mock-operations';
import { FormGroup } from '@angular/forms';
import { Template } from './../../../models/template';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApplicationService } from 'src/app/core/services';
import { DialogService } from '../../dialog/dialog.service';
import { ModalService } from '../../custom-modal';
import { MockTemplate } from 'src/app/core/mock/mock-template';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
    private httpClient: HttpClient,
    public dialog: DialogService,
    private modalService: ModalService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.detail = JSON.parse(localStorage.getItem('detail'));
    this.appId = this.detail.app_id;
    console.log(this.detail);
    this.appService.setApplicationObject(MockTemplate);
    this.applicationObj = this.appService.getApplicationObject();
    this.formGroup = this.appService.toFormGroupReadOnly(this.applicationObj, this.detail);
    this.appService.setFormGroup(this.formGroup);
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
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'metrolename': 'MX-6979_DES_G_OPS',
      'metuserid': localStorage.getItem('metuid')
    });

    let params = new HttpParams();
    params = params.append('appId', this.appId);

    this.httpClient.get(AppConstants.URL_SERVICE +"/App/getPdf", {headers, params}).subscribe( (resp:any) => {
      if(resp.result!=null){
        window.open(resp.result.pdfDoc, "_blank");
      }
    });
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
