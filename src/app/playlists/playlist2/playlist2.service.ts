import { Injectable } from '@angular/core';
import { PLAYLIST } from '../playlist1-mock';
import { Playlist } from '../playlists';

@Injectable({
  providedIn: 'root'
})
export class Playlist2Service {

  constructor() { }

  getPlaylist(): Playlist[] {
    return PLAYLIST;
}
}
