import { TestBed } from '@angular/core/testing';

import { YnabService } from './ynab.service';

describe('YnabService', () => {
  let service: YnabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YnabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
