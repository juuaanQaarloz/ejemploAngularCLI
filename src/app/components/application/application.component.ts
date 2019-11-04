import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ApplicationService, AuthService, StorageService} from '../../core/services';
import {MockTemplate} from '../../core/mock/mock-template';
import {DialogService} from '../dialog/dialog.service';
import {ModalService} from '../custom-modal';
import * as jsPDF from 'jspdf';
import {pdfOperation} from '../../core/mock/mock-operations';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  applicationObj =  MockTemplate;
  iconSecurity = 'security-icon';
  payLoad = '';
  formGroup: FormGroup;
  @ViewChild('content', {static: false}) content: ElementRef;
  pdfOperation = pdfOperation;
  constructor(private appService: ApplicationService,
              private authService: AuthService,
              private storageService: StorageService,
              public dialog: DialogService,
              private modalService: ModalService
  ) {}

  ngOnInit() {
    this.formGroup = this.appService.toFormGroup(this.applicationObj);
    this.appService.setFormGroup(this.formGroup);
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.formGroup.value);
    console.log(this.formGroup.value);
  }

  openDialog(modalID: string) {
    this.modalService.open(modalID);
  }

  testSepoMexService() {
    this.appService.getInfoFromSepomex('15220')
      .subscribe((response) => {
        console.log('response: ', response);
      }
    );
  }

  downloadPDF() {
    let doc = new jsPDF();

    doc.addHTML(document.getElementById('content') , () => {
      doc.save('solicitud.pdf');
    });
  }
}
