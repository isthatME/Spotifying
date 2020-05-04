import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  playlistSearched: any;
  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
  }

  onKeyUp(event) {
    this.searchService.searchPlaylist(event).subscribe((data: any) => {
      this.playlistSearched = data
      console.log(this.playlistSearched)
    })
  }

}
