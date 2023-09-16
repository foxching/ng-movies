import { TestBed } from '@angular/core/testing';

import { GlobalErrorHander } from './global-error-handler.service';

describe('GlobalErrorHandlerService', () => {
  let service: GlobalErrorHander;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorHander);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
