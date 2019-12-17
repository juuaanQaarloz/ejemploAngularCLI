import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../../../models';
import {ApplicationService} from '../../../core/services';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {
  @Input() content: Content;
  title = 'Beneficios adicionales';
  columnsNames = [
    'Contratar',
    'Descripción',
    'Detalle',
  ];
  style = 'even-coverage';
  styleClass = 'item-row-coverage';

  fields = ['f1', 'f2', 'f3'];

  constructor(public applicationService: ApplicationService) { }

  ngOnInit() {
  }


}
