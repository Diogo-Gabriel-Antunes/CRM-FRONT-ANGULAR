import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { IJornadaDeTrabalho } from 'src/app/Interfaces/IJornadaDeTrabalho';
import { AgendaService } from './agenda.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Calendario } from './calendario';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  pesquisaRapida!: string;
  jornadaDeTrabalho!: IJornadaDeTrabalho;
  qtdSemanas = 'UMASEMANA';
  dataFiltro!: string;
  calendario!: Calendario;
  meses: IOptions[] = this.agendaService.mes;
  mes!: string;

  constructor(
    private agendaService: AgendaService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getCalendario();
  }

  setMes(str: string) {
    this.mes = str;
  }

  setDataFiltro(str: string) {
    this.dataFiltro = str;
  }
  getCalendario() {}
}
