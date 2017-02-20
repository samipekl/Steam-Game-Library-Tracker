/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IGDBService } from './igdb.service';

describe('IGDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IGDBService]
    });
  });

  it('should ...', inject([IGDBService], (service: IGDBService) => {
    expect(service).toBeTruthy();
  }));
});
