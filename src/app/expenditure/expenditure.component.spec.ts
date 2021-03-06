import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureComponent } from './expenditure.component';

describe('ExpenditureComponent', () => {
  let component: ExpenditureComponent;
  let fixture: ComponentFixture<ExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
