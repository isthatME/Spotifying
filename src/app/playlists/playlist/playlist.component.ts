import { Playlist } from './../playlists';
import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { ActivatedRoute } from '@angular/router';

declare var $: any

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  playlist: Playlist
  songs: any
  path: any;
  playlistIndex: any;
  constructor(private pl: PlaylistService,private router: ActivatedRoute) { }
  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id')
    this.playlistIndex = id
    this.pl.getPlaylistById(id).subscribe((data:Playlist) => {
      this.playlist = data
      this.songs = this.playlist.music
      this.path = this.playlist.music.map(e => e.path)   
    })
  }
  
  song = new Audio()
  currentSong = 0;
  playSong(index: any) {
    document.getElementById(this.playlist.music[this.currentSong].name).style.color = "white";
    this.currentSong = index;
    this.song.src = this.path[this.currentSong]
    console.log(this.path[0])
    $('.play i').removeClass('fas fa-play').addClass('fas fa-pause')
    this.playAndPause()
    document.getElementById(this.songs[this.currentSong].name).style.color = "#1DB954";
      
  }
  playAndPause() {
    if (this.song.paused) {
      $('.play i').removeClass('fas fa-play').addClass('fas fa-pause')
      $('.play-pause-larger i').removeClass('fas fa-play-circle').addClass('fas fa-pause')
      this.song.play(); 
    
    } else {
      $('.play i').removeClass('fas fa-pause').addClass('fas fa-play') 
      $('.play-pause-larger i').removeClass('fas fa-pause').addClass('fas fa-play-circle')
      this.song.pause()
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