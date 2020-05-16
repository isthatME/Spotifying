import { AuthService } from 'src/app/shared/auth.service';
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
  currentUser: any
  constructor(
    private pl: PlaylistService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.pl.getPlaylist().subscribe((data: any) => {
      this.playlist$ = data      
    })
    this.currentUser = localStorage.getItem('name')
  }

}