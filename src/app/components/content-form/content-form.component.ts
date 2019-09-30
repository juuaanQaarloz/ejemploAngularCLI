import {Component, Input, OnInit} from '@angular/core';
import {ContentInterface} from '../../models/content-interface';
import {FormGroup} from '@angular/forms';
import {element} from 'protractor';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {
  @Input() contentObj: ContentInterface;
  @Input() form: FormGroup;
  payLoad = '';

  constructor() { }

  ngOnInit() {
    console.log('content: ', this.contentObj);
    this.orderFields();
    this.testFunction();
    let meuArray = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}];
    /*separo meu array em grupos de 3 chaves*/
    console.log(this.separar(meuArray, 4));
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.form.value);
  }
  testFunction() {
    let array = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}];
    let aux = 0;
    for (let i = 0; i < array.length; i++) {
      if ((i + 1) % 4 === 0) {
        aux = aux + 1;
      }
    }
    console.log('aux: ', aux);
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

    console.log('resultado.length: ', resultado.length);
    console.log('grupo: ', grupo);
    return resultado;
  }

  orderFields() {
    this.contentObj.fields.sort((a, b) => a.orderAppearance - b.orderAppearance);
  }
}
