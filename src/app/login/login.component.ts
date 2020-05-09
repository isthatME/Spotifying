import { AuthService } from './../shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  currentUser = {}

  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    })
  }

  login(form) {
    if (form.valid) {
      this.AuthService.signIn(this.form.value)   
    }
  }
}
