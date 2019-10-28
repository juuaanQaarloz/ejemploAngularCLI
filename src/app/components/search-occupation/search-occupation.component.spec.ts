import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOccupationComponent } from './search-occupation.component';

describe('SearchOccupationComponent', () => {
  let component: SearchOccupationComponent;
  let fixture: ComponentFixture<SearchOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
