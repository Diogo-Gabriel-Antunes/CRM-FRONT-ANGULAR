import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { LeadsService } from '../leads.service';
import { ILead } from 'src/app/Interfaces/ILead';
import { DataUtilService } from 'src/app/Commons/utils/data-util.service';

@Component({
  selector: 'app-dialog-create-leads-timeline',
  templateUrl: './dialog-create-leads-timeline.component.html',
  styleUrls: ['./dialog-create-leads-timeline.component.scss'],
})
export class DialogCreateLeadsTimelineComponent implements OnInit {
  funilSelected!: string;
  funilOptions!: IOptions[];
  etapaFunilOptions!: IOptions[];
  etapaFunilSelected!: string;
  descricao!: string;
  data!: string;
  clienteUuid!: string;
  valor!: string;
  constructor(
    private leadsService: LeadsService,
    private dataUtil: DataUtilService
  ) {}

  ngOnInit(): void {
    this.leadsService.getFunil().subscribe({
      next: (resposta) => {
        this.funilOptions = resposta;
      },
    });
  }

  createLead() {
    var dto: any = {
      descricao: this.descricao,
      data: this.dataUtil.FormataData(this.data),
      funilUuid: this.funilSelected,
      etapaDoFunilUuid: this.etapaFunilSelected,
      valor: this.valor,
      clienteUuid: this.clienteUuid,
    };

    this.leadsService.createLead(dto).subscribe({
      next: (resposta) => {
        console.log(resposta);
      },
    });
  }

  getEtapaFunil() {
    return this.leadsService.getEtapaFunil(this.funilSelected);
  }
  setFunilSelected(str: string) {
    this.leadsService.getEtapaFunil(str).subscribe({
      next: (resposta) => {
        this.etapaFunilOptions = resposta;
      },
    });
    this.funilSelected = str;
  }

  setDescricao(str: string) {
    this.descricao = str;
  }
  setValor(str: string) {
    this.valor = str;
  }
  seCliente(str: string) {
    this.clienteUuid = str;
  }
  setData(str: string) {
    this.data = str;
  }
  setEtapaFunil(str: string) {
    this.etapaFunilSelected = str;
  }
}
