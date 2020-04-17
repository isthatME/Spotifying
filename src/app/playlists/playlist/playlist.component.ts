import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { Playlist } from '../playlists';
import { ActivatedRoute } from '@angular/router';
import { Music } from '../music';
declare var $: any

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  playlist: Playlist;
  songs: any;
  path: string;
  playlistIndex: any;
  constructor(private pl: PlaylistService,private router: ActivatedRoute) { }
  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id')
    this.playlistIndex = id
    this.playlist = this.pl.getPlaylistById(id)
    this.songs = this.pl.getMusic(id)[this.playlistIndex]
    this.path = this.songs.map(e => e.path)
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