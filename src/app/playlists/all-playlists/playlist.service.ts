import { Playlist } from './../playlists';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  // filtra musicas da playlist de indice 1 (final da query) do usuário 0 
  //http://localhost:3000/users/0/playlist?playlistId=1

  //filtra playlists do usuario 0
  //http://localhost:3000/users/0/playlistt

  private readonly API = `${environment.API}` 


  constructor(private http: HttpClient) { }
  
  getPlaylist(){
    return this.http.get<Playlist[]>(`${this.API}playlists`)
  }

  getAllSongFromAPlaylist(playlistIndex: any){
    return this.http.get<any>(`${this.API}users/0/playlist?playlistId=${playlistIndex}`)
  }
  getPlaylistName() {
    return this.http.get<any>(`${this.API}users/0/playlistt`)
  }



}
