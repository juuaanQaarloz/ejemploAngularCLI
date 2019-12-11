import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit {
  showBanner = true;

  constructor() { }

  ngOnInit() {
  }

}
