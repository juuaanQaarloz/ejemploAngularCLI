import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../../models/content';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../core/services';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {
  @Input() contentObj: Content;
  @Input() form: FormGroup;
  payLoad = '';

  constructor(public applicationService: ApplicationService) { }

  ngOnInit() {
    // console.log('content style class 2: ', this.contentObj.styleClass);
    // console.log('contentObj', this.contentObj);
    this.orderFields();
    /*this.testFunction();
    let meuArray = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}];*/
    if (this.contentObj.renderConditions) {
      this.applicationService.getConditions(this.contentObj.renderConditions);
      const renderConditions = this.applicationService.getConditions(this.contentObj.renderConditions);
      console.log('renderConditions: ', renderConditions);
      this.form.controls[renderConditions[0][1]].valueChanges.subscribe((value) => {
        console.log('value: ', value);
        this.contentObj.showContent = value;
        this.contentObj.showContent = this.applicationService.evaluateCondition(this.form, renderConditions[0]);
      });
    }
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.form.value);
    // console.log(this.form.value);
  }
  testFunction() {
    let array = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}];
    let aux = 0;
    for (let i = 0; i < array.length; i++) {
      if ((i + 1) % 4 === 0) {
        aux = aux + 1;
      }
    }
    // console.log('aux: ', aux);
  }
  separar(base, maximo) {
    let resultado = [[]];
    let grupo = 0;

    for (let indice = 0; indice < base.length; indice++) {
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
      }

      resultado[grupo].push(base[indice]);

      if ((indice + 1) % maximo === 0) {
        grupo = grupo + 1;
      }
    }

    // console.log('resultado.length: ', resultado.length);
    // console.log('grupo: ', grupo);
    return resultado;
  }

  orderFields() {
    if (this.contentObj.fields) {
      this.contentObj.fields.sort((a, b) => a.orderAppearance - b.orderAppearance);
    }
  }
}
