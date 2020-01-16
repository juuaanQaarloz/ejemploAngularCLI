import {AfterViewInit, Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Field} from '../../models/field';
import {FormControl, FormGroup} from '@angular/forms';
import {SelectOption} from '../../models/select-option-interface';
import {ApplicationService, validateAge, DateValidator} from '../../core/services';
import {WsService} from '../../core/services/ws.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {addCurrencyFormat, addSlashesToDate} from '../../core/utilities';
import {calculateRFC, correctFieldValue, correctFieldValueLostFocus, stringToRegExp, transformDate} from '../../core/utilities';
import {SepomexObj} from '../../models/sepomex-obj';
import {Pattern} from '../../models/pattern/pattern';
import {DialogRef} from '../dialog/dialog-ref';
import {ModalService} from '../custom-modal';
import {Operation} from '../../models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NewDocumentField} from "../../core/mock/documents/documents";

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css']
})
export class FieldFormComponent implements OnInit, AfterViewInit {
  @Input() fieldObj: Field;
  @Input() form: FormGroup;
  @Input() item?: any;
  @Output() executeAction?: any = new EventEmitter<any>();

  showSelectLabel = false;
  isSelected = true;
  radioOptions = [];
  selectOptions = [];
  selectOptions1 = [];
  checkBoxOptions = [];
  autocompleteOptions = [];
  toggleVisible = true;
  datePickerClicked = false;
  show = true;
  disable: boolean;
  regExpPattern;
  regnNoAllowedCharactersExpPattern;
  loading = false;
  modalID = 'modal-warning1';
  modalMessage = 'La suma de las participaciones de los agentes excede el 100%';
  messageClabe = 'CLABE/Token y Confirmar CLABE/Token no coinciden';
  fileName: string;
  contadorDoc: number;
  okOperation: Operation = {
    id: 'opt-1',
    idHtml: 'btnOK',
    name: 'OK',
    label: 'OK',
    type: 'button',
    style: '',
    styleClass: 'ml-button-primary',
    message: '',
    messageClass: '',
    delegateOperation: 'closeModal',
    renderConditions: '',
    enableConditions: ''
  };

  constructor(private applicationService: ApplicationService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private modalService: ModalService,
              private http: HttpClient,
              private wsService: WsService) {
    this.registerCustomIcons();

  }

  ngOnInit() {
    if (this.fieldObj.type === 'radio' || this.fieldObj.type === 'select'
      || this.fieldObj.type === 'checkbox-n' || this.fieldObj.type === 'select-multiple'
      || this.fieldObj.type === 'autocomplete' || this.fieldObj.type === 'select-1' ) {
      this.getOptions();
    }
    if (this.fieldObj.type === 'select' && this.fieldObj.value) {
      this.showSelectLabel = true;
    }

    if (this.fieldObj.type === 'select-1' || this.fieldObj.type === 'select-change' ) {
      let el = document.getElementById('slctPacking');
      this.getOptionsDefine('packing', 'IPRE', 'select-1', el);
    }

    if (this.fieldObj.renderConditions) {
      const dependedFields = this.applicationService.getDependedFields(this.fieldObj.renderConditions);
      this.show = this.applicationService.evaluateConditions(this.fieldObj.renderConditions, this.form);
      dependedFields.forEach((dependedField) => {
        this.form.controls[dependedField].valueChanges.subscribe((value) => {
          this.show = this.applicationService.evaluateConditions(this.fieldObj.renderConditions, this.form);
        });
      });
    }

    if (this.fieldObj.requiredConditions) {
      const dependedFields = this.applicationService.getDependedFields(this.fieldObj.requiredConditions);
      this.fieldObj.required = this.applicationService.evaluateConditions(this.fieldObj.requiredConditions, this.form);
      /*if (this.fieldObj.name === 'beneficiaryBirthDate') {
        // console.log('this.applicationService.getValidationFunctions(this.fieldObj): ',
          this.applicationService.getValidationFunctions(this.fieldObj));
      }*/
      // this.form.controls[this.fieldObj.name].setValidators(this.applicationService.getValidationFunctions(this.fieldObj));
      // this.form.controls[this.fieldObj.name].updateValueAndValidity();

      dependedFields.forEach((dependedField) => {
        this.form.controls[dependedField].valueChanges.subscribe((value) => {

          this.fieldObj.required = this.applicationService.evaluateConditions(this.fieldObj.requiredConditions, this.form);
          this.form.controls[this.fieldObj.name].setValidators(this.applicationService.getValidationFunctions(this.fieldObj));
          this.form.controls[this.fieldObj.name].updateValueAndValidity();

          if (this.fieldObj.name === 'beneficiaryBusinessName') {
            // console.log('this.fieldObj.required: ', this.fieldObj.required);
          }
        });
      });
    }

    if (this.fieldObj.disable) {
      // to disable the field
      this.form.controls[this.fieldObj.name].disable();
      // to change the background color of the field
      this.disable = this.checkState();
      this.form.controls[this.fieldObj.name].valueChanges.subscribe(() => {
        this.disable = this.checkState();
        // // console.log('this.disable: ', this.disable);
      });
    }

    if (this.fieldObj.enableConditions) {
      // console.log('onEnableConditions...');
      // console.log('fieldName: ', this.fieldObj.name);
      const dependedFields = this.applicationService.getDependedFields(this.fieldObj.enableConditions);
      // console.log('dependedFields: ', dependedFields);
      let status;

      dependedFields.forEach((dependedField) => {
        this.form.controls[dependedField].valueChanges.subscribe((value) => {
          if (value !== '') {
            const resEval = this.applicationService.evaluateConditions(this.fieldObj.enableConditions, this.form);

            if (resEval) {
              this.form.controls[this.fieldObj.name].enable();
              this.fieldObj.disable = false;
              status = this.checkState();

            } else {
              this.form.controls[this.fieldObj.name].disable();
              this.fieldObj.disable = true;
              status = this.checkState();

            }
          }
        });
      });
    }

    if (this.fieldObj.name === 'age' || this.fieldObj.name === 'ageS') {
      this.form.controls[this.fieldObj.name].valueChanges.subscribe((value) => {
        // console.log('onValueChange age: ', value);
        if (value) {
          this.isValid(this.fieldObj.name);
        }
      });
    }

    this.fieldObj.valid = true;

    if (this.fieldObj.type === 'radio') {
      this.form.controls[this.fieldObj.name].valueChanges.subscribe((value) => {
        // // console.log('onValueChanges value: ', value);
        // // console.log('formControlName: ', this.fieldObj.name);
        this.isValid();
      });
    }

    if (this.fieldObj.pattern) {
      let optionsPattern: Pattern[];
      this.applicationService.getPatternCatalog()
        .subscribe((results) => {
          optionsPattern = results;
          let patternFind: Pattern;
          const resultado = optionsPattern.find(patternFind => patternFind.id === this.fieldObj.pattern);
          if (resultado !== undefined) {
            this.regExpPattern = stringToRegExp(resultado.value);
          } else {
            this.regExpPattern = stringToRegExp(this.fieldObj.pattern);
          }
        });
    }

    if (this.fieldObj.noAllowedCharactersPattern) {
      // this.regnNoAllowedCharactersExpPattern = stringToRegExp(this.fieldObj.noAllowedCharactersPattern);
      // this.regExpPattern = this.fieldObj.pattern;
      // // console.log('regExpPattern: ', this.regExpPattern);
    }

    this.contadorDoc = 0;

    if (this.fieldObj.detonateFunction) {
      console.log('detonateFunction: ', this.fieldObj.detonateFunction);
      this.form.controls[this.fieldObj.name].valueChanges.subscribe((value) => {
        if (this.fieldObj.detonateFunction === 'enableAdditionalCoverage') {
          this.applicationService.enableAdditionalCoverage();
        }
      });
    }
  }

  ngAfterViewInit() {
    // // console.log('on ngAfterViewInit...');
    if (this.fieldObj.type === 'text' || (this.fieldObj.type === 'autocomplete')) {
      const elem: Element = document.getElementById(this.fieldObj.idHtml);
      // // // console.log('elem: ', elem);
      let valueToSet;
      if (elem) {
        if (this.fieldObj.value) { // set default value from configuration
          valueToSet = this.fieldObj.value;
          elem.setAttribute('value', valueToSet);
          this.form.controls[this.fieldObj.name].setValue(valueToSet);
        } else if (this.form.controls[this.fieldObj.name].value) { // set value from an older capture
          valueToSet = this.form.controls[this.fieldObj.name].value;
          elem.setAttribute('value', valueToSet);
          this.form.controls[this.fieldObj.name].setValue(valueToSet);
        }
      }
    }
  }

  onCheckboxChange() {
    console.log('onCheckboxChange...');

    if (this.fieldObj.detonateFunctionParams) {
      this.applicationService.evaluateCoverageBehaviour(
        this.fieldObj.detonateFunctionParams,
        this.form.controls[this.fieldObj.name].value);
    }


    let value = this.form.controls[this.fieldObj.name].value;

    console.log('name: ', this.fieldObj.name);
    console.log('value: ', this.form.controls[this.fieldObj.name].value);
    if (value === true) {
      // add to coverages array
      this.applicationService.updateCoveragesArray('add', this.fieldObj.name);
    } else if (value === false) {
      // remove from coverages array
      this.applicationService.updateCoveragesArray('remove', this.fieldObj.name);
    }

  }


  onKeyUp(event) {
    let value;
    value = event.target.value;
    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    event.target.value = correctFieldValue(value);
    elem.setAttribute('value', event.target.value);
    this.form.controls[this.fieldObj.name].setValue(event.target.value);
    if (this.fieldObj.name === 'assuredImport') {
      // // console.log('Entro assuredImport: ');
      // event.target.value = addCurrencyFormat(event.target.value);
    }

    if (value) {
      this.isValid();
    }

    // // // console.log('value.length: ', value.length);
    if (this.fieldObj.name === 'rfc' || this.fieldObj.name === 'rfcS' || this.fieldObj.name === 'formatwoRfc') {
      if (value.length === 10 && event.key !== 'Backspace') { // calculate rfc when the user capture the first 10 characters
        const calcRFC = this.calculateRFC();
        if (calcRFC !== null) {
          // // // console.log('calculateRFC: ', calcRFC);
          this.setCalculatedRFC(calcRFC);
        }
      }
    } else if (this.fieldObj.name === 'participationPercentageI') {
      // console.log('onParticipationPercentageI');
      // console.log('item: ', this.item);
      this.item.participationPercentage = this.form.controls[this.fieldObj.name].value;

      if (!this.item.participationPercentage || Number(this.item.participation) === 0) {
        // console.log('item.participationPercentage: ', this.item.participationPercentaje);
        this.fieldObj.valid = false;
        this.fieldObj.message = 'El porcentaje de  participación no puede ser 0';
      } else if (this.form.controls[this.fieldObj.name].value != null) {
        const response = this.applicationService.updateItem(this.item, 'beneficiary');
        // console.log('response: ', response);
        if (response.status === false) {
          // console.log('response.status is false');
          this.fieldObj.message = response.message;
          // console.log('message: ', this.fieldObj.message);
          this.fieldObj.valid = false;
          // console.log('valid: ', this.fieldObj.valid);
        }
      }
    }
    // validar
    if (this.fieldObj.name === 'currency') {
      // this.setFunds();
    }
    if (this.fieldObj.name === 'assuredImport') {
      // // console.log('Entro assuredImport: ');
    }
    if (this.fieldObj.name === 'assuredImport') {
      // // console.log('Entro assuredImport: ');
    }
    if (this.fieldObj.name === 'txtClabeConfir') {
      const idClabe = 'txtClabe';
      console.log('TOKEN MIT 1 --->:' + this.form.controls[this.fieldObj.name].value);
      console.log('Confirma TOKEN MIT 1 --->: ' + this.form.controls[idClabe].value);
      if (this.form.controls[idClabe].value === this.form.controls[this.fieldObj.name].value) {
        console.log('TOKEN MIT 2 --->: ' + this.form.controls[this.fieldObj.name].value);
        const bine = Number(this.form.controls[this.fieldObj.name].value.substring(0, 6));
        if (this.form.controls[this.fieldObj.name].value.length === 16) {
          this.getDataPaymentMit(bine);
          this.wsService.validateMitToken(this.form.controls[this.fieldObj.name].value)
            .subscribe((results) => {
              console.log('Respuesta de mit token');
              console.log(results);
              console.log(results);
              this.getDataPaymentMit(bine);
            });
        } else if (this.form.controls[this.fieldObj.name].value.length === 18) {
          console.log('Respuesta de bank bienes');
          this.getDataPaymentMit(bine);
        }
      } else {
        this.fieldObj.message = this.messageClabe;
        this.fieldObj.valid = false;
      }
    }
  }

  onKeyUpAutoComplete(event) {
    // console.log('onKeyUpAutoComplete event: ', event);
    let value;
    value = event.source.value;
    // console.log('value: ', value);

    if ( this.fieldObj.name === 'agentName') {
      const nombreVar = 'agentPromotor';
      const agente = 'nombreAgente';
      this.applicationService.getCatalogById('agentsProfile', 'IPRE')
        .subscribe((results) => {
          const index = results.findIndex((i) => i[agente] === this.form.controls[this.fieldObj.name].value);
          if ( index !== -1 ) {
            const resp: any = results[index];
            if (resp.nombrePromotoria !== null) {
              this.form.controls[nombreVar].setValue(resp.nombrePromotoria);
              const element = document.getElementById('txtAgentPromotor');
              element.setAttribute('value', resp.nombrePromotoria);
            } else {
              this.form.controls[nombreVar].reset();
              const element = document.getElementById('txtAgentPromotor');
              element.setAttribute('value', null);
            }
          }
      });
    }

    const elem: Element = document.getElementById(this.fieldObj.idHtml);
    event.source.value = correctFieldValue(value);
    elem.setAttribute('value', event.source.value);
    // console.log('value2: ', elem.getAttribute('value'));

    this.form.controls[this.fieldObj.name].setValue(event.source.value);

    if (value) {
      this.isValid();
    }
  }

  fileChange(event) {
    this.contadorDoc++;
    // console.log('event: ', event.target.files);
    // console.log('Target: ', event);

    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      const fileSelected: File = fileList[0];
      // console.log('File selected: ', fileSelected);
      this.fileName = fileSelected.name;
      // console.log(this.fileName);
      // Validar extensión
      let contador = 0;
      const extensionArchivo = this.fileName.slice(this.fileName.lastIndexOf('.'));
      let extensionArchivoCopy = this.fileName.slice(this.fileName.lastIndexOf('.'));
      extensionArchivoCopy = extensionArchivoCopy.substring(1);
      // console.log(extensionArchivoCopy);
      const extensionPermitida = (this.fieldObj.accept.split(','));
      // console.log(extensionArchivo);
      // console.log(extensionPermitida);
      extensionPermitida.forEach((ext) => {
        if (ext === extensionArchivo) {
          contador++;
        }
      });
      // console.log('Contador: ', contador);
      // Validar tamaño archivo
      let tamanioValido = true;
      if (fileSelected.size > 5242880) {
        tamanioValido = false;
      }
      // console.log('Tamaño valido: ', tamanioValido);
      // let file = null;
      if (contador === 0 || !tamanioValido) {
        // console.log('1');
        this.form.controls[this.fieldObj.name].reset();
        this.fileName = '';
        this.fieldObj.message = 'Formatos aceptados: ' + this.fieldObj.accept + '. \r\n El tamaño maximo son 5Mb.';
        this.fieldObj.file = null;

        // Update Document
        if ( this.fieldObj.name.indexOf('fileDocument') > -1 && this.form.controls[this.fieldObj.name] ) {
          const field = {
            name: this.fieldObj.name,
            docName: null,
            docExt: null,
            docType: null,
            doc: null,
            documentId: this.fieldObj.idDocument
          };
          this.executeAction.emit(field);
          this.fieldObj.valid = false;
        }
      } else {
        // console.log('2');
        this.fieldObj.message = '';
        this.fieldObj.file = fileSelected;
        this.fieldObj.valid = true;

        // Update Document
        if ( this.fieldObj.name.indexOf('fileDocument') > -1 && this.form.controls[this.fieldObj.name] ) {
          const field = {
            name: this.fieldObj.name,
            docName: this.fileName,
            docExt: extensionArchivo,
            docType: fileSelected.type,
            doc: fileSelected,
            documentId: this.fieldObj.idDocument
          };
          this.executeAction.emit(field);
        }

        // Convert to base64
        // file = this.getBase64(fileSelected).then(
        //   data => // console.log(data)
        // );

        const date = new Date();
        const milliseconds = new Date().getMilliseconds();
        // console.log('Date: ');
        // console.log(date);
        // console.log(date.toLocaleString());
        // console.log(milliseconds);

        const filenetSkeletonRequest = {
          "name": milliseconds + '_' + fileSelected.name,
          "categoryCode": "APPLICATION",
          "typeCode": "EOB",
          "typeDescription": " ",
          "formatCode": extensionArchivoCopy,
          "description": fileSelected.name,
          "content": "JVBERi0xLjQKJaqrrK0KMSAwIG9iago8PAovQ3JlYXRvciAoQXBhY2hlIEZPUCBWZXJzaW9uIDIuMSkKL1Byb2R1",
          "extension": {
            "size": {
              "unitCode": "B",
              "value": fileSelected.size
            },
            "applicationNumber": "fwhgg2323232",
            "businessTypeCode": "Product Management",
            "businessTypeDescription": " ",
            "subTypeCode": "D-EOB",
            "subTypeDescription": " ",
            "initiatedDateTime": date.toLocaleString(),
            "initiatorNumber": "",
            "initiatorTypeCode": 123456789,
            "product": {
              "number": this.contadorDoc,
              "typeCode": "Met99",
              "nameCode": " ",
              "nameCategoryCode": " "
            }
          }
        };
        //
        const fd = new FormData();
        fd.append('file', fileSelected);
        fd.append('fileExtension', extensionArchivo);
        fd.append('filenetDocument', JSON.stringify(filenetSkeletonRequest));

        // this.wsService.uploadFilenet(fd);
      }

      // console.log(this.form);
      // console.log('File: ');
      // console.log(fileSelected);
    }

  }

  // getBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = error => reject(error);
  //   });
  // }

  onChange(event) {
    // console.log('onChange event.target.value: ', event.target.value);
    // console.log('formControlName: ', this.fieldObj.name);
    this.isValid();
  }

  onBlur() {
    let value;
    value = this.form.controls[this.fieldObj.name].value;
    this.form.controls[this.fieldObj.name].setValue( correctFieldValueLostFocus(value));
    // // console.log('onBlur...');
    // // console.log(this.fieldObj.name);
    let valid = true;

    if (this.fieldObj.name === 'zipCode' || this.fieldObj.name === 'zipCodeS' || this.fieldObj.name === 'zipCodeM') {
      const zipCode = this.form.controls[this.fieldObj.name].value;
      // // console.log('zipCode: ', zipCode);
      if (zipCode) {
        this.applicationService.getInfoFromSepomex(zipCode).subscribe((sepoMexResponse: SepomexObj) => {
          // // console.log('sepoMexResponse: ', sepoMexResponse);
          if (sepoMexResponse) {
            this.setAddress(sepoMexResponse);
          }
        });
      }
    } else if (this.fieldObj.name === 'agentParticipationI') {
      this.item.participation = this.form.controls[this.fieldObj.name].value;
      if (!this.item.participation || Number(this.item.participation) === 0) {
        this.fieldObj.valid = false;
        valid = false;
        this.fieldObj.message = 'La participación no puede ser 0';
      } else if (this.form.controls[this.fieldObj.name].value != null) {
        const response = this.applicationService.updateItem(this.item, 'agent');
        if (response.status === false) {
          this.modalMessage = response.message;
          this.modalService.open(this.modalID);
        }
      }
    } else if (this.fieldObj.name === 'agentParticipation') {
      if (!this.form.controls[this.fieldObj.name].value || Number(this.form.controls[this.fieldObj.name].value) === 0) {
        this.fieldObj.valid = false;
        valid = false;
        this.fieldObj.message = 'La participación no puede ser 0';
      }
    } else if ( this.fieldObj.name === 'agentParticipation') {
      if (!this.form.controls[this.fieldObj.name].value || Number(this.form.controls[this.fieldObj.name].value) === 0) {
        this.fieldObj.valid = false;
        valid = false;
        this.fieldObj.message = 'La participación no puede ser 0';
      }
    }
    if (this.fieldObj.name === 'additionalCost') {
      //  // console.log('Entro en savingsGoal: ');
      const additionalCost = this.form.controls.additionalCost.value;
      if (Number(additionalCost) > Number(0.00)) {
        this.setValueField('additionalCost', 'txtAdditionalCost', addCurrencyFormat(additionalCost));
      }
    }

    // validar suma asegurada de la sección datos del plan
    if (this.fieldObj.name === 'assuredImport') {
      const currency = this.form.controls.currency.value;
      const assuredImport = this.form.controls.assuredImport.value;
      // if (currency === 'mxn') {
      if (currency === '0') {
        if (Number(assuredImport) > Number(0.00)){
          if (Number(assuredImport) < Number(400000.00)) {
            // // console.log('invalidAssuredImportMxn', false);
            return { invalidAssuredImportMxn: true};
          } else {
            this.setValueField('assuredImport', 'txtAssuredImport', addCurrencyFormat(assuredImport));
          }
        }
      // } else if (currency === 'usd') {
      } else if (currency === '1') {
        if (Number(assuredImport) > Number(0.00)) {
          if (Number(assuredImport) < Number(40000.00)) {
            return {invalidAssuredImportUsd: true};
          } else {
            this.setValueField('assuredImport', 'txtAssuredImport', addCurrencyFormat(assuredImport));
          }
        }
      }
    }

    if (this.fieldObj.name === 'salary') {
      const salary = this.form.controls.salary.value;

      if (salary) {
        if ( this.validateIntegerDecimals(this.form.controls.salary.value)) {
          this.fieldObj.valid = true;
          valid = true;
          this.setValueField('salary', 'txtSalary', addCurrencyFormat(salary));
        } else {
          this.fieldObj.valid = false;
          valid = false;
          this.form.controls.salary.setValue(null);
          this.fieldObj.message = 'El ingreso mensual debe contener máximo 10 enteros y 2 decimales.';
        }
      } else {
        this.fieldObj.message = 'El ingreso mensual es obligatorio.';
      }
    }

    if (this.fieldObj.name === 'salaryS') {
      const salaryS = this.form.controls.salaryS.value;

      if (salaryS) {
        if ( this.validateIntegerDecimals(this.form.controls.salaryS.value)) {
          this.fieldObj.valid = true;
          valid = true;
          this.setValueField('salaryS', 'txtSalaryS', addCurrencyFormat(salaryS));
        } else {
          this.fieldObj.valid = false;
          valid = false;
          this.form.controls.salaryS.setValue(null);
          this.fieldObj.message = 'El Ingreso bruto mensual debe contener máximo 10 enteros y 2 decimales.';
        }
      } else {
        this.fieldObj.message = 'El Ingreso bruto mensual es obligatorio.';
      }
    }

    if (this.fieldObj.name === 'additionalSalary') {
      const additionalSalary = this.form.controls.additionalSalary.value;

      if (additionalSalary) {
        if ( this.validateIntegerDecimals(this.form.controls.additionalSalary.value)) {
          this.fieldObj.valid = true;
          valid = true;
          this.setValueField('additionalSalary', 'txtAdditionalSalary', addCurrencyFormat(additionalSalary));
        } else {
          this.fieldObj.valid = false;
          valid = false;
          this.form.controls.additionalSalary.setValue(null);
          this.fieldObj.message = 'El ingreso mensual adicional debe contener máximo 10 enteros y 2 decimales.';
        }
      } else {
        this.fieldObj.message = 'El ingreso mensual adicional es obligatorio.';
      }
    }

    if ( this.fieldObj.name === 'extremeSportsD' ) {
      this.applicationService.getCatalogById(this.fieldObj.sourceID, this.fieldObj.source).subscribe((results) => {
        const index = results.findIndex((i) => i[this.fieldObj.sourceStructure[1]] === this.form.controls[this.fieldObj.name].value);
        if ( index !== -1 ) {
          this.fieldObj.valid = true;
          valid = true;
        } else {
          this.fieldObj.valid = false;
          valid = false;
          this.form.controls.extremeSportsD.setValue(null);
          this.form.controls.extremeSportsD.reset();
        }
      });
    }

    if ( this.fieldObj.name === 'describeDiseasesD' ) {
      this.applicationService.getCatalogById(this.fieldObj.sourceID, this.fieldObj.source).subscribe((results) => {
        const index = results.findIndex((i) => i[this.fieldObj.sourceStructure[1]] === this.form.controls[this.fieldObj.name].value);
        if ( index !== -1 ) {
          this.fieldObj.valid = true;
          valid = true;
        } else {
          this.fieldObj.valid = false;
          valid = false;
          this.form.controls.describeDiseasesD.setValue(null);
          this.form.controls.describeDiseasesD.reset();
        }
      });
    }

    /*if (this.fieldObj.name === 'txtClabeConfir') {
      const idClabe = 'txtClabe';
      console.log('TOKEN MIT 11 --->: ' + this.form.controls[this.fieldObj.name]);
      if (this.form.controls[idClabe] === this.form.controls[this.fieldObj.name]) {
        console.log('TOKEN MIT 22 --->: ' + this.form.controls[this.fieldObj.name]);
        this.wsService.validateMitToken(this.form.controls[this.fieldObj.name])
          .subscribe((results) => {
            console.log(results);
          });
      } else {
        this.fieldObj.message = this.messageClabe;
        this.fieldObj.valid = false;
      }
    }*/
    // las validaciones deben estar antes
    if (valid) {
      this.isValid();
    }
  }

  onValidate(event) {
    // // console.log('onValidate: ');
    this.isValid();
  }

  onClickToggle() {
    this.toggleVisible = !this.toggleVisible;
  }

  onDatePickerClick() {
    this.datePickerClicked = !this.datePickerClicked;
  }

  onChangeSelect(event) {

    // console.log('onChangeSelect...');
    // // console.log('event.target.value: ', event.target.value);

    if (event.target.value === '') {
      this.showSelectLabel = false;
    } else {
      this.showSelectLabel = true;
    }

    if (event.target.value) {
      this.isValid();
    }

    this.isValid();
    this.setFunds();
    // // console.log('Valor antes de ::', event.target);
    if (event.target.id === 'slctCurrency') {
      const assuredImport = this.form.controls.assuredImport.value;
      if (Number(assuredImport) !== Number(0.00)) {
        this.setValueField('assuredImport', 'txtAssuredImport', null);
      }
    }

    if (event.target.id === 'slctPacking1') {
      this.form.controls.packing.setValue(event.target.value);
    }

    if ( this.fieldObj.name.indexOf('typeDocument') > -1 && this.form.controls[this.fieldObj.name] ) {
      const field = {
        value: this.form.controls[this.fieldObj.name].value,
        name: this.fieldObj.name,
        documentId: this.fieldObj.idDocument
      };
        this.executeAction.emit(field);
    }
  }

  getOptions() {
    let options = [];
    this.applicationService.getCatalogById(this.fieldObj.sourceID, this.fieldObj.source)
      .subscribe((results) => {
        options = results;
        if (options !== undefined) {
          options.forEach((selectItem) => {
            if (this.fieldObj.type === 'select' || this.fieldObj.type === 'select-multiple') {
              this.selectOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            } else if (this.fieldObj.type === 'radio') {
              this.radioOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            } else if (this.fieldObj.type === 'checkbox') {
              // console.log('selectItem-checkbox: ', selectItem);
              this.checkBoxOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            } else if (this.fieldObj.type === 'autocomplete') {
              this.autocompleteOptions.push(this.constructSelectOption(selectItem, this.fieldObj.sourceStructure));
            }
          });

          if (this.fieldObj.type === 'autocomplete') {
            this.loading = true;
          }
          // // console.log('autoComplete: ', this.autocompleteOptions);
        }
      });
  }

  constructSelectOption(object, structure) {
    const finalSelectOption: SelectOption = {
      id: this.getValueByProperty(object, structure[0]),
      name: this.getValueByProperty(object, structure[1]),
      value: this.getValueByProperty(object, structure[2])
    };
    return finalSelectOption;
  }

  getValueByProperty(object, property) {
    let value;
    const properties = Object.getOwnPropertyNames(object);
    properties.forEach((propertyItem) => {
      if (propertyItem === property) {
        value = object[propertyItem];
      }
    });
    return value;
  }

  isValid(formControlName?) {

    if (this.fieldObj.name === 'typePerson') {
      // this.setPacking();
      // this.setValueField('packing', 'slctPacking', this.selectOptions1);
     }
    if (this.fieldObj.name === 'contractorType') {
      // this.setPacking();
     }

    if (formControlName) {
      // console.log('formControlNameEntro: ', formControlName);
      const validateAgeResult = validateAge(this.form.controls[formControlName]);

      if (validateAgeResult) {
        this.fieldObj.valid = false;
        // this.valid;
      } else {
        this.fieldObj.valid = true;
        // this.valid = true;
      }

    } else {
      if (this.fieldObj.name === 'stateOfBirth') {
        const value = this.form.controls.stateOfBirth.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'city') {
        const value = this.form.controls.city.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'formatwoStateOfBirth') {
        const value = this.form.controls.formatwoStateOfBirth.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'beneficiaryStateM') {
        const value = this.form.controls.beneficiaryStateM.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'beneficiaryState') {
        const value = this.form.controls.beneficiaryState.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'stateOfBirthS') {
        const value = this.form.controls.stateOfBirthS.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'stateM') {
        const value = this.form.controls.stateM.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'stateS') {
        const value = this.form.controls.stateS.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'state') {
        const value = this.form.controls.state.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'formatwoCity') {
        const value = this.form.controls.formatwoCity.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'beneficiaryCityF') {
        const value = this.form.controls.beneficiaryCityF.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'beneficiaryCityM') {
        const value = this.form.controls.beneficiaryCityM.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'beneficiaryCity') {
        const value = this.form.controls.beneficiaryCity.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else if (this.fieldObj.name === 'cityS') {
        const value = this.form.controls.cityS.value;
        if ( value ) {
          this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        } else {
          this.fieldObj.valid = false;
        }
      } else {
        this.fieldObj.valid = this.form.controls[this.fieldObj.name].valid;
        if (this.autocompleteOptions.length > 0 && this.fieldObj.type === 'autocomplete') {
          const searchResult =  this.autocompleteOptions.filter(
            autoCompleteOpt => autoCompleteOpt.name === this.form.controls[this.fieldObj.name].value)[0];
          if (searchResult) {
            this.fieldObj.valid = true;
          } else {
            this.fieldObj.valid = false;
          }
        }
      }
      // console.log('this.fieldObj.valid from isValid: ', this.fieldObj.valid);
      // console.log('this.form.controls[this.fieldObj.name].valid: ', this.form.controls[this.fieldObj.name].valid);
    }

    if ( this.fieldObj.name === 'beneficiaryBirthDate' ) {
      const validateDate = DateValidator(this.form.controls.beneficiaryBirthDate);
      if (validateDate) {
        this.fieldObj.valid = false;
      } else {
        this.fieldObj.valid = true;
      }
    } else if ( this.fieldObj.name === 'beneficiaryConstitutionDate' ) {
      const validateDate = DateValidator(this.form.controls.beneficiaryConstitutionDate);
      if (validateDate) {
        this.fieldObj.valid = false;
      } else {
        this.fieldObj.valid = true;
      }
    } else if ( this.fieldObj.name === 'beneficiaryConstitutionDateF' ) {
      const validateDate = DateValidator(this.form.controls.beneficiaryConstitutionDateF);
      if (validateDate) {
        this.fieldObj.valid = false;
      } else {
        this.fieldObj.valid = true;
      }
    }
  }

  registerCustomIcons() {
    this.matIconRegistry.addSvgIcon(
      'calendar-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/utility-3_calendar_16p_HVR.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'calendar-icon-clicked',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/utility-3_calendar_16p.svg')
    );
  }

  checkValue(value) {
    let currentValue: any;
    let defaultValue: any;
    if ( this.form.controls[this.fieldObj.name] ) {
      currentValue = this.form.controls[this.fieldObj.name].value;
    }
    if ( this.fieldObj.value ) {
      defaultValue = this.fieldObj.value;
    }
    let result: boolean;
    if (currentValue) {
      if (currentValue === value) {
        result = true;
      } else {
        result = false;
      }
    } else if (defaultValue) {
      if (defaultValue === value) {
        result = true;
      } else {
        result = false;
      }
    }
    // // console.log('result ---> ', result);
    return result;
  }

  checkState() {
    const status = this.form.controls[this.fieldObj.name].status;
    let result = false;
    if (status === 'DISABLED') {
      result = true;
    }
    return result;
  }

  checkState2(acceso: boolean) {
    const status = this.form.controls[this.fieldObj.name].status;
    let result = false;
    if (status === 'DISABLED' && acceso === true) {
      result = true;
    } else {
      result = acceso;
    }
    return result;
  }

  calculateRFC() {
    let apellidoPaterno;
    let apellidoMaterno;
    let nombre;
    let date;
    let fechaNacimiento;

    if (this.fieldObj.name === 'rfc') {
      apellidoPaterno = this.form.controls.fatherLastName.value;
      apellidoMaterno = this.form.controls.motherLastName.value;
      nombre = this.form.controls.name.value;
      date = this.form.controls.birthDate.value;
      fechaNacimiento = transformDate(date, 'YYYY/MM/DD');

    } else if (this.fieldObj.name === 'rfcS') {
      apellidoPaterno = this.form.controls.fatherLastNameS.value;
      apellidoMaterno = this.form.controls.motherLastNameS.value;
      nombre = this.form.controls.nameS.value;
      date = this.form.controls.birthDateS.value;
      fechaNacimiento = transformDate(date, 'YYYY/MM/DD');
    } else if (this.fieldObj.name === 'formatwoRfc') {
      apellidoPaterno = this.form.controls.formatwoFatherLastName.value;
      apellidoMaterno = this.form.controls.formatwoMotherLastName.value;
      nombre = this.form.controls.formatwoName.value;
      date = this.form.controls.formatwoBirthDate.value;
      fechaNacimiento = transformDate(date, 'YYYY/MM/DD');
    }

    const calculatedRFC = calculateRFC(apellidoPaterno, apellidoMaterno, nombre, fechaNacimiento);
    // // // console.log('calculatedRFC: ', calculatedRFC);
    return calculatedRFC;
  }

  setCalculatedRFC(calculatedRFC) {
    if (this.fieldObj.name === 'rfc') {
      this.setValueField('rfc', 'txtRFC', calculatedRFC);
    } else if (this.fieldObj.name === 'rfcS') {
      this.setValueField('rfcS', 'txtRFCS', calculatedRFC);
    } else if (this.fieldObj.name === 'formatwoRfc') {
      this.setValueField('formatwoRfc', 'txtFormatwoRFC', calculatedRFC);
    }
  }

  setAddress(sepoMexResponse: SepomexObj) {
    const colonia = correctFieldValue(sepoMexResponse.extension.settlement);
    const municipio = correctFieldValue(sepoMexResponse.extension.townHall);
    const estado = correctFieldValue(sepoMexResponse.stateDescription);

    if (this.fieldObj.name === 'zipCode') {
      this.setValueField('suburb', 'txtSuburb', colonia);
      this.setValueField('municipality', 'txtMunicipality', municipio);
      this.setValueField('state', 'txtState', estado);

    } else if (this.fieldObj.name === 'zipCodeS') {
      this.setValueField('suburbS', 'txtSuburbS', colonia);
      this.setValueField('municipalityS', 'txtMunicipalityS', municipio);
      this.setValueField('stateS', 'txtStateS', estado);

    } else if (this.fieldObj.name === 'zipCodeM') {
      this.setValueField('suburbM', 'txtSuburbM', colonia);
      this.setValueField('municipalityM', 'txtMunicipalityM', municipio);
      this.setValueField('stateM', 'txtStateM', estado);
    }
  }

  setValueField(formControlName, htmlID, value) {
    const el = document.getElementById(htmlID);
    el.setAttribute('value', value);
    this.form.controls[formControlName].setValue(value);
  }

  getStyle(style: string): any {
    const obj: { [k: string]: any } = {};
    const resultSplit = style.split(':');

    // // // console.log('resultSplit: ', resultSplit);
    obj[resultSplit[0]] = resultSplit[1];

    // // // console.log('obj: ', obj);
    return obj;
  }

  setFunds() {
    if (this.form.controls.currency ) {
      const currency = this.form.controls.currency.value;
      if (currency === 'usd') {
        this.setValueField('variableSaving', 'txtVariableSaving', 0);
        this.setValueField('variableRetirement', 'txtVariableRetirement', 0);
        this.setValueField('variableFunds', 'txtVariableFunds', 0);
      }
    }
    if ( this.form.controls.packing ) {
      const packing = this.form.controls.packing.value;
      if (packing !== '4') {
        this.setValueField('fixedSaving', 'txtFixedSaving', 0);
        this.setValueField('fixedRetirement', 'txtFixedRetirement', 0);
        this.setValueField('variableSaving', 'txtVariableSaving', 0);
        this.setValueField('variableRetirement', 'txtVariableRetirement', 0);
      }
    }
  }

  setPacking() {
    const typePerson = this.form.controls.typePerson.value;
    const contractorType = this.form.controls.contractorType.value;

    if (typePerson !== 'morPerson') {
        // quitar elemento
        if (contractorType === false) {
          let el = document.getElementById('slctPacking');
          // this.form.controls.packing.reset();
          // this.setValueField('packing', 'slctPacking', 'selectOptions1');
          this.getOptionsDefine('packingdos', 'IPRE', 'select-1', el);
          // getOptionsDefine(sourceID , source, sourceStructure , type , el: Element )
        } else {
           let el = document.getElementById('slctPacking');
           // this.form.controls.packing.reset();
           this.getOptionsDefine('packing', 'IPRE', 'select-1', el);

        }
      } else {
          // quitar elemento
          let el = document.getElementById('slctPacking');
          // this.form.controls.packing.reset('selectOptions1', []);
          this.getOptionsDefine('packingdos', 'IPRE', 'select-1', el);

     }
  }

  closeModal(modalID: string) {
    this.modalService.close(modalID);
  }

  executeOperation(delegateOperation: string) {
    if (delegateOperation === 'closeModal') {
      this.modalService.close(this.modalID);
    }
  }

  getOptionsDefine(sourceID , source , type , el: Element ) {
    let options = [];
    this.selectOptions1 = [];
    // this.form.controls.slctPacking.reset(el);
    // this.selectOptions1 = null;
    const sourceStructure = ['id', 'name', 'code'];
    this.applicationService.getCatalogById(sourceID, source)
      .subscribe((results) => {
        options = results;
       //  // console.log('packing: results ', results);
        if (options !== undefined) {
          options.forEach((selectItem) => {
            if (type === 'select-1') {
              this.selectOptions1.push(this.constructSelectOption(selectItem, sourceStructure));
            }
          });
          // console.log('EntroselectOptions: ', this.selectOptions1);

        }
      });
    }

  onKeyDownRadio(event, nextElementId) {
    if (event.keyCode === 9) { // tab clicked
      let el = document.getElementById(nextElementId);
      if (el !== null) {
        setTimeout(() => {
          el.focus();
        }, 0);
      } /*else {
        el = document.getElementById('radioMotobickeQuestion0');
        setTimeout(() => {
          el.focus();
        }, 0);
      }*/
    }
  }

  getDataPaymentMit(bine) {
    console.log('getDataPaymentMit --> ');
    console.log(bine);
    const infLimit = 'infLimit';
    const supLimit = 'supLimit';
    const txtBank = 'txtBank';
    const bankDescription = 'bankDescription';
    this.applicationService.getCatalogById('bankBienes', 'IPRE')
      .subscribe((results) => {
        results.forEach((bank) => {
          if (bine >= Number(bank[infLimit]) && bine <= Number(bank[supLimit])) {
            this.form.controls[txtBank].setValue(bank[bankDescription]);
            const element = document.getElementById('txtBank');
            element.setAttribute('value', bank[bankDescription]);
          }
        });
      });
  }

  validateIntegerDecimals(value) {
    if ( value ) {
      let valid = true;
      if (value.indexOf('.') !== -1) {
        const array = value.split('.', 2);
        if ( array[0].toString().length > 10 ) {
          valid = false;
        } else if ( array[1].toString().length > 2 ) {
          valid = false;
        }
        return valid;
      } else {
        valid = false;
        return valid;
      }
    }
  }

  onClickRadioButton(value) {
    console.log('Entro a onClickRadioButton: ');
    if ( this.fieldObj.name === 'beneficiaryType' ) {
      this.executeAction.emit(value);
    }
  }

  onClickFile() {
    document.getElementById(this.fieldObj.idHtml).click();
  }
}


