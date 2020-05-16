import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

  constructor(private http: HttpClient) { }


  editUser(usuario: any){
    return this.http.put(`http://localhost:3000/register/1`,usuario)
  } 
}
