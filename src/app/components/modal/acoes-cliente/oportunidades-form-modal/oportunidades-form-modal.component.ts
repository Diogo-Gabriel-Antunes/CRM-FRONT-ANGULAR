import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable, filter, map, timeInterval, timeout } from 'rxjs';
import { ICampanha } from 'src/app/Interfaces/ICampanha';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { IEtapaDoFunil } from 'src/app/Interfaces/IEtapaDoFunil';
import { IFonte } from 'src/app/Interfaces/IFonte';
import { IFunil } from 'src/app/Interfaces/IFunil';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { HttpService } from 'src/app/api/http/http.service';
import { SuccessComponent } from 'src/app/components/alerts/success/success.component';
import { ClienteService } from 'src/app/pages/cliente/cliente.service';
import { AcoesClienteService } from '../acoes-cliente.service';

@Component({
  selector: 'app-oportunidades-form-modal',
  templateUrl: './oportunidades-form-modal.component.html',
  styleUrls: ['./oportunidades-form-modal.component.scss'],
})
export class OportunidadesFormModalComponent implements OnInit {
  campanhas!: IOptions[];
  campanhaUuid!: string;
  fontes!: IOptions[];
  fonteUuid!: string;
  funil!: IOptions[];
  funilUuid!: string;
  etapaDoFunil!: IOptions[];
  etapaDoFunilUuid!: string;
  @Input() clientUuid!: string;
  nomeOportunidade!: string;
  tipoIntegracao: IOptions[] = this.clienteService.tipoIntegracao;
  tipoIntegracaoSelected!: string;
  compromisso!: any;
  constructor(
    private clienteService: ClienteService,
    public http: HttpClient,
    private acoesClienteService: AcoesClienteService
  ) {}

  ngOnInit(): void {
    this.clienteService.getCampanhas().subscribe({
      next: (resposta) => {
        this.campanhas = resposta;
      },
    });
    this.clienteService.getFontes().subscribe({
      next: (resposta) => {
        this.fontes = resposta;
      },
    });
    this.clienteService.getFunil().subscribe({
      next: (resposta) => {
        this.funil = resposta;
      },
    });
  }

  onChangeFunil(funilUuid: string) {
    this.http
      .get<IOptions[]>(
        'http://localhost:8080/etapa-funil/select?funilUuid=' + funilUuid,
        {
          headers: { path: "'/cliente'" },
        }
      )
      .subscribe({
        next: (response) => {
          this.etapaDoFunil = response;
        },
      });
  }

  setFonteUuid(fonteUuid: string) {
    this.fonteUuid = fonteUuid;
  }
  setTipoIntegracaoSelected(str: string) {
    this.tipoIntegracaoSelected = str;
  }
  setFunilUuid(funilUuid: string) {
    this.funilUuid = funilUuid;
  }
  setEtapaFunilUuid(uuid: string) {
    this.etapaDoFunilUuid = uuid;
  }
  setCampanha(uuid: string) {
    this.campanhaUuid = uuid;
  }
  setNomeOportunidade(nomeOportunidade: string) {
    this.nomeOportunidade = nomeOportunidade;
  }

  setCompromisso(compromisso: any) {
    this.compromisso = compromisso;
  }

  onSubmitOportundidade() {
    var dto: DTOOportunidade = {
      nomeOportunidade: this.nomeOportunidade,
      cliente: { uuid: this.clientUuid },
      campanha: { uuid: this.campanhaUuid },
      etapaDoFunil: { uuid: this.etapaDoFunilUuid },
      fonte: { uuid: this.fonteUuid },
      funil: { uuid: this.funilUuid },
    };

    if (this.tipoIntegracaoSelected === 'COMPROMISSO') {
      dto.compromisso = this.compromisso;
      this.acoesClienteService.createOportunidadeComCompromisso(dto);
    } else {
      this.acoesClienteService.createOportunidade(dto);
    }
  }
}

export interface DTOOportunidade {
  nomeOportunidade: string;
  cliente: ICliente;
  campanha: ICampanha;
  etapaDoFunil: IEtapaDoFunil;
  fonte: IFonte;
  funil: IFunil;
  compromisso?: any;
}
