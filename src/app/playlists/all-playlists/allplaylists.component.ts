import { LoginService } from './../../login/login.service';
import { PlaylistService } from './playlist.service';
import { Playlist } from './../playlists';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allPlaylists',
  templateUrl: './allPlaylists.component.html',
  styleUrls: ['./allPlaylists.component.css']
})
export class AllPlaylistsComponent implements OnInit {
  playlist$: Playlist[];
  currentUser: any;
  playlistSearched: any;
  name: any;
  constructor(
    private pl: PlaylistService,
    private LoginService: LoginService
  ) { }

  ngOnInit(): void {
    this.pl.getPlaylist().subscribe((data: any) => {
      this.playlist$ = data
    })

    // this.currentUser = this.LoginService.currentUser
    // localStorage.setItem('username', this.currentUser.name)
    // console.log(this.currentUser)
  }


}