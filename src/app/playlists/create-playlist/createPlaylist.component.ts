import { SearchService } from './../search/search.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-createPlaylist",
  templateUrl: "./createPlaylist.component.html",
  styleUrls: ["./createPlaylist.component.css"],
})
export class CreatePlaylistComponent implements OnInit {
  form: FormGroup;
  formValue: any;

  constructor(
    private searchService: SearchService,
    private fb: FormBuilder,
    private router: Router
  ) { }


  //dados do da playlist, com capa e id tendo valores estáticos
  ngOnInit(): void {
    this.form = this.fb.group({
      cover: "../assets/cover/img1.jpg",
      name: ["", Validators.required]
    });
  }

  //cria a playlist
  create(form) {
    if (form.valid) {
      this.searchService.createPlaylist(form.value).subscribe(
        (succes) => {
          console.log("Playlist criada com sucesso");
          this.router.navigate(["/search"]);
        },
        (error) => {
          console.log(
            "Erro ao criar sua playlist, verifique os parametros e tente novamente"
          );
          this.form.reset();
        }
      );
    }
  }
}
