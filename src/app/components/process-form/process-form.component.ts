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
  accordionExpanded = false;
  totalSteps = 0;
  constructor() { }

  ngOnInit() {
    this.totalSteps = this.processObj.steps.length;
    console.log('process: ', this.processObj);
  }

  toggleAccordion() {
    console.log('before: ', this.accordionExpanded);
    this.accordionExpanded = this.accordionExpanded ? false : true;
    console.log('after: ', this.accordionExpanded);
  }

}
