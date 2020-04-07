import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist4.service'

@Component({
  selector: 'app-playlist4',
  templateUrl: './playlist4.component.html',
  styleUrls: ['./playlist4.component.css']
})

export class Playlist4Component implements OnInit {
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