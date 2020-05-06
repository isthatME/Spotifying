import { Playlist } from './../playlists';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  // filtra musicas da playlist de indice 1 (final da query) do usuário 0 
  //http://localhost:3000/users/0/playlist?playlistId=1

  //filtra playlists do usuario 0
  //http://localhost:3000/users/0/playlistt

  //filtra a primeira musica da playlist
  //http://localhost:3000/playlist/0

  private readonly API = `${environment.API}` 


  constructor(private http: HttpClient) { }
  
  getPlaylist(){
    return this.http.get<Playlist[]>(`${this.API}playlists`)
  }

  getAllSongFromAPlaylist(playlistIndex: any){
    return this.http.get<any>(`${this.API}users/0/playlist?playlistId=${playlistIndex}`)
  }
  getPlaylistReference() {
    return this.http.get<any>(`${this.API}users/0/playlistt`)
  }

  delete(songId) {
    return this.http.delete(`${this.API}playlist/${songId}`)
  }

  // addSong(){
  //   return this.http.post(`${this.API}`)
  // }

}
