import {Component, Input, OnInit} from '@angular/core';
import {ProcessInterface} from '../../models/process-interface';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../services/application.service';

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {
  @Input() processObj: ProcessInterface;
  @Input() form: FormGroup;
  totalSteps = 0;

  constructor() { }

  ngOnInit() {
    this.totalSteps = this.processObj.steps.length;
    console.log('process: ', this.processObj);
  }
}
