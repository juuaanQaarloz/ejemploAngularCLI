import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryItemComponent } from './beneficiary-item.component';

describe('BeneficiaryItemComponent', () => {
  let component: BeneficiaryItemComponent;
  let fixture: ComponentFixture<BeneficiaryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
