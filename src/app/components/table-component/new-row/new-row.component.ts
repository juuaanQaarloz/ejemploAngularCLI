import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../../core/services';
import {Field} from '../../../models';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';

@Component({
  selector: 'app-new-row',
  templateUrl: './new-row.component.html',
  styleUrls: ['./new-row.component.css']
})
export class NewRowComponent implements OnInit {
  fields: Field[];
  drawerTitle: string;
  formGroup: FormGroup;

  constructor(private appService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef) { }

  ngOnInit() {
    if (this.config.data) {
      console.log('config: ', this.config);
      this.fields = this.config.data.fields;
      this.drawerTitle =  this.config.data.drawerTitle;

      this.formGroup = this.appService.createNewFormGroup(this.fields);
    }
    // this.formGroup = this.appService.createNewFormGroup(this.fields);
  }

}
