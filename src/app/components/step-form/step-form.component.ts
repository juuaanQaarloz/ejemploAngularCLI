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
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() index: number;
  accordionExpanded = false;
  completed = false;

  constructor() { }

  ngOnInit() {
    console.log('step: ', this.stepObj);
  }

  toggleAccordion() {
    //console.log('before: ', this.accordionExpanded);
    this.accordionExpanded = this.accordionExpanded ? false : true;
    //console.log('after: ', this.accordionExpanded);
  }

  completeStep() {
    this.completed = !this.completed;
    this.accordionExpanded = false;
  }

}
