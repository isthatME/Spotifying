import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

  constructor(private http: HttpClient) { }


  editUser(usuario: any, id: string){
    return this.http.patch(`http://localhost:3000/register/${id}`,usuario)
  } 
}
