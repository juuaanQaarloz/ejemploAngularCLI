import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../../app/core/services';
import {NewDocumentField} from '../../core/mock/documents/documents';
import {FormatwoOperations} from '../../core/mock/mock-operations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {WsService} from '../../core/services/ws.service';

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

  // Variables
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
              private http: HttpClient,
              private wsService: WsService) { }

  ngOnInit() {
    this.contador = 0;
    // // console.log("Carga de documentos");
    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);
    // // console.log('formGroup', this.formGroup);
    this.fields = this.getFields();
    this.title = 'Carga de Documentos';
    this.columnsNames = ['Tipo de Documentos*', 'Documento*', 'Acciones'];
    this.items = [];
    this.showActions = true;
    this.style = 'even-document';
    this.showplus = true;

    // // console.log('Document-fields', this.fields);

    const newDocument = this.mapNewDocumentBase();
    const response = this.applicationService.addItem(newDocument, 'document');
    this.currentItems = this.applicationService.documents.getValue();
  }

  getFields() {
    const fields = [];
    NewDocumentField.forEach((field) => {
      fields.push(field);
    });
    // // console.log('getFields: ', fields);
    return fields;
  }

  addNewDocument() {
    // // console.log('addNewDocument-component ');
    // // console.log('formGroup: ', this.formGroup);
    // // console.log('formGroup value: ', this.formGroup.value);
    const newDocument = this.mapAddDocumentBase();
    const response = this.applicationService.addItem(newDocument, 'document');

    this.fieldsCopy = JSON.parse(JSON.stringify(this.getFields()));
    // // console.log('Fields value: ', this.fields);
    // // console.log('FieldsCopy value: ', this.fieldsCopy);

    this.addFiles();
  }

  addFiles() {
      this.contador++;
      const validators = [ Validators.required ];
      this.fieldsCopy.forEach((field) => {
        // // console.log(field.name);
        if ( field.name === 'fileDocument' ) {
          field.message = '';
        }
        field.name = field.name + this.contador;
        field.idHtml = field.idHtml + this.contador;
        field.idDocument = this.contador + 1;
        this.formGroup.addControl(field.name, new FormControl('', validators));
        this.fields.push(field);
      });

    // // console.log("Fields: ");
    // // console.log(this.fields);
    // // console.log(this.fieldsCopy);
    // // console.log(this.formGroup);
  }

  mapNewDocumentBase() {
    const newDocumentBase = {
      documentId: (this.applicationService.getLastItemId('document') + 1).toString(),
      docId: null,
      docName: null,
      docExt: null,
      docType: null,
      docTypeField: this.content.fields[0].name,
      docFileField: this.content.fields[1].name
    };
    return newDocumentBase;
  }

  mapAddDocumentBase() {
    const newDocumentBase = {
      documentId: (this.applicationService.getLastItemId('document') + 1).toString(),
      docId: null,
      docName: null,
      docExt: null,
      docType: null,
      docTypeField: this.content.fields[0].name + (this.applicationService.getLastItemId('document')).toString(),
      docFileField: this.content.fields[1].name + (this.applicationService.getLastItemId('document')).toString()
    };
    return newDocumentBase;
  }

  removeItem(index, actionField, documentField, typeDocField) {
    // // console.log('Entro a removeItem de documents.component');
    // // console.log(this.fields.length);
    // // console.log(actionField);
    // // console.log(documentField);
    // // console.log(typeDocField);
    this.currentItems = this.applicationService.documents.getValue();
    if ( this.fields.length > 3) {
      // console.log('DocumentId a eliminar: ', actionField);
      // console.log('DocumentId a eliminar: ', Number(actionField.idDocument));
      const indexCI = this.currentItems.findIndex((item) => {
        // console.log('Item: ', item);
        // console.log('Item: ', Number(item.documentId));
        // console.log(item.documentId === actionField.idDocument);
        return  Number(item.documentId) === Number(actionField.idDocument);
      });
      // console.log(indexCI);
      // console.log(this.currentItems[indexCI]);
      if ( indexCI !== -1 ) {
        this.currentItems.splice(indexCI, 1);
        this.fields.splice(index, 1);
        this.formGroup.removeControl(actionField.name);
        this.fields.splice(index - 1, 1);
        this.formGroup.removeControl(documentField.name);
        this.fields.splice(index - 2, 1);
        this.formGroup.removeControl(typeDocField.name);
      }
    }
    // console.log(this.currentItems);
    // // console.log(this.formGroup);
    // // console.log(this.formGroup);
  }

  downloadFile(field) {
    // // console.log('Entro a downloadFile de documents.component');
    // // console.log(field.file.type);
    // // console.log(field.file);
    const blob = new Blob([field.file], {
      type: field.file.type
    });
    // // console.log('Blob: ');
    // // console.log(blob);
    // const url = window.URL.createObjectURL(blob);
    // window.open(url);

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = field.file.name;
    link.click();
  }

  downloadZip() {
    // // console.log('Entro a downloadZip de documents.component');
    // // console.log(this.fields);

    const ficheros = [];
    this.fields.forEach( field => {
      if ( field.type === 'file' && field.file ) {
        ficheros.push(field.file);
      }
    });
    // // console.log('Ficheros: ');
    // // console.log(ficheros);
    // // console.log(ficheros.length);

    if ( ficheros.length > 0 ) {

      const fd = new FormData();
      for (let i = 0; i < ficheros.length; i++) {
        fd.append('files', ficheros[i]);
      }

      this.wsService.createZip(fd).subscribe(
        res => {
          // // console.log('Res: ');
          // // console.log(res);

          const url = res.fileUrl + res.fileName;

          this.wsService.downloadZip(url).subscribe(result => {
              const blob = new Blob([result], {
                type: 'application/zip'
              });
              const urlDownload = window.URL.createObjectURL(blob);
              // // console.log(urlDownload);
              window.open(urlDownload);

              this.wsService.deleteZip(url).subscribe(result => {
                  // // console.log(result);
                },
                err => {
                  // // console.log("Error Delete: ");
                  // // console.log(err);
                });
            },
            err => {
              // // console.log("Error Download: ");
              // // console.log(err);
            });
        },
        err => {
          // // console.log("Error Create Zip: ");
          // // console.log(err);
        }
      );

    }

  }

//  Prueba de token
  probarToken() {
    // // console.log('Entro a probarToken de documents.component');
    // let token = 'aV0Xhgd8a_Yg_7e4n1DVU7LIq8QY5eMwJLXkXOBRTlDbgdEJGHoZ5j_IGGXndQa0scUXOOzUglJYeDkT9H5ECTlH6ewymv5IwS456bQoipIPnThfwwVjt5Kjwh-BAWhR3NQruiXcBYohvRaPsR4CDrFE5CGRJZ-m72vhHUGvjOaCnCBrTHwZ8sTx5udeJTYTDKduCExq3_1iduiAWTV7vZrc9BWRVMbriYF1SIqkcyCpp9SFS_X5cJIloellf_kTSPl5C2GU6EQ5ULfMoP9xCFR4e58ZupOanPP_jLRyMaalvYPWAwcdkGRBiDn9KJgw-XX3usLDJPBK7fXhvb-716fIM598QWroe2FgjvB91z6R7A02AUr7STGew5OfOM-dOI9a0UCUD-vCQMlcqdg4P5juQnsjkPRnZnT4bLFVHR7dMbeqiMiaq8Fi2vwvdsWRphfgfm0aDFJcJ5JjqhjVvgRwnTHMXtAZta0WH2ylvDUYQ1JFck7LPLM5Ks2cSoCTBIhppBAmFb26z00XB7cCiIRlTi_bId6Unr75UxrEL-or0HFO-yNCtUe8FEKbqYY-v-LiY2iRnu7OmgSn0xDc5TR3BOY.PQtnZndCt47gqfR79V8OeQ';
    const token = '4766841049392466';
    this.wsService.validateMitToken(token).subscribe(result => {
        // // console.log('Result: ');
        // // console.log(result);
      },
      err => {
        // // console.log("Error: ");
        // // console.log(err);
      });
  }

  updateDocument(field) {
    const updatedDocument = this.mapDocumentData(field);
    const response = this.applicationService.updateItem(updatedDocument, 'document');
  }

  mapDocumentData(field) {
    if ( field.name.indexOf('typeDocument') > -1 ) {
      return {
        documentId: field.documentId,
        docId: field.value,
        fieldName: field.name,
        docTypeField: field.name
      };
    } else if ( field.name.indexOf('fileDocument') > -1 ) {
      return {
        documentId: field.documentId,
        docName: field.docName,
        docExt: field.docExt,
        docType: field.docType,
        doc: field.doc,
        fieldName: field.name,
        docFileField: field.name
      };
    }
  }

  validateFields(listaDocuments) {
    const property = 'name';
    listaDocuments.forEach( (document) => {
      if ( !document.docId ) {
        const index = this.fields.findIndex((field) => field[property] === document.docTypeField);
        this.fields[index].valid = false;
      }
      if ( !document.docName ) {
        const index = this.fields.findIndex((field) => field[property] === document.docFileField);
        this.fields[index].valid = false;
        this.fields[index].message = 'Formatos aceptados: .pdf,.png,.jpg,.bmp. \n' +
          ' El tamaño maximo son 5Mb..';
      }
    });
  }
}
