import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../../app/core/services';
import {NewDocumentField} from "../../core/mock/documents/documents";
import {FormatwoOperations} from "../../core/mock/mock-operations";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  content = {
    id: 'content-2.53',
    idParent: 'step-22',
    parentType: 'Step',
    idHtml: 'app-content-form-2.53',
    fields: NewDocumentField,
    operations: FormatwoOperations,
    showContent: true,
    styleClass: 'document-type',
    renderConditions: '',
    contentType: 'looseFields'
  };

  //Variables
  title: string;
  columnsNames: any[];
  style: string;
  items: any[];
  showActions: boolean;
  showplus: boolean;
  formGroup: FormGroup;
  fields = [];
  fieldsCopy = [];
  contador: number;
  currentItems: any[];

  constructor(public applicationService: ApplicationService,
              private http: HttpClient) { }

  ngOnInit() {
    this.contador = 0;
    console.log("Carga de documentos");
    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);
    console.log('formGroup', this.formGroup);
    this.fields = this.getFields();
    this.title = 'Carga de Documentos';
    this.columnsNames = ['Tipo de Documentos*', 'Documento*', 'Acciones'];
    this.items = [];
    this.showActions = true;
    this.style = 'even-document';
    this.showplus = true;

    console.log('Document-fields', this.fields);

    const newDocument = this.mapNewDocumentBase();
    // const response = this.applicationService.addItem(newDocument, 'document');
    // this.currentItems = this.applicationService.documents.getValue();
  }

  getFields() {
    let fields = [];
    NewDocumentField.forEach((field) => {
      fields.push(field);
    });
    console.log('getFields: ', fields);
    return fields;
  }

  addNewDocument() {
    console.log('addNewDocument-component ');
    console.log('formGroup: ', this.formGroup);
    console.log('formGroup value: ', this.formGroup.value);
    // const newDocument = this.mapNewDocumentBase();
    // const response = this.applicationService.addItem(newDocument, 'document');

    this.fieldsCopy = JSON.parse(JSON.stringify(this.getFields()));
    console.log('Fields value: ', this.fields);
    console.log('FieldsCopy value: ', this.fieldsCopy);

    this.addFiles();
  }

  addFiles() {
      this.contador++;
      const validators = [ Validators.required ];
      this.fieldsCopy.forEach((field) => {
        console.log(field.name);
        if ( field.name == 'fileDocument' ) {
          field.message = '';
        }
        field.name = field.name + this.contador;
        field.idHtml = field.idHtml + this.contador;
        this.formGroup.addControl(field.name, new FormControl('', validators));
        this.fields.push(field);
      });

    console.log("Fields: ");
    console.log(this.fields);
    console.log(this.fieldsCopy);
    console.log(this.formGroup);
  }

  mapNewDocumentBase() {
    const newDocumentBase = {
      documentId: (this.applicationService.getLastItemId('document') + 1).toString(),
      docId: null,
      docName: null,
      docExt: null,
      docType: null,
    };
    return newDocumentBase;
  }

  removeItem(index, actionField, documentField, typeDocField) {
    console.log('Entro a removeItem de documents.component');
    console.log(index);
    console.log(actionField);
    console.log(documentField);
    console.log(typeDocField);
    // this.currentItems = this.applicationService.documents.getValue();
    if ( this.fields.length > 2 ) {
      this.fields.splice(index, 1);
      this.formGroup.removeControl(actionField.name);
      this.fields.splice(index -1, 1);
      this.formGroup.removeControl(documentField.name);
      this.fields.splice(index -2, 1);
      this.formGroup.removeControl(typeDocField.name);
      let lastChar = actionField.name.substr(actionField.name.length - 1);
      console.log("Last Char: ");
      console.log(lastChar);
      // let indexCI = this.currentItems.findIndex((item) => {
      //   return item.documentId === lastChar;
      // });
      // console.log(indexCI);
      // console.log(this.currentItems[indexCI]);
      // this.currentItems.splice(indexCI, 1);
    }
    // console.log(this.currentItems);
    console.log(this.formGroup);
    console.log(this.formGroup);
  }

  downloadFile(field) {
    console.log('Entro a downloadFile de documents.component');
    console.log(field);
    console.log(field.file);

    // const reader = new FileReader();

    // let fileToDownload = reader.readAsArrayBuffer(field.file);
    const fileToBlob = new Blob([field.file], {
      // type: 'image/jpeg'
      type: 'blob'
    });

    // (field).subscribe(data => {
      const blob = new Blob([field.file], {
        type: 'application/zip'
        // type: 'image/jpeg'
      });
      console.log('Blob: ');
      console.log(blob);
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    // });

  }

}
