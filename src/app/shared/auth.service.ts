import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: {}

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/users`, user)
      .subscribe((res: any) => {
        this.http.get(`${this.endpoint}/register`).subscribe((data: any) => {
          const { email, password } = res
          const user = data.find(e => e.email == email && e.password == password)
          if (!user) return console.log('nao encontramos registros')
          console.log('usuário logado com sucesso')
          const storeToken = {
            id: res._id,
            email: res.email,
            password: res.password,
            token: "token-criado-manualmente"
          }
          this.currentUser = storeToken;
          localStorage.setItem('access_token', storeToken.token)
          localStorage.setItem('userId', user._id)
          localStorage.setItem('name', data[0].name)
          this.router.navigate(['allPlaylists'])

        })

      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}