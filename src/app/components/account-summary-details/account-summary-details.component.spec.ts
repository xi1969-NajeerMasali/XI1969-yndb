import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryDetailsComponent } from './account-summary-details.component';

describe('AccountSummaryDetailsComponent', () => {
  let component: AccountSummaryDetailsComponent;
  let fixture: ComponentFixture<AccountSummaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSummaryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSummaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
