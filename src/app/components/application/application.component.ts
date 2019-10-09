import {Component, OnInit} from '@angular/core';
import {MockApplication} from '../../core/mock/mock-data';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../custom-modal';
import {ApplicationService, AuthService, StorageService} from '../../core/services';

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
}
