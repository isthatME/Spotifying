import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service'

@Component({
  selector: 'app-playlist1',
  templateUrl: './playlist1.component.html',
  styleUrls: ['./playlist1.component.css']
})

export class Playlist1Component implements OnInit {
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
