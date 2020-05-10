import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // filtra musicas da playlist de indice 1 (final da query) do usuário 0 
  //http://localhost:3000/users/0/playlist?playlistId=1

  //filtra playlists do usuario 0
  //http://localhost:3000/users/0/playlistt

  //filtra a primeira musica da playlist
  //http://localhost:3000/playlist/0

  private readonly API = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }
  getAllSongsFromAPlaylist(playlistName: any) {
    return this.http.get<any>(`${this.API}musics?playlistName=${playlistName}`).pipe(
      tap(e => console.log(e))
    )
  }

  getPlaylistReference() {
    return this.http.get<any>(`${this.API}playlist`)
  }

  delete(songId) {
    return this.http.delete(`${this.API}musics/${songId}`)
  }

  getAllSongsFromAnUser() {
    return this.http.get(`${this.API}musics`)
  }

  createPlaylist(playlist) {
    return this.http.post(`${this.API}playlist`, playlist)
  }

  addSong(song) {
    return this.http.post(`${this.API}musics`, song)
  }
}

