import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StepInterface} from '../../models/step-interface';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../services/application.service';

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
  accordionExpanded: boolean;
  completed = false;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    console.log('step: ', this.stepObj);
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
      console.log('from child', this.accordionExpanded);
    });
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
