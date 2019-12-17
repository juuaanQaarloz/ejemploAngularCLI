import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../../../models';
import {ApplicationService} from '../../../core/services';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {
  @Input() content: Content;
  formGroup: FormGroup;
  title = 'Beneficios adicionales';
  columnsNames = [
    'Contratar',
    'Descripción',
    'Detalle',
  ];
  style = 'even-coverage';
  styleClass = 'item-row-coverage';

  constructor(public applicationService: ApplicationService) { }

  ngOnInit() {
    this.formGroup = this.applicationService.getFormGroup();
  }
}
