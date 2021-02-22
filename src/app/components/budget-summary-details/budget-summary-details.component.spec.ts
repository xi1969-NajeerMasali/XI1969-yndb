import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSummaryDetailsComponent } from './budget-summary-details.component';

describe('BudgetSummaryDetailsComponent', () => {
  let component: BudgetSummaryDetailsComponent;
  let fixture: ComponentFixture<BudgetSummaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetSummaryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetSummaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
