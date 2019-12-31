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
    maxValue: 60,
    pattern: '/^(?=.*$)(?=[^A-ZÑ\\s]*[A-ZÑ\\s])(?:([A-ZÑ\\s])\\1?(?!\\1\\1))*$/',
    noAllowedCharactersPattern: '/[^a-zA-ZñÑ\\s]/',
    source: 'IPRE',
    sourceID: 'occupation',
    sourceStructure: ['occupationId', 'name', 'occupationId'],
    /*sourceStructure: ['id', 'specificOccupationName', 'specificOccupationAlias', 'specificOccupationCode', 'companyName',
                      'ocupationZipCode', 'occupationDetails', 'occupationIncome'],*/
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
    console.log('buscando ocupacion...', keyWord);
    this.foundOccupations = [];
    this.appService.getCatalogById(FIELDS[0].sourceID, FIELDS[0].source).subscribe((occupations: Occupation[]) => {
      console.log(occupations);
      occupations.forEach((occupation) => {
        if (occupation.name.includes(keyWord.toUpperCase())) {
          this.foundOccupations.push(occupation);
        }
      });
      console.log(this.foundOccupations.length);
      if (this.foundOccupations.length === 0) {
        this.notResultsFound = true;
      } else {
        this.notResultsFound =  false;
      }
    });
  }

  setOccupation(selectedOccupation: Occupation) {
    // // console.log('selectedOccupation... ', selectedOccupation);
    this.appService.setSelectedOccupation(selectedOccupation,);
    this.closeModal(this.modalID);

  }

  closeModal(modalID: string) {
    this.foundOccupations = [];
    this.modalService.close(modalID);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    // this.pageOfItems = pageOfItems;
  }

}
