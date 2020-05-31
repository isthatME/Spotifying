import { Injectable } from '@angular/core';
import { Playlist } from '../playlists';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  searchPlaylist(event: any) {
    throw new Error("Method not implemented.");
  }
  readonly playlistUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) {

  }

  getPlaylistById(id: string): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.playlistUrl}/playlists/` + id)
    
  }

}