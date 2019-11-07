import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ApplicationService} from '../../core/services';
import {Occupation} from '../../models';
import {ModalService} from '../custom-modal';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() items: Array<any>;
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;
  @Output() changePage = new EventEmitter<any>(true);

  @Input() modalID: string;

  pager: any = {};

  constructor(public appService: ApplicationService,
              private modalService: ModalService) { }

  ngOnInit() {
    // set page if items array isn't empty
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  private setPage(page: number) {
    // get new pager object for specified page

    // get new page of items from items array
    const pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // call change page function in parent component
    this.changePage.emit(pageOfItems);
  }

  setOccupation(selectedOccupation: Occupation) {
    // console.log('selectedOccupation... ', selectedOccupation);
    this.appService.setSelectedOccupation(selectedOccupation,);
    this.closeModal(this.modalID);

  }

  closeModal(modalID: string) {
    this.items = [];
    this.modalService.close(modalID);
  }

}
