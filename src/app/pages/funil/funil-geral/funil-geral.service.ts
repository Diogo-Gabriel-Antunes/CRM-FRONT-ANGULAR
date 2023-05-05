import { Injectable } from '@angular/core';
import { ITableSchema } from '../../../components/table/table';
import { HttpService } from 'src/app/api/http/http.service';
import { IFunil } from 'src/app/Interfaces/IFunil';
import { IEtapaDoFunil } from 'src/app/Interfaces/IEtapaDoFunil';
import { EtapaDTO } from 'src/app/components/modal/funil/etapas/EtapaDTO';
@Injectable({
  providedIn: 'root',
})
export class FunilGeralService {
  constructor(private httpService: HttpService) {}

  getFunis() {
    return this.httpService.get<IFunil[]>('/funil', '/funil');
  }
  getEtapas(funilUuid: string) {
    return this.httpService.get<IEtapaDoFunil[]>(
      `/etapa-funil/funil/${funilUuid}`,
      '/funil'
    );
  }

  saveEtapa(dto: EtapaDTO) {
    return this.httpService.post('/etapa-funil', dto, '/funil');
  }

  desativarEtapa(etapaUuid: string) {
    return this.httpService.put(
      '/etapa-funil/desativar/' + etapaUuid,
      undefined,
      '/funil'
    );
  }
  ativarEtapa(etapaUuid: string) {
    return this.httpService.put(
      '/etapa-funil/ativar/' + etapaUuid,
      undefined,
      '/funil'
    );
  }

  tableOptions: ITableSchema = {
    labelOptions: [
      {
        label: 'Nome Do Funil',
        objectName: 'nomeFunil',
      },
      { label: 'Integrações', objectName: 'listaIntegracoes' },
      { label: 'Padrão', objectName: 'padrao' },
      { label: 'Quantidade de Etapas', objectName: 'quantidadeEtapas' },
    ],
    optionsTable: {
      length: '20',
      pageSize: '20',
      pagination: true,
    },
  };
}
