import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ApplicationService} from '../../core/services';
import {SearchOccupationOperationsM} from '../../core/mock/mock-operations';
import {Field, Occupation} from '../../models';
import {ModalService} from '../custom-modal';

const FIELDS: Field[] = [
  {
    id: 'field-132',
    idHtml: 'txtSearchOccupation',
    name: 'searchOccupation',
    label: 'Criterio de búsqueda',
    orderAppearance: 1,
    type: 'text',
    required: true,
    placeholder: 'Criterio de búsqueda',
    length: '',
    minValue: 0,
    maxValue: 0,
    pattern: '',
    source: 'IPRE',
    sourceID: 'occupations',
    sourceStructure: ['id', 'specificOccupationName', 'specificOccupationAlias', 'specificOccupationCode', 'companyName',
                      'ocupationZipCode', 'occupationDetails', 'occupationIncome'],
    style: '',
    styleClass: '',
    styleClassError: '',
    message: 'El Criterio de Búsqueda es obligatorio. ' +
      ' No puede contener más de 3 letras o números iguales de forma consecutiva. ' +
      ' No se permiten caracteres especiales.',
    messageClass: '',
    messageError: '', // new
    messageErrorClass: '', // new
    renderConditions: '',
    enableConditions: '',
    requiredConditions: '',
    entity: '',
    entityField: '',
    value: ''
  }
];

@Component({
  selector: 'app-search-occupation',
  templateUrl: './search-occupation.component.html',
  styleUrls: ['./search-occupation.component.css']
})
export class SearchOccupationComponent implements OnInit {
  @Input() modalID: string;
  form: FormGroup;
  content = {
    id: 'content-2.20',
    idParent: 'step-2',
    parentType: 'Step',
    idHtml: 'app-content-form-2.20',
    fields: FIELDS,
    operations: SearchOccupationOperationsM,
    showContent: false,
    styleClass: 'modal-type',
    renderConditions: '',
    contentType: 'looseFields'
  };

  foundOccupations: Occupation[] = [];
  tableTitle = 'Resultados de Búsqueda de Ocupación';
  columnsNames = ['Ocupación ID',
    'Nombre de la Ocupación',
    'Alias de la Ocupación'
  ];
  notResultsFound = false;

  constructor(public appService: ApplicationService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.form = this.appService.createNewFormGroup(this.content.fields);
  }

  executeOperation(operation) {
    if (operation === 'searchOccupationM') {
      this.searchOccupation(this.getKeyWord());
    }
  }

  getKeyWord() {
    return this.form.controls.searchOccupation.value;
  }

  searchOccupation(keyWord: string) {
    // console.log('buscando ocupacion...', keyWord);
    this.foundOccupations = [];
    this.appService.getCatalogById(FIELDS[0].sourceID, FIELDS[0].source).subscribe((occupations: Occupation[]) => {
      occupations.forEach((occupation) => {
        if (occupation.specificOccupationName.includes(keyWord.toUpperCase())) {
          this.foundOccupations.push(occupation);
        }
      });
      if (this.foundOccupations.length === 0) {
        this.notResultsFound = true;
      } else {
        this.notResultsFound =  false;
      }
    });
  }

  setOccupation(selectedOccupation: Occupation) {
    // console.log('selectedOccupation... ', selectedOccupation);
    this.appService.setSelectedOccupation(selectedOccupation,);
    this.closeModal(this.modalID);

  }

  closeModal(modalID: string) {
    this.foundOccupations = [];
    this.modalService.close(modalID);
  }

}
