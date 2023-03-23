import { TestBed } from '@angular/core/testing';

import { TestPaperService } from './test-paper.service';

describe('TestPaperService', () => {
  let service: TestPaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestPaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
