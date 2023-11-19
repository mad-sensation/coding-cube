import { TestBed } from '@angular/core/testing';

import { CodingCubeService } from './coding-cube.service';

describe('CodingCubeService', () => {
  let service: CodingCubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodingCubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
