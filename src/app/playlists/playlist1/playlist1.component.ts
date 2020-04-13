import { Component, OnInit } from '@angular/core';
import { Playlist1Service } from './playlist1.service'
import { Playlist } from '../playlists';

@Component({
  selector: 'app-playlist1',
  templateUrl: './playlist1.component.html',
  styleUrls: ['./playlist1.component.css']
})

export class Playlist1Component implements OnInit {
  songs: any[];
  albumName: string;
  singerName: String;
  sng: any[];
  constructor(private pl:Playlist1Service) { }

  ngOnInit(){
    this.sng = this.pl.getPlaylist()
    this.songs = this.sng[0].music;
    console.log(this.sng)
    this.albumName = this.sng[0].name
  }
}