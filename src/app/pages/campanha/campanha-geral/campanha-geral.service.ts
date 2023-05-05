import { Injectable } from '@angular/core';
import { ICampanha } from 'src/app/Interfaces/ICampanha';
import { HttpService } from 'src/app/api/http/http.service';
import { ITableSchema } from 'src/app/components/table/table';

@Injectable({
  providedIn: 'root',
})
export class CampanhaGeralService {
  tableOptions: ITableSchema = {
    labelOptions: [
      {
        label: 'Campanha',
        objectName: 'campanha',
      },
      { label: 'Status', objectName: 'status' },
      { label: 'Data Criação', objectName: 'dataCriacao' },
    ],
    optionsTable: {
      length: '20',
      pageSize: '20',
      pagination: true,
    },
  };

  getCampanhas() {
    return this.httpService.get<ICampanha[]>('/campanha', '/campanha');
  }
  constructor(private httpService: HttpService) {}
}
