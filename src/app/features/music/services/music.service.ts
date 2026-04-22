import { Injectable } from '@angular/core';
import { Song } from '../models/music.models';
import { SONGS } from '../constants/music';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  public getFeaturedSong(): Song {
    return <Song>SONGS.find(s => s.isFeatured)
  }
}
