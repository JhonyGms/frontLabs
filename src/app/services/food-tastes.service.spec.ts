import { TestBed } from '@angular/core/testing';

import { FoodTastesService } from './food-tastes.service';

describe('FoodTastesService', () => {
  let service: FoodTastesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodTastesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
