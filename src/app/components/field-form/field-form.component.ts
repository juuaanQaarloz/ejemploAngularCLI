import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../models/Field';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css']
})
export class FieldFormComponent implements OnInit {
  @Input() field: Field<any>;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
