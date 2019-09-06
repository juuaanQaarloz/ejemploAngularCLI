import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  resizeHeaderHeight = false;
  headerHeight = 70;
  constructor() { }

  ngOnInit() {
  }

  resizeHeader(scrollOffset) {
    if (scrollOffset > 0) {
      this.resizeHeaderHeight = true;
      this.headerHeight = 50;
    } else {
      this.resizeHeaderHeight = false;
      this.headerHeight = 70;
    }
  }
}
