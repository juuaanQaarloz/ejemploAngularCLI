import {Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../core/services';
import {Error} from '../../models';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit {
  @Input() errors?: Error[];
  @Input() formGroup?: FormGroup;

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
  }

  getErrorStatus(errorName) {
    let result = false;
    const statusError = this.appService.getStatusError(errorName);
    // // console.log('statuError: ', statusError);
    if (statusError) {
      result = true;
    }
    return result;
  }

  getFormStatus() {
    const status = this.formGroup.status;
    if (status) {
      if (status === 'VALID') {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

}
