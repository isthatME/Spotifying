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
  playlist$: Playlist[];

  constructor(private pl: PlaylistService) { }
  ngOnInit(): void {    
    this.pl.getPlaylist().subscribe((data:any) => {
    this.playlist$ = data
    })
  }

}