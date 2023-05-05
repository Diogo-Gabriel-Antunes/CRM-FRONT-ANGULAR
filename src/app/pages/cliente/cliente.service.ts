import { HttpParams } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { HttpService } from 'src/app/api/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  @Output() campanhas!: IOptions[];
  @Output() etapa!: IOptions;
  clientes!: ICliente[];
  constructor(private http: HttpService) {}

  getCampanhas() {
    return this.http.get<IOptions[]>('/campanha/select', '/cliente');
  }
  getFontes() {
    return this.http.get<IOptions[]>('/fonte/select', '/cliente');
  }
  getFunil() {
    return this.http.get<IOptions[]>('/funil/select', '/cliente');
  }

  createCliente(dto: ICliente) {
    return this.http.post('/cliente', dto, '/cliente');
  }
  updateCliente(dto: ICliente, uuid: string) {
    return this.http.put(`/cliente/${uuid}`, dto, '/cliente');
  }
  getOneClienteByUuid(clienteUuid: string) {
    return this.http.get<ICliente>(`/cliente/${clienteUuid}`, '/cliente');
  }
  tipoIntegracao: IOptions[] = [
    { label: 'Compromisso', value: 'COMPROMISSO' },
    { label: 'Apenas Registro', value: 'REGISTRO' },
  ];

  getCliente() {
    return this.http.get<ICliente[]>('/cliente', '/cliente');
  }

  getTipoDeTarefa(): IOptions[] {
    return [
      {
        label: 'Ligação',
        value: 'LIGACAO',
      },
      {
        label: 'E-mail',
        value: 'EMAIL',
      },
      {
        label: 'Visita',
        value: 'VISITA',
      },
      {
        label: 'Reunião',
        value: 'REUNIAO',
      },
      {
        label: 'Tarefa',
        value: 'TAREFA',
      },
      {
        label: 'Almoço',
        value: 'ALMOCO',
      },
      {
        label: 'Ligação',
        value: 'WHATSAPP',
      },
    ];
  }
  getStatusProposta(): IOptions[] {
    return [
      {
        label: 'Cancelada',
        value: 'CANCELADA',
      },
      {
        label: 'Em andamento',
        value: 'EM_ANDAMENTO',
      },
      {
        label: 'Sem resposta',
        value: 'SEM_RESPOSTA',
      },
      {
        label: 'Concluida',
        value: 'CONCLUIDA',
      },
    ];
  }

  optionsMes: IOptions[] = [
    {
      label: 'Janeiro',
      value: 'JANEIRO',
    },
    {
      label: 'Fevereiro',
      value: 'FEVEREIRO',
    },
    {
      label: 'Marco',
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

  horariosOptions: IOptions[] = [
    { value: 'H01', label: '01:00' },
    { value: 'H02', label: '02:00' },
    { value: 'H03', label: '03:00' },
    { value: 'H04', label: '04:00' },
    { value: 'H05', label: '05:00' },
    { value: 'H06', label: '06:00' },
    { value: 'H07', label: '07:00' },
    { value: 'H08', label: '08:00' },
    { value: 'H09', label: '09:00' },
    { value: 'H10', label: '10:00' },
    { value: 'H11', label: '11:00' },
    { value: 'H12', label: '12:00' },
    { value: 'H13', label: '13:00' },
    { value: 'H14', label: '14:00' },
    { value: 'H15', label: '15:00' },
    { value: 'H16', label: '16:00' },
    { value: 'H17', label: '17:00' },
    { value: 'H18', label: '18:00' },
    { value: 'H19', label: '19:00' },
    { value: 'H20', label: '20:00' },
    { value: 'H21', label: '21:00' },
    { value: 'H22', label: '22:00' },
    { value: 'H23', label: '23:00' },
    { value: 'H24', label: '24:00' },
  ];

  diaDoMes: IOptions[] = [
    { label: '1', value: 'DIA_1' },
    { label: '2', value: 'DIA_2' },
    { label: '3', value: 'DIA_3' },
    { label: '4', value: 'DIA_4' },
    { label: '5', value: 'DIA_5' },
    { label: '6', value: 'DIA_6' },
    { label: '7', value: 'DIA_7' },
    { label: '8', value: 'DIA_8' },
    { label: '9', value: 'DIA_9' },
    { label: '10', value: 'DIA_10' },
    { label: '11', value: 'DIA_11' },
    { label: '12', value: 'DIA_12' },
    { label: '13', value: 'DIA_13' },
    { label: '14', value: 'DIA_14' },
    { label: '15', value: 'DIA_15' },
    { label: '16', value: 'DIA_16' },
    { label: '17', value: 'DIA_17' },
    { label: '18', value: 'DIA_18' },
    { label: '19', value: 'DIA_19' },
    { label: '20', value: 'DIA_20' },
    { label: '21', value: 'DIA21' },
    { label: '22', value: 'DIA_22' },
    { label: '23', value: 'DIA_23' },
    { label: '24', value: 'DIA_24' },
    { label: '25', value: 'DIA_25' },
    { label: '26', value: 'DIA_26' },
    { label: '27', value: 'DIA_27' },
    { label: '28', value: 'DIA_28' },
    { label: '29', value: 'DIA_29' },
    { label: '30', value: 'DIA_30' },
    { label: '31', value: 'DIA_31' },
  ];
}
