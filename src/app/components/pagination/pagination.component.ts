import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PagerService} from '../../core/services/pager.service';
import {ApplicationService} from '../../core/services';
import {Occupation} from '../../models';
import {ModalService} from '../custom-modal';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() items: any[];
  @Input() modalID;
  @Input() form: FormGroup;
  @Output() cleanResult = new EventEmitter<boolean>();

  // array of all items to be paged
  allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(public pagerService: PagerService,
              public appService: ApplicationService,
              public modalService: ModalService) {}

  ngOnInit() {
    this.allItems = this.items;
    // // console.log('allItems.length: ', this.allItems.length);
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  setOccupation(selectedOccupation: Occupation) {
    // // // console.log('selectedOccupation... ', selectedOccupation);
    this.appService.setSelectedOccupation(selectedOccupation);
    this.closeModal(this.modalID);
  }

  closeModal(modalID: string) {
    console.log('onCloseModal');
    // cleans searchOccupation field
    const elem: Element = document.getElementById('txtSearchOccupation');
    elem.setAttribute('value', '');
    this.form.controls.searchOccupation.setValue('');
    // cleans foundOccupation results
    this.pagedItems = [];
    this.allItems = [];
    this.cleanResult.emit(true);
    // close modal
    this.modalService.close(modalID);
  }

}
