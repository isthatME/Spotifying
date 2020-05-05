import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Playlist } from '../playlists';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly API = `${environment.API}playlists` 

  filteredPlaylist = [] 

  constructor(private http: HttpClient) { }  
  
 
}

  