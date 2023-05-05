import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJornadaDeTrabalho } from 'src/app/Interfaces/IJornadaDeTrabalho';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { HttpService } from 'src/app/api/http/http.service';
import { Calendario } from './calendario';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  constructor(private httpService: HttpService) {}

  mes: IOptions[] = [
    {
      label: 'Janeiro',
      value: 'JANEIRO',
    },
    {
      label: 'Fevereiro',
      value: 'FEVEREIRO',
    },
    {
      label: 'Março',
      value: 'MARCO',
    },
    {
      label: 'Abril',
      value: 'ABRIL',
    },
    {
      label: 'Maio',
      value: 'MAIO',
    },
    {
      label: 'Junho',
      value: 'JUNHO',
    },
    {
      label: 'Julho',
      value: 'JULHO',
    },
    {
      label: 'Agosto',
      value: 'AGOSTO',
    },
    {
      label: 'Setembro',
      value: 'SETEMBRO',
    },
    {
      label: 'Outubro',
      value: 'OUTUBRO',
    },
    {
      label: 'Novembro',
      value: 'NOVEMBRO',
    },
    {
      label: 'Dezembro',
      value: 'DEZEMBRO',
    },
  ];

  getCalendarioTimeLine(mes: string) {
    let filtro = false;
    let params = undefined;
    if (mes) {
      params = new HttpParams().set('mes', mes);
    }
    return this.httpService.get<Calendario>('/agenda', '/agenda', params);
  }
}
