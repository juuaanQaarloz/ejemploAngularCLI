import {Component, Input, OnInit} from '@angular/core';
import {Process} from '../../models/process';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {
  @Input() processObj: Process;
  @Input() form: FormGroup;
  totalSteps = 0;

  constructor() { }

  ngOnInit() {
    this.totalSteps = this.processObj.steps.length;
    // console.log('process: ', this.processObj);
  }
}
