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
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
