import {ApplicationService} from '../services';
import {FormControl} from '@angular/forms';

export class FormValidators {
  constructor(
    private appService: ApplicationService
  ) {}

   static beneficiaryParticipation(control: FormControl) {
    if (control.value == null || control.value.length <= 0) {
      return {required: false, errorMsg: ''};
    }
    return null;
  }
}
