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
    // // console.log('step: ', this.stepObj);
    this.applicationService.currentValue.subscribe(value => {
      // // console.log('value: ', value);
      // // console.log('id step: ', this.stepObj.id);
      if (Number(this.stepObj.id) === value) {
        if (Number(this.stepObj.id) === 0) {
          this.accordionExpanded = false;
        } else {
          this.accordionExpanded = true;
        }
      } else {
        this.accordionExpanded = false;
      }
      // // console.log('from child', this.accordionExpanded);
    });

    if (this.stepObj.renderConditions) {
      this.renderCondition = this.applicationService.getConditions(this.stepObj.renderConditions);
      this.stepObj.show = this.applicationService.evaluateCondition(this.form, this.renderCondition[0]);
      this.form.controls[this.renderCondition[0][1]].valueChanges.subscribe(() => {
        this.stepObj.show = this.applicationService.evaluateCondition(this.form, this.renderCondition[0]);
      });
    }
  }

  toggleAccordion() {
    // // console.log('before: ', this.accordionExpanded);
    this.accordionExpanded = this.accordionExpanded ? false : true;
    // // console.log('after: ', this.accordionExpanded);
  }

  completeStep() {
    this.completed = !this.completed;
    this.accordionExpanded = false;
    this.applicationService.changeValue(this.index + 1);
  }
}
