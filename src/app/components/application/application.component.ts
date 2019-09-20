import {Component, OnInit} from '@angular/core';
import {MockApplication} from '../../mock/mock-data';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  applicationObj = MockApplication;
  formGroup: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formGroup = this.toFormGroup();
  }

  toFormGroup() {
    const group: any = {};
    this.applicationObj.sections.forEach(section => {
      if (section.content.fields) {
        section.content.fields.forEach(field => {
          group[field.name] = field.required ? new FormControl(field.value || '', Validators.required)
            : new FormControl(field.value || '');
        });
      } else {
        if (section.content.process) {
          section.content.process.steps.forEach(step => {
            step.content.fields.forEach(field => {
              group[field.name] = field.required ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
            });
          });
        }
      }
    });
    return new FormGroup(group);
  }
}
