import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { ILogin } from 'src/app/Interfaces/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group<ILogin>({
      email: '',
      senha: '',
    });
  }

  login() {
    this.loginService.login(this.formulario.value as ILogin);
  }
}
