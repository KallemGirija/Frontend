import { TestBed } from '@angular/core/testing';

import { SendBirthdayWishesService } from './send-birthday-wishes.service';

describe('SendBirthdayWishesService', () => {
  let service: SendBirthdayWishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendBirthdayWishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
