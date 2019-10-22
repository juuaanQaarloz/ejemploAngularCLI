import {AfterViewInit, Component, Input, OnDestroy, OnInit, Type} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  animations: [
    trigger(
      'myAnimation',
      [
        state('false', style({transform: 'translateX(100%)', opacity: 0})),
        state('true', style({transform: 'translateX(0)', opacity: 1})),
        transition('false <=> true', animate(200))]
    )]
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() modalType: string;
  animation = false;

  childComponentType: Type<any>;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {}

}
