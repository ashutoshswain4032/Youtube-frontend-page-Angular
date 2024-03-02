import { TestBed } from '@angular/core/testing';

import { YoutubeHomeService } from './youtube-home.service';

describe('YoutubeHomeService', () => {
  let service: YoutubeHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
