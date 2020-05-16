import { UserEditService } from './user-edit.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"],
})
export class UserEditComponent implements OnInit {
  currentUser: any;
  form: FormGroup;
  constructor(
    private userEditService: UserEditService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('name')

    //edição de usuário
    this.form = this.fb.group({
      name: [this.currentUser, Validators.required],
      email: "gui@gui.com",
      password: "123"
    })

  }


  create(form){
    if(form.valid){
      this.userEditService.editUser(form.value).subscribe(
        (succes) => {
          console.log("Usuário alterado com sucesso");
          localStorage.setItem('name', form.value.name)
          this.router.navigate(["/allPlaylists"]);
        },
        (error) => {
          console.log(
            "Não foi possivel alterar o usuário, tente mais tarde!"
          );
          this.form.reset();
        }
      )
    }
  }

}
