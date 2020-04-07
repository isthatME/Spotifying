import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist2.service';
@Component({
  selector: 'app-playlist2',
  templateUrl: './playlist2.component.html',
  styleUrls: ['./playlist2.component.css']
})
export class Playlist2Component implements OnInit {
  playlist: PlaylistService;
  songs: string[] = []
  singerName: string = ''
  albumName: string = ''
  constructor() { 
    this.playlist = new PlaylistService()
  }

  ngOnInit(): void {
    this.songs = this.playlist.getPlaylist()
    this.singerName = this.playlist.getSingerNamer()
    this.albumName = this.playlist.getAlbumsName()
  }

}