import { TestBed } from '@angular/core/testing';

import { ErrormessagesService } from './errormessages.service';

describe('ErrormessagesService', () => {
  let service: ErrormessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrormessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
