import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/Interfaces/ILogin';
import { IToken } from 'src/app/Interfaces/IToken';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  async login(login: ILogin) {
    this.snackBar.open('Efetuando Login');
    this.http.post<IToken>('http://localhost:8080/login', login).subscribe({
      next: (response) => {
        if (response.autenticado) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        }
      },
      complete: () => this.snackBar.dismiss(),
    });
  }
}
