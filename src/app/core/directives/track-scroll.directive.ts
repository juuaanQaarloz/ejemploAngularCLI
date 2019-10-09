import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appTrackScroll]'
})
export class TrackScrollDirective {
  @Output() scrollOffset: EventEmitter<any> = new EventEmitter();
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  emitScrollOffset($event: Event) {
    this.scrollOffset.emit(window.pageYOffset);
  }

}
