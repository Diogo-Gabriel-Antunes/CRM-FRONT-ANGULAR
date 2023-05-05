import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/api/http/http.service';
import { ITableSchema } from 'src/app/components/table/table';
import { TarefaTable } from './tarefas-geral';
import { Compromisso } from '../../agenda/calendario';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TarefasGeralService {
  clienteUuid!: string;
  cliente!: Observable<ICliente>;
  dataOptions: ITableSchema = {
    labelOptions: [
      { label: 'Nome Cliente', objectName: 'nomeCliente' },
      { label: 'Telefone Cliente', objectName: 'telefoneCliente' },
      { label: 'E-email Cliente', objectName: 'emailCliente' },
      { label: 'Tipo De Tarefa', objectName: 'tipoDeTarefa' },
      { label: 'Hora Marcada', objectName: 'horaMarcada' },
    ],
    optionsTable: {
      pagination: true,
      length: '40',
      pageSize: '20',
    },
  };

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

  tipoIntegracao: IOptions[] = [
    {
      label: 'Registro',
      value: 'REGISTRO',
    },
    { label: 'Compromisso', value: 'COMPROMISSO' },
  ];
  constructor(private httpService: HttpService) {}

  getTarefasGeral() {
    return this.httpService.get<TarefaTable[]>('/tarefa', '/tarefa');
  }

  geraCompromissoSubmit(compromisso: Compromisso) {
    return this.httpService.post<Compromisso>(
      '/compromisso/tarefa',
      compromisso,
      '/tarefa'
    );
  }

  setClienteUuid(str: string) {
    this.clienteUuid = str;
  }
}
