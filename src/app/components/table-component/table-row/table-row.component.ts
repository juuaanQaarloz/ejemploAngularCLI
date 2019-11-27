import {Component, Input, OnInit} from '@angular/core';
import {determinateEvenOrOdd} from '../../../core/utilities';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() itemRow;
  @Input() index;

  constructor() { }

  ngOnInit() {
    console.log('itemRow: ', this.itemRow);
  }

  determinateEvenOrOdd(num: number) {
    return determinateEvenOrOdd(num);
  }
}
