import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditItemTableComponent } from './add-edit-item-table.component';

describe('AddEditItemTableComponent', () => {
  let component: AddEditItemTableComponent;
  let fixture: ComponentFixture<AddEditItemTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditItemTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
