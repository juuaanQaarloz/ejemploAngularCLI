import {Component, Input, OnInit} from '@angular/core';
import {StepInterface} from '../../models/step-interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css']
})
export class StepFormComponent implements OnInit {
  @Input() stepObj: StepInterface;
  @Input() form: FormGroup;
  @Input() index: number;
  accordionExpanded = true;

  constructor() { }

  ngOnInit() {
    console.log('step: ', this.stepObj);
  }

  toggleAccordion() {
    // console.log('before: ', this.accordionExpanded);
    this.accordionExpanded = this.accordionExpanded ? false : true;
    // console.log('after: ', this.accordionExpanded);
  }

}
