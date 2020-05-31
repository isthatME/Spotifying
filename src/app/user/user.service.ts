import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API = 'http://localhost:3000'

  constructor(private http: HttpClient) { 

   }

   createUser(user: User){
     return this.http.post<User>(`${this.API}/register/`, user)
   }
}
