import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEtapaDoFunil } from 'src/app/Interfaces/IEtapaDoFunil';
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
}
