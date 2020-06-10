import { map } from 'rxjs/operators';
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
  playlist: any;
  songs: any;
  path: any;
  playlistIndex: any;
  currentPlaylist: any;

  constructor(
    private PlaylistService: PlaylistService,
    private router: ActivatedRoute
  ) { }
  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id')
    this.currentPlaylist = localStorage.getItem('currentPlaylist')
    this.playlistIndex = id
    this.PlaylistService.getAllPlaylists().subscribe((data: any) => {
      this.playlist = data.filter(e => e.name == this.currentPlaylist)
      // this.cover = this.playlist[0].cover
      // this.name = this.playlist[0].name
    })
    this.PlaylistService.getAllSongs().subscribe((musics: any) => {
      this.songs = musics.filter(e => e.playlistName == this.currentPlaylist)
      this.path = this.songs.map(e => e.path)
    })
  }

  song = new Audio()
  currentSong = 0;

  playSong(index: any) {
    document.getElementById(this.songs[this.currentSong].name).style.color = "white";
    this.currentSong = index;
    this.song.src = this.path[this.currentSong]
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