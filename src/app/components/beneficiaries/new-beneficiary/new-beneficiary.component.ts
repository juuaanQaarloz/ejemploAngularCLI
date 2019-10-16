import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../custom-modal';

@Component({
  selector: 'app-new-beneficiary',
  templateUrl: './new-beneficiary.component.html',
  styleUrls: ['./new-beneficiary.component.css']
})
export class NewBeneficiaryComponent implements OnInit {
  @Input() modalId: string;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalService.close(this.modalId);
  }

}
