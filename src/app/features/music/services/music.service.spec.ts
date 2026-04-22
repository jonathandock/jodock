import { TestBed } from '@angular/core/testing';

import { MusicService } from './music.service';
import { SONGS } from '../constants/music';

const songs = SONGS;

describe('Music', () => {
  let service: MusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GetFeaturedSong', () => {
    it('should return the featured song', () => {
      expect(service.getFeaturedSong()).toEqual(SONGS[0]);
    });
  })
});
