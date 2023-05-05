import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { HttpService } from 'src/app/api/http/http.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss'],
})
export class ConfiguracoesComponent {
  diasDaSemana: string[] = [];
  horaEntrada!: string;
  horaSaida!: string;
  horarioPadrao!: boolean;

  constructor(private httpService: HttpService) {}

  setDiasDaSemana(dia: MatButtonToggleChange) {
    this.diasDaSemana = dia.value;
  }
  setHoraEntrada(str: string) {
    this.horaEntrada = str;
  }
  setHoraSaida(str: string) {
    this.horaSaida = str;
  }
  setHoraioPadrao(boo: MatCheckboxChange) {
    this.horarioPadrao = boo.checked;
  }

  onSubmit() {
    let dto: DTO = {
      diasDaSemana: this.diasDaSemana,
      horaEntrada: this.horaEntrada,
      horaSaida: this.horaSaida,
      horarioPadrao: this.horarioPadrao,
    };
    this.httpService.post('/configuracao', dto, '/configuracao').subscribe({
      next: (resposta) => {
        console.log(resposta);
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
interface DTO {
  diasDaSemana: string[];
  horaEntrada: string;
  horaSaida: string;
  horarioPadrao: boolean;
}
