import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/api/http/http.service';
import { ITableSchema } from 'src/app/components/table/table';
import { OportunidadesTable } from './geral';
import { Compromisso } from '../../agenda/calendario';

@Injectable({
  providedIn: 'root',
})
export class OportunidadesGeralService {
  dataOptions: ITableSchema = {
    labelOptions: [
      { label: 'Cliente', objectName: 'nome' },
      { label: 'Nome', objectName: 'nomeOportunidade' },
      { label: 'Funil', objectName: 'nomeFunil' },
      { label: 'Etapa', objectName: 'etapaDoFunil' },
      { label: 'Fonte', objectName: 'fonte' },
      { label: 'Campanha', objectName: 'campanha' },
    ],
    optionsTable: {
      pagination: true,
      length: '40',
      pageSize: '20',
    },
  };

  constructor(private httpService: HttpService) {}

  geraCompromissoSubmit(compromisso: Compromisso) {
    return this.httpService.post<Compromisso>(
      '/compromisso/oportunidade',
      compromisso,
      '/oportundide'
    );
  }

  getOportunidades() {
    return this.httpService.get<OportunidadesTable[]>(
      '/oportunidade',
      '/oportunidade'
    );
  }
}
