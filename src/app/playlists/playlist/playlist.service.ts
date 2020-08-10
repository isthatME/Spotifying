import { Injectable } from '@angular/core';
import { Playlist } from '../playlists';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../music';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  readonly URL = 'http://localhost:3000'
  
  constructor(private http: HttpClient) {

  }

  getAllPlaylists(): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.URL}/playlist`)    
  }
  getAllSongs(): Observable<Music> {
    return this.http.get<Music>(`${this.URL}/musics`)
  }

}