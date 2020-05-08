import { Playlist } from './../playlists';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { take, tap } from 'rxjs/operators';

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

  private readonly API = 'http://localhost:3000/' 


  constructor(private http: HttpClient) { }
  
  getPlaylist(){
    return this.http.get<Playlist[]>(`${this.API}playlists`)
  }
  
  getAllSongsFromAPlaylist(playlistIndex: any){
    return this.http.get<any>(`${this.API}users/0/musics?playlistId=${playlistIndex}`).pipe(
      tap(e => console.log(e))
    )
  }
  
  getPlaylistReference() {
    return this.http.get<any>(`${this.API}playlist`)
  }

  delete(songId) {
    return this.http.delete(`${this.API}musics/${songId}`)
  }

  getAllSongsFromAnUser(){
    return this.http.get(`${this.API}musics`)
  }

  createPlaylist(playlist){
    return this.http.post(`${this.API}playlist`, playlist)
  }

  addSong(song){
    return this.http.post(`${this.API}musics`,song)
  }

}
