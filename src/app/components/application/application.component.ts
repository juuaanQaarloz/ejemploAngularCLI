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
  resizeHeaderHeight = false;
  iconHome = 'home-icon';
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

  onScroll(scrollOffset) {
    if (scrollOffset > 0) {
      this.resizeHeaderHeight = true;
    } else {
      this.resizeHeaderHeight = false;
    }
  }

  onMouseMove(event) {
    if (event.type === 'mouseover') {
      if (event.target.id === 'labelHome' || event.target.id === 'iconHome') {
        this.iconHome = 'home-icon-hover';
      } else if (event.target.id === 'labelSecurity' || event.target.id === 'iconSecurity') {
        this.iconSecurity = 'security-icon-hover';
      }
    } else if (event.type === 'mouseout') {
      if (event.target.id === 'labelHome' || event.target.id === 'iconHome') {
        this.iconHome = 'home-icon';
      } else if (event.target.id === 'labelSecurity' || event.target.id === 'iconSecurity') {
        this.iconSecurity = 'security-icon';
      }
    }
    // console.log('event: ', event.target.id);
  }

  logout(): void {
    this.authService.logout().subscribe(
      response => {
        if (response) {
          this.storageService.logout();
        }
      }
    );
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

  fileChange(event) {
    console.log('event.target.files: ', event.target.files);
    /*let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      // In Angular 5, including the header Content-Type can invalidate your request
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      this.http.post(`${this.apiEndPoint}`, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        )
    }*/
  }
}
