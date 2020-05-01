import { User } from './../usuario/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../usuario/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User){

  }

  register(User: User) {

  }
}
