import { Playlist } from './../playlists';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private readonly API = `${environment.API}` 

  filteredPlaylist = [] 

  constructor(private http: HttpClient) { }
  
  getPlaylist(){
    return this.http.get<Playlist[]>(`${this.API}playlists`)
  }
  getPlaylistName() {
    return this.http.get<any>(`${this.API}users`)
  }
}
