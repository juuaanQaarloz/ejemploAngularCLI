import {Component, Input, OnInit} from '@angular/core';
import {ProcessInterface} from '../../models/process-interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {
  @Input() processObj: ProcessInterface;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log('process: ', this.processObj);
  }

}
