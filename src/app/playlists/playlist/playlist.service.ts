import { Injectable } from '@angular/core';
import { Playlist } from '../playlists';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../music';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  readonly playlistUrl = 'http://localhost:3000/playlists/'
  constructor(private http: HttpClient) {

  }

  getPlaylistById(id: string): Observable<Playlist> {
    return this.http.get<Playlist>(this.playlistUrl + id)
  }

  getMusic(id: string): Observable<Music> {

    return this.http.get<Music>(this.playlistUrl + id)
  
  }

}