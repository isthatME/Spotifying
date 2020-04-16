import { Component, OnInit } from '@angular/core';
import { Playlist2Service } from './playlist2.service';
declare var $: any

@Component({
  selector: 'app-playlist2',
  templateUrl: './playlist2.component.html',
  styleUrls: ['./playlist2.component.css']
})
export class Playlist2Component implements OnInit {
  songs: any[];
  path: any[];
  albumName: string;
  sng: any[];
  constructor(private pl: Playlist2Service) { }
  ngOnInit() {
    this.sng = this.pl.getPlaylist()
    this.songs = this.sng[1].music;
    this.path = this.songs.map(e => e.path)
    this.albumName = this.sng[1].name;
  }
  song = new Audio()
  currentSong = 0;
  playSong(index: any) {
    document.getElementById(this.songs[this.currentSong].name).style.color = "white";
    this.currentSong = index;
    this.song.src = this.path[this.currentSong]
    this.song.play()
    document.getElementById(this.songs[this.currentSong].name).style.color = "#1DB954";
    $(".play img").attr("src","../assets/playerButtons/pause.png")
  }
  
  playAndPause() {
    if (this.song.paused) {
      this.song.play(); 
      $(".play img").attr("src","../assets/playerButtons/pause.png")   
    
    } else {
      this.song.pause()
      $(".play img").attr("src","../assets/playerButtons/play.jpg") 
    }
  }
  next() {
    document.getElementById(this.songs[this.currentSong].name).style.color = "white";
    this.currentSong++
    if (this.currentSong >= this.path.length) {
      this.currentSong = 0
    }
    this.playSong(this.currentSong)
  }
  prev() {
    document.getElementById(this.songs[this.currentSong].name).style.color = "white";
    this.currentSong--
    if (this.currentSong < 0) {
      this.currentSong = this.path.length
    }
    this.playSong(this.currentSong)
  }
}