import { TestBed } from '@angular/core/testing';

import { ExternalClientService } from './external-client.service';

describe('ExternalClientService', () => {
  let service: ExternalClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
