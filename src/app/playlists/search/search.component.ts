import { Playlist } from './../playlists';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../all-playlists/playlist.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  playlistSearched: any;
  playlistName: any
  playlistSelected: any = null

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
      this.playlistService.getPlaylistName().subscribe((data:any) => {
      this.playlistName = data.map(e => e.playlist.map(e => e.name))
      console.log(this.playlistName)
    })
  }

  onEnter() {
    // return and object with all playlist 
    this.playlistService.getPlaylist().subscribe((data: any) => {
      // filter an array of music
      this.playlistSearched = data.map(e => e.music.map(e => e.name))

      //  get all playlist 
      // this.playlistSearched = data.map(e => e.music)
     
    })
  }
  getValue(event: any){
    this.playlistSelected = event.target.value
  }

  

}
