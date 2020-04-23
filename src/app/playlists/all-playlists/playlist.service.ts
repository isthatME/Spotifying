import { Injectable } from '@angular/core';
import { Playlist } from '../playlists';
import { PLAYLIST } from '../playlist1-mock';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor() { }
  
  get():Playlist[] {
    return PLAYLIST
  }
}