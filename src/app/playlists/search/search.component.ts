import { map } from 'rxjs/operators';
import { Playlist } from './../playlists';
import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { PlaylistService } from '../all-playlists/playlist.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  playlistName: any;
  playlistSearched: any;
  playlistIndexSelected: any = null
  playlistSelected: any;
  playlistIdSelected: any;

  song:any


  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getPlaylistReference().subscribe((data: any) => {
      this.playlistName = data.map(e => e.name)
      this.playlistIdSelected = data.map(e => e.id)      
    })
  }
  onEnter() {
  }

  getPlaylistSelected() {
    this.playlistService.getAllSongFromAPlaylist(this.playlistIndexSelected).subscribe((data: any) => {
      this.playlistSearched = data
      console.log(data.map(e => e.id))
    })

  }
  onChange(event: any) {
    this.playlistIndexSelected = event.target["selectedIndex"] - 1
    this.playlistIdSelected = event.target["selectedIndex"] - 1

    
  }

  onDelete(playlist) {
    this.playlistService.delete(playlist.id)
    .subscribe(
      success => {
        console.log('sucesso ao remover curso')
        this.getPlaylistSelected()        
      },
      error => console.log('erro ao remover curso')
    )

  }
}
