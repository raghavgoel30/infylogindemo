import { TestBed } from '@angular/core/testing';

import { AddmissionSreviceService } from './addmission-srevice.service';

describe('AddmissionSreviceService', () => {
  let service: AddmissionSreviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmissionSreviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
