import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDragDrop } from 'src/app/Interfaces/IDragDrop';
import { IEtapaDoFunil } from 'src/app/Interfaces/IEtapaDoFunil';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { HttpService } from 'src/app/api/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  constructor(private httpService: HttpService) {}

  getCabecalho(funilUuid: string) {
    let params = undefined;
    if (funilUuid) {
      params = new HttpParams().set('funilUuid', funilUuid);
    }
    return this.httpService.get<IEtapaDoFunil[]>(
      '/etapa-funil/lead',
      '/leads',
      params
    );
  }

  getFunil() {
    return this.httpService.get<IOptions[]>('/funil/select', '/lead');
  }

  getDragDrop(funilUuid: string) {
    let params = null;
    if (funilUuid) {
      params = new HttpParams().set('funilUuid', funilUuid);
    }

    return this.httpService.get<IDragDrop[]>(
      '/lead/drag-drop',
      '/lead',
      params!
    );
  }

  updateLeadDragDrop(leadUuid: string, novaEtapaUuid: string) {
    let params = new HttpParams().set('novaEtapaUuid', novaEtapaUuid);

    return this.httpService.put(
      '/lead/drag-drop/' + leadUuid,
      null,
      '/lead',
      params
    );
  }

  getEtapaFunil(funilUuid: string) {
    let params = null;
    if (funilUuid) {
      params = new HttpParams().set('funilUuid', funilUuid);
    }

    return this.httpService.get<IOptions[]>(
      '/etapa-funil/select',
      '/lead',
      params!
    );
  }
}
