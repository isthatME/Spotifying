import { Playlist } from './../playlists';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private readonly API = 'http://localhost:3000' 


  constructor(private http: HttpClient) { }
  
  getPlaylist(){
    return this.http.get<Playlist[]>(`${this.API}/playlist`)
  }

}
