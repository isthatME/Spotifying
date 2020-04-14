import { Music } from './../music';
import { Injectable } from '@angular/core';
import { Playlist } from '../playlists';
import { PLAYLIST } from '../playlist1-mock';

@Injectable({
  providedIn: 'root'
})
export class Playlist1Service {

  constructor() {

  }
  getPlaylist(): Playlist[] {
    return PLAYLIST;
  }
}
