import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'jw-modal',
  templateUrl: 'custom-modal.component.html',
  styleUrls: ['custom-modal.component.less'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger(
      'myAnimation',
      [
        state('false', style({transform: 'translateX(100%)', opacity: 0})),
        state('true', style({transform: 'translateX(0)', opacity: 1})),
        transition('false <=> true', animate(200))]
    )]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  // @Input() animation: boolean;
  animation = false;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
    this.animation = true;
  }

  // close modal
  close(): void {
    this.animation = false;
    // add time out to be able to the user to see the left -> right animation
    setTimeout(() => {
      this.element.style.display = 'none';
      }, 200);
    // this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
}
