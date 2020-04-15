import { Component, OnInit } from '@angular/core';
import { Playlist1Service } from './playlist1.service';
import { Howl } from 'howler';
import { Music } from '../music';

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
    this.albumName = this.sng[0].name;
  }
  song = new Audio()
  currentSong = 0;
  playSong() {
    this.song.src = this.path[this.currentSong]
    this.song.play()
  }
  playAndPause() {
    if(this.song.paused){
      this.song.play()
    }else{
      this.song.pause()
    }
  }
  next(){
    this.currentSong++
    if(this.currentSong > this.path.length){
      this.currentSong = 0
    }
    this.playSong()
  }
}