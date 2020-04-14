import { Component, OnInit } from '@angular/core';
import { Playlist1Service } from './playlist1.service';
import { Howl } from 'howler';
import { Playlist } from '../playlists';

export interface Track {
  name: string;
  path: any;
}

@Component({
  selector: 'app-playlist1',
  templateUrl: './playlist1.component.html',
  styleUrls: ['./playlist1.component.css']
})

export class Playlist1Component implements OnInit {
  songs: any[];
  path: any[];
  albumName: string;
  sng: any[];
  constructor(private pl: Playlist1Service) { }
  ngOnInit() {
    this.sng = this.pl.getPlaylist()
    this.songs = this.sng[0].music;
    this.path = this.songs.map(e => e.path)
    console.log(this.path)
    this.albumName = this.sng[0].name;
  }
  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  song: string  = ''
  start(path) {
    if(this.player){
      this.player.stop()
    }
    this.player = new Howl({
      src: [`../assets/musics/${path}.mp3`],
      onplay: () => {
        this.isPlaying = true
        this.activeTrack = path
      },
      onend: () => {

      }
    })
    this.player.play()
  }
  togglePlayer(pause) {
    this.isPlaying = !pause
    if(pause) {
      this.player.pause();
    } else { 
      this.player.play();
     }
  }
  next() {

  }
  prev() {

  }
  seek() {

  }
}