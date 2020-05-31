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
  id:string
  constructor(
    private userEditService: UserEditService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('name')
    this.id = localStorage.getItem('userId')

    //edição de usuário
    this.form = this.fb.group({
      name: [this.currentUser, Validators.required]
    })

  }


  create(form){
    if(form.valid){
      this.userEditService.editUser(form.value,this.id).subscribe(
        (succes) => {
          console.log("Usuário alterado com sucesso");
      
          this.router.navigate(["/allPlaylists"]);
        },
        (error) => {
          console.log("Não foi possivel alterar o usuário, tente mais tarde!");
          localStorage.setItem('name', form.value.name)
          this.router.navigate(["/allPlaylists"]);
          this.form.reset();
        }
      )
    }
  }

}
