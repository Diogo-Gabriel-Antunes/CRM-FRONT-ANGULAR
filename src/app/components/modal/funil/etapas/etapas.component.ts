import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEtapaDoFunil } from 'src/app/Interfaces/IEtapaDoFunil';
import {
  ITableSchema,
  PaginationOptions,
} from 'src/app/components/table/table';
import { FunilGeralService } from 'src/app/pages/funil/funil-geral/funil-geral.service';
import { EtapaDTO } from './EtapaDTO';

@Component({
  selector: 'app-etapas',
  templateUrl: './etapas.component.html',
  styleUrls: ['./etapas.component.scss'],
})
export class EtapasComponent implements OnInit {
  paginationOptions!: PaginationOptions;
  etapaSelected!: string;
  etapa!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: { funilUuid: string },
    private funilService: FunilGeralService
  ) {}

  ngOnInit(): void {
    this.getEtapas();
  }

  getEtapas() {
    this.funilService.getEtapas(this.dataDialog.funilUuid).subscribe({
      next: (resposta) => {
        this.data = resposta;
      },
    });
  }
  setEtapa(str: string) {
    this.etapa = str;
  }
  data!: IEtapaDoFunil[];
  tableOptions: ITableSchema = {
    labelOptions: [
      {
        label: 'Etapa',
        objectName: 'etapa',
      },
      {
        label: 'Status',
        objectName: 'status',
      },
      {
        label: 'Ultima Atualização',
        objectName: 'dataAtualizacao',
        type: 'date',
      },
      { label: 'Criado Em', objectName: 'dataIntegracao', type: 'date' },
    ],
    optionsTable: {
      length: '10',
      pageSize: '10',
      pagination: false,
    },
  };

  desativar() {
    this.funilService.desativarEtapa(this.etapaSelected).subscribe({
      next: (resposta) => {
        console.log(resposta);
        this.getEtapas();
      },
    });
  }
  ativarEtapa() {
    this.funilService.ativarEtapa(this.etapaSelected).subscribe({
      next: (resposta) => {
        console.log(resposta);
        this.getEtapas();
      },
    });
  }

  setPaginationOptions(paginationOptions: PaginationOptions) {
    this.paginationOptions = paginationOptions;
  }
  setEtapaSelected(uuid: string) {
    this.etapaSelected = uuid;
  }
  saveEtapa() {
    const dto: EtapaDTO = {
      etapa: this.etapa,
      ativo: true,
      funil: { uuid: this.dataDialog.funilUuid },
    };
    this.funilService.saveEtapa(dto).subscribe({
      next: (resposta) => {
        this.getEtapas();
      },
    });
  }
}
