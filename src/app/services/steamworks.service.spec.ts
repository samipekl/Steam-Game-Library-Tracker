/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SteamworksService } from './steamworks.service';

describe('SteamworksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SteamworksService]
    });
  });

  it('should ...', inject([SteamworksService], (service: SteamworksService) => {
    expect(service).toBeTruthy();
  }));
});
