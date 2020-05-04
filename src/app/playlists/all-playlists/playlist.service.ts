import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Playlist } from '../playlists';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private readonly API = `${environment.API}playlists` 

  filteredPlaylist = [] 

  constructor(private http: HttpClient) { }
  
  getPlaylist(){
    return this.http.get<Playlist[]>(this.API)
  }
}
