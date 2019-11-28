import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Coverage} from '../../models/coverage-model/coverage';
import {Beneficiary} from '../../models/beneficiary-model';
import {Agent} from '../../models/agent-model/agent';
import {Disease} from '../../models/diseases/disease';

@Directive({
  selector: '[appStyleCell]'
})
export class StyleCellDirective implements OnInit {
  @Input() appStyleCell: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    if (this.appStyleCell === undefined) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'color',
        '#dcdcdc'
      );
      this.renderer.setStyle(
        this.el.nativeElement,
        'text-align',
        'center'
      );
    }

    const cellType = this.getTypeObject(this.appStyleCell);

    console.log('cellType: ', cellType);

    if (typeof this.appStyleCell === 'string') {
      this.renderer.setStyle(
        this.el.nativeElement,
        'text-align',
        'center');
    }
  }

  isAgent(obj: any): obj is Agent {
    return obj.agentId !== undefined;
  }

  isBeneficiary(obj: any): obj is Beneficiary {
    return obj.beneficiaryId !== undefined;
  }

  isDisease(obj: any): obj is Disease {
    return obj.idDisease !== undefined;
  }

  isCoverage(obj: any): obj is Coverage {
    return obj.coverageId !== undefined;
  }

  getTypeObject(obj: any): string {
    let typeOfResult;
    let type;

    typeOfResult = typeof obj;
    console.log('typeOfResult: ', typeOfResult);

    if (typeOfResult === 'object') {
      if (this.isAgent(obj)) {
        return type = 'agent';
      } else if (this.isBeneficiary(obj)) {
        return type = 'beneficiary';
      } else if (this.isCoverage(obj)) {
        return type = 'coverage';
      } else if (this.isDisease(obj)) {
        return type = 'disease';
      }
    } else {
      type = typeOfResult;
    }

    return type;
  }
}
