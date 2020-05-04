import { User } from '../usuario/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly API = 'http://localhost:3000/login/'

  currentUser = {}

  constructor(private http: HttpClient) { 

   }

   login(user: User){
     this.currentUser = user
     return this.http.post<User>(this.API, user)
   }
   isLoggedIn(auth: number): boolean {
    return (auth != -1) ? true : false;
  }
}
