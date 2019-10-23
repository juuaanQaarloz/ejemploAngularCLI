import {Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from '../../../core/services';
import {Beneficiary} from '../../../models';
import {MockContentStep7Process1ContentSection2} from '../../../core/mock/mock-contents';
import {DialogConfig} from '../../dialog/dialog-config';
import {DialogRef} from '../../dialog/dialog-ref';
import {Beneficiarios} from '../../../core/mock/mock-beneficiaries';
import {MockOperations} from '../../../core/mock/mock-operations';
import {Form, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-beneficiary',
  templateUrl: './new-beneficiary.component.html',
  styleUrls: ['./new-beneficiary.component.css']
})
export class NewBeneficiaryComponent implements OnInit {
  // @Input() content: Content;
  content = {
    id: 'content-2.19',
    idParent: 'step-7',
    parentType: 'Step',
    idHtml: 'app-content-form-2.19',
    fields: Beneficiarios,
    operations: MockOperations,
    showContent: false,
    styleClass: 'modal-type',
    renderConditions: '',
    contentType: 'looseFields'
  };
  formGroup: FormGroup;
  // content = MockContentStep7Process1ContentSection2[1];

  constructor(private applicationService: ApplicationService,
              public config: DialogConfig,
              public dialog: DialogRef
  ) {
  }

  ngOnInit() {
    if (this.config.data !== null) {
      console.log('config: ', this.config.data);
      this.setBeneficiaryValues();
    }
    this.formGroup = this.applicationService.createNewFormGroup(this.content.fields);
    console.log('from newBeneficiary formGroup: ', this.formGroup);
  }

  closeDialog() {
    this.cleanFields();
    this.dialog.close();
  }

  setBeneficiaryValues() {
    this.content.fields[1].value = this.config.data.beneficiary.name;
    this.content.fields[2].value = this.config.data.beneficiary.fatherLastName;

  }

  cleanFields() {
    this.content.fields.forEach((field) => {
      console.log('field value before: ', field.value);
      field.value = '';
      console.log('field value after: ', field.value);
    });
  }
}
