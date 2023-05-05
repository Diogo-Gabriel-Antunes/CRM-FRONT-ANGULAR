import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { AgendaService } from 'src/app/pages/agenda/agenda.service';
import { Calendario, Dias, Mes } from 'src/app/pages/agenda/calendario';

@Component({
  selector: 'app-agenda-timeline',
  templateUrl: './agenda-timeline.component.html',
  styleUrls: ['./agenda-timeline.component.scss'],
})
export class AgendaTimelineComponent implements OnInit {
  constructor(private agendaService: AgendaService) {}
  calendario!: Calendario;

  pesquisaRapida!: string;
  qtdSemanas = 'UMASEMANA';
  dataFiltro!: string;
  meses: IOptions[] = this.agendaService.mes;
  mes!: string;

  setMes(str: string) {
    this.mes = str;
  }

  setDataFiltro(str: string) {
    this.dataFiltro = str;
  }
  ngOnInit(): void {
    this.getCalendario();
  }

  getLength(dia: Dias) {
    const newList = dia.calendarioHorarios.filter(
      (horarios) =>
        horarios.compromisso.oportunidades != null ||
        horarios.compromisso.tarefas != null
    );
    return newList.length;
  }

  getCalendario() {
    this.agendaService.getCalendarioTimeLine(this.mes).subscribe({
      next: (resposta) => {
        console.log(resposta);
        this.calendario = resposta;
        this.getDias();
      },
    });
  }

  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState4 = false;
  panelOpenState5 = false;
  panelOpenState6 = false;
  panelOpenState7 = false;
  panelOpenState8 = false;
  panelOpenState9 = false;
  panelOpenState10 = false;
  panelOpenState11 = false;
  panelOpenState12 = false;
  panelOpenState13 = false;
  panelOpenState14 = false;
  panelOpenState15 = false;
  panelOpenState16 = false;
  panelOpenState17 = false;
  panelOpenState18 = false;
  panelOpenState19 = false;
  panelOpenState20 = false;
  panelOpenState21 = false;
  panelOpenState22 = false;
  panelOpenState23 = false;
  panelOpenState24 = false;
  panelOpenState25 = false;
  panelOpenState26 = false;
  panelOpenState27 = false;
  panelOpenState28 = false;
  panelOpenState29 = false;
  panelOpenState30 = false;
  panelOpenState31 = false;
  dia1!: Dias;
  dia2!: Dias;
  dia3!: Dias;
  dia4!: Dias;
  dia5!: Dias;
  dia6!: Dias;
  dia7!: Dias;
  dia8!: Dias;
  dia9!: Dias;
  dia10!: Dias;
  dia11!: Dias;
  dia12!: Dias;
  dia13!: Dias;
  dia14!: Dias;
  dia15!: Dias;
  dia16!: Dias;
  dia17!: Dias;
  dia18!: Dias;
  dia19!: Dias;
  dia20!: Dias;
  dia21!: Dias;
  dia22!: Dias;
  dia23!: Dias;
  dia24!: Dias;
  dia25!: Dias;
  dia26!: Dias;
  dia27!: Dias;
  dia28!: Dias;
  dia29!: Dias;
  dia30!: Dias;
  dia31!: Dias | null;

  getDias() {
    this.dia1 = this.calendario.dias[0];
    this.dia2 = this.calendario.dias[1];
    this.dia3 = this.calendario.dias[2];
    this.dia4 = this.calendario.dias[3];
    this.dia5 = this.calendario.dias[4];
    this.dia6 = this.calendario.dias[5];
    this.dia7 = this.calendario.dias[6];
    this.dia8 = this.calendario.dias[7];
    this.dia9 = this.calendario.dias[8];
    this.dia10 = this.calendario.dias[9];
    this.dia11 = this.calendario.dias[10];
    this.dia12 = this.calendario.dias[11];
    this.dia13 = this.calendario.dias[12];
    this.dia14 = this.calendario.dias[13];
    this.dia15 = this.calendario.dias[14];
    this.dia16 = this.calendario.dias[15];
    this.dia17 = this.calendario.dias[16];
    this.dia18 = this.calendario.dias[17];
    this.dia19 = this.calendario.dias[18];
    this.dia20 = this.calendario.dias[19];
    this.dia21 = this.calendario.dias[20];
    this.dia22 = this.calendario.dias[21];
    this.dia23 = this.calendario.dias[22];
    this.dia24 = this.calendario.dias[23];
    this.dia25 = this.calendario.dias[24];
    this.dia26 = this.calendario.dias[25];
    this.dia27 = this.calendario.dias[26];
    this.dia28 = this.calendario.dias[27];
    this.dia29 = this.calendario.dias[28];
    this.dia30 = this.calendario.dias[29];
    this.dia31 =
      this.calendario?.dias.length == 31 ? this.calendario.dias[30] : null;
  }
}
