import { map, filter } from 'rxjs/operators';
import { Playlist } from './../playlists';
import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../all-playlists/playlist.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  playlistName: any;
  playlistSearched: any;
  playlistNameSelected: any = null
  index: any = null
  playlistSelected: any;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getPlaylistName().subscribe((data: any) => {
      this.playlistName = data.map(e => e.name)
    })
  }
  onEnter() {
    // return and object with all playlist 
    this.playlistService.getPlaylist().subscribe((data: any) => {
      // filter an array of music
      this.playlistSearched = data.map(e => e.music.map(e => e.name))
      console.log(this.playlistSearched)
      //  get all playlist 
      // this.playlistSearched = data.map(e => e.music)     
    })
  }












  getPlaylistSelected() {
    // this.playlistService.getPlaylistName().subscribe((data: any) => {
    //   this.playlistSelected = data.map(e => e.playlist
    //     .filter(e => e.name == this.playlistNameSelected)
    //     .map(e => e.music
    //     .map(e => e.name)))
    //   console.log(this.playlistSelected)
    // })

  }
  getValue(event: any) {
    this.playlistNameSelected = event.target.value
  }

  deleteSong() {
    
  }
}
