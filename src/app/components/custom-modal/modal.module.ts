import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomModalComponent } from './custom-modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomModalComponent],
  exports: [CustomModalComponent]
})
export class ModalModule { }
