import {Component, Input, OnInit} from '@angular/core';
import {ContentInterface} from '../../models/content-interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {
  @Input() contentObj: ContentInterface;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log('content: ', this.contentObj);
  }

}
