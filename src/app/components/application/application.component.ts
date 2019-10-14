import {Component, OnInit} from '@angular/core';
import {MockApplication} from '../../core/mock/mock-data';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../custom-modal';
import {ApplicationService, AuthService, StorageService} from '../../core/services';
import {validatorsObjects} from '../../core/validators';
import {FieldInterface} from '../../models/field-interface';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  applicationObj = MockApplication;
  formGroup: FormGroup;
  resizeHeaderHeight = false;
  iconHome = 'home-icon';
  iconSecurity = 'security-icon';
  bodyText = 'Body Text';
  payLoad = '';
  constructor(private appService: ApplicationService,
              private authService: AuthService,
              private storageService: StorageService,
              private modalService: ModalService
  ) { }

  ngOnInit() {
    this.formGroup = this.toFormGroup();
  }

  closeModal(modalId: string) {
    this.modalService.close(modalId);
  }

  openModal(modalId: string) {
    this.modalService.open(modalId);
  }

  toFormGroup() {
    const group: any = {};
    this.applicationObj.sections.forEach(section => {
      if (section.content.fields) {
        section.content.fields.forEach(field => {
          group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
        });
      } else {
        if (section.content.process) {
          section.content.process.steps.forEach(step => {
            if (step.content.fields) {
              step.content.fields.forEach(field => {
                group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
              });
            } else {
              if (step.content.contentChildren) {
                step.content.contentChildren.forEach(contentChild => {
                  if (contentChild.fields) {
                    contentChild.fields.forEach(field => {
                      group[field.name] = new FormControl(field.value || '', this.getValidationFunctions(field));
                    });
                  }
                });
              }
            }
          });
        }
      }
    });
    return new FormGroup(group);
  }

  getValidationFunctions(field: FieldInterface): any[] {
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
