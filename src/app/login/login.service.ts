import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from '../usuario/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly API = 'http://localhost:3000/login/'

  currentUser = {}
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder

    ) { 
      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
   }

   login(){
     return this.authService.signIn(this.form.value)
   }

}
