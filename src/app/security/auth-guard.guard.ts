import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IToken } from '../Interfaces/IToken';
import { HttpService } from '../api/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpClient,
    private httpService: HttpService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logado: boolean = true;
    const token = localStorage.getItem('token');
    if (token != null) {
      this.httpService.get<IToken>('/login', '/login').subscribe((response) => {
        if (response.autenticado) {
          logado = response.autenticado;
        } else {
          logado = false;
        }
      });
      if (!logado) {
        this.router.navigate(['/login']);
      }
      return logado;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
