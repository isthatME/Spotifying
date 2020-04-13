import { Component, OnInit } from '@angular/core';
import { Playlist2Service } from './playlist2.service';
@Component({
  selector: 'app-playlist2',
  templateUrl: './playlist2.component.html',
  styleUrls: ['./playlist2.component.css']
})
export class Playlist2Component implements OnInit {
  songs: any[];
  albumName: string;
  singerName: String;
  sng: any[];
  constructor(private pl:Playlist2Service) { }

  ngOnInit(): void {
    this.sng = this.pl.getPlaylist()
    this.songs = this.sng[1].music;
    console.log(this.sng)
    this.albumName = this.sng[1].name
  }
}