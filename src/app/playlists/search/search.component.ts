import { map } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { PlaylistService } from "../all-playlists/playlist.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  playlistName: any;
  //armazena todos os sons de uma playlist
  playlistSearched: any;
  //indice da plyalist no select
  playlistIndexSelected: any = -1;
  //id da playlist selecionada
  playlistIdSelected: any;
  //escuta a mudança de playlist para que o botão varie entre adicionar e remover
  isRemovable: boolean = false;
  //filtro pra pegar todos os nome das músicas da playlist selecionada
  searchedTerm: string;

  searchedT:string


  playlistSelected: any;

  songSelectedToBeAdd: any;

  //nos fornece qual o id da musica a ser adicionada
  nextIndex: any;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    //return the name and index of the current playlist
    this.playlistService.getPlaylistReference().subscribe((data: any) => {
      this.playlistName = data.map(e => e.name);
      console.log(this.playlistName)
      this.playlistIdSelected = data.map(e => e.id);
    });
    
    if (this.playlistIndexSelected == -1) {
      this.getPlaylistSelected();
    }
  }

  //devolve todos os objetos das musicas de uma playlist com nome declarado em playlistName (obtido no select)
  getPlaylistSelected() {
    this.isRemovable = true;
    if (this.playlistIndexSelected != -1) {
      this.playlistService
        .getAllSongsFromAPlaylist(this.playlistIndexSelected)
        .subscribe((data: any) => {
          this.playlistSearched = data;
        });
    } else {
      this.playlistService.getAllSongsFromAnUser().subscribe((data: any) => {
        this.playlistSearched = data;
      });
    }
  }

  // escuta o evento do select e guarda o id nas respectivas variáveis
  onChange(event: any) {
    this.playlistIdSelected,
      (this.playlistIndexSelected = event.target["selectedIndex"] - 1);
    this.getPlaylistSelected();
  }

  getNextIndex() {
    this.playlistService.getAllSongsFromAnUser().subscribe((data: any) => {
      this.nextIndex = data.map(e => e.id).length + 1;
    });
  }

  //deleta a musica de uma playlist pré=selecionada, baseada no id ( que é pego na iteração do ngFor
  //no html deste componente)
  onDelete(playlist) {
    console.log(playlist)
    this.playlistService.delete(playlist.id).subscribe(
      (success) => {
        console.log("sucesso ao remover música");
        this.getPlaylistSelected();
      },
      (error) => console.log("erro ao remover música")
    );
  }

  playlistOnChange(playlist) {
    this.playlistSelected = playlist.target["selectedIndex"];
  }

  addSong(song) {
    song.playlistId = this.playlistSelected;
    song.id = this.nextIndex;
    this.playlistService.addSong(song).subscribe(
      (success) => {
        console.log("sucesso ao adicionar música");
        this.getNextIndex();
      },
      (error) => console.log("erro ao adicionar música")
    );
  }
}
