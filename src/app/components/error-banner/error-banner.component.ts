import {Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../core/services';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit {
  showBanner = true;
  message = 'Please check the information below';

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
  }

  getErrorStatus() {
  }

}
