import { PlaylistService } from './playlist.service';
import { Playlist } from './../playlists';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-allPlaylists',
  templateUrl: './allPlaylists.component.html',
  styleUrls: ['./allPlaylists.component.css']
})
export class AllPlaylistsComponent implements OnInit {
  playlists: Playlist[];
  playlist$: Observable<Playlist[]>;

  constructor(private pl: PlaylistService) { }
  ngOnInit(): void {
    
    this.playlist$ = this.pl.getPlaylist();

  }

}