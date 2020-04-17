import { PlaylistService } from './playlist.service';
import { Playlist } from './../playlists';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allPlaylists',
  templateUrl: './allPlaylists.component.html',
  styleUrls: ['./allPlaylists.component.css']
})
export class AllPlaylistsComponent implements OnInit {
  
  playlists: Playlist[];
  constructor(private pl: PlaylistService) { }
  ngOnInit(): void {
    this.playlists = this.pl.get()
  }
}
