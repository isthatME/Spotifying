import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  currentUser = {}
  auth: number = -1

  constructor(
    private FormBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      email: [null, Validators.required],
      password: [null, [Validators.required]]
    })
  }

  login(form) {

    const user = {
      name: 'Guilherme',
      email: form.value.email,
      password: form.value.password
    }

    if (form.valid) {
      this.auth++
      this.loginService.login(user).subscribe(
        data => this.currentUser = data
      )    
      this.router.navigate(['allPlaylists'])
    }
  }
}
