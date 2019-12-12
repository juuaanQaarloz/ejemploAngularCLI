import {Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../core/services';
import {Error} from '../../models';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit {
  @Input() errors: Error[];

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
  }

  getErrorStatus(errorName) {
    let result = false;
    const statusError = this.appService.getStatusError(errorName);
    // console.log('statuError: ', statusError);
    if (statusError) {
      result = true;
    }
    return result;
  }

}
