import {Component, Input, OnInit} from '@angular/core';
import {Step} from '../../models/step';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../core/services';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css']
})
export class StepFormComponent implements OnInit {
  @Input() stepObj: Step;
  @Input() form: FormGroup;
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() index: number;
  accordionExpanded: boolean;
  renderCondition;
  completed = false;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    // console.log('step: ', this.stepObj);
    this.applicationService.currentValue.subscribe(value => {
      if (this.index === value) {
        if (this.index === 0) {
          this.accordionExpanded = false;
        } else {
          this.accordionExpanded = true;
        }
      } else {
        this.accordionExpanded = false;
      }
      // console.log('from child', this.accordionExpanded);
    });

    if (this.stepObj.renderConditions) {
      // console.log('renderConditions: ', this.applicationService.getRenderConditions(this.stepObj.renderConditions));
      this.renderCondition = this.applicationService.getRenderConditions(this.stepObj.renderConditions);
      // console.log('this.renderCondition[0][1]: ', this.renderCondition[0][1]);
      // this.applicationService.getRenderConditionsTwin(this.stepObj.renderConditions);
      this.form.controls[this.renderCondition[0][1]].valueChanges.subscribe(() => {
        // console.log('value: ', value);
        this.stepObj.show = this.applicationService.evaluateRenderCondition(this.renderCondition[0]);
        // console.log('show: ', this.stepObj.show);
      });
    }
  }

  toggleAccordion() {
    // console.log('before: ', this.accordionExpanded);
    this.accordionExpanded = this.accordionExpanded ? false : true;
    // console.log('after: ', this.accordionExpanded);
  }

  completeStep() {
    this.completed = !this.completed;
    this.accordionExpanded = false;
    this.applicationService.changeValue(this.index + 1);
  }

}
