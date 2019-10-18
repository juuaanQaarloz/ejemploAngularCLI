import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApplicationService, AuthService, StorageService} from '../../core/services';
import {validatorsObjects} from '../../core/validators';
import {Field} from '../../models/field';
import {MockTemplate} from '../../core/mock/mock-template';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  applicationObj =  MockTemplate;
  formGroup: FormGroup;
  resizeHeaderHeight = false;
  iconHome = 'home-icon';
  iconSecurity = 'security-icon';
  bodyText = 'Body Text';
  payLoad = '';
  constructor(private appService: ApplicationService,
              private authService: AuthService,
              private storageService: StorageService
  ) { }

  ngOnInit() {
    this.formGroup = this.toFormGroup();
    this.appService.setFormGroup(this.formGroup);
  }

  toFormGroup() {
    const group: any = {};
    this.applicationObj.sections.forEach(section => {
      section.contents.forEach((contentFromSection) => {
        if (contentFromSection.fields) {
          contentFromSection.fields.forEach(field => {
            group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
          });
        } else {
          if (contentFromSection.process) {
            contentFromSection.process.steps.forEach(step => {
              step.contents.forEach((contentFromStep) => {
                if (contentFromStep.fields) {
                  contentFromStep.fields.forEach(field => {
                    group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
                  });
                } else {
                  if (contentFromStep.contentChildren) {
                    contentFromStep.contentChildren.forEach(contentChild => {
                      if (contentChild.fields) {
                        contentChild.fields.forEach(field => {
                          group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
                        });
                      }
                    });
                  }
                }
              });
            });
          }
        }
      });

    });
    return new FormGroup(group);
  }

  getValidationFunctions(field: Field): any[] {
    let validationFunctions = [];
    validatorsObjects.forEach(validationObject => {
      if (validationObject.nameField === field.name) {
        // console.log('validationObject: ', validationObject);
        validationFunctions = validationObject.validationFunctions;
      }
    });
    if (field.required) {
      validationFunctions.push(Validators.required);
    }
    // console.log('validationFuntions: ', validationFunctions);
    return validationFunctions;
  }

  onScroll(scrollOffset) {
    if (scrollOffset > 0) {
      this.resizeHeaderHeight = true;
    } else {
      this.resizeHeaderHeight = false;
    }
  }

  onMouseMove(event) {
    if (event.type === 'mouseover') {
      if (event.target.id === 'labelHome' || event.target.id === 'iconHome') {
        this.iconHome = 'home-icon-hover';
      } else if (event.target.id === 'labelSecurity' || event.target.id === 'iconSecurity') {
        this.iconSecurity = 'security-icon-hover';
      }
    } else if (event.type === 'mouseout') {
      if (event.target.id === 'labelHome' || event.target.id === 'iconHome') {
        this.iconHome = 'home-icon';
      } else if (event.target.id === 'labelSecurity' || event.target.id === 'iconSecurity') {
        this.iconSecurity = 'security-icon';
      }
    }
    // console.log('event: ', event.target.id);
  }

  logout(): void {
    this.authService.logout().subscribe(
      response => {
        if (response) {
          this.storageService.logout();
        }
      }
    );
  }

  getFormValue() {
    this.payLoad = JSON.stringify(this.formGroup.value);
    console.log(this.formGroup.value);
  }
}
