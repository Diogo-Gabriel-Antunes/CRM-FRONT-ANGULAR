import { Component, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { HttpService } from 'src/app/api/http/http.service';
import { ClienteService } from 'src/app/pages/cliente/cliente.service';
import { AcoesClienteService } from '../acoes-cliente.service';
import { Compromisso } from 'src/app/pages/agenda/calendario';

@Component({
  selector: 'app-tarefa-form-modal',
  templateUrl: './tarefa-form-modal.component.html',
  styleUrls: ['./tarefa-form-modal.component.scss'],
})
export class TarefaFormModalComponent {
  tipoDeTarefa: IOptions[] = this.clienteService.getTipoDeTarefa();
  @Input() clientUuid!: string;
  horaDaTarefa!: string;
  tipoDaTarefaSelected!: string;
  tipoIntegracao = this.clienteService.tipoIntegracao;
  tipoIntegracaoSelected!: string;
  compromisso!: Compromisso;

  setHoraDaTarefa(horaDaTarefa: string) {
    this.horaDaTarefa = horaDaTarefa;
  }
  setTipoDaTarefa(tipoDaTarefa: string) {
    this.tipoDaTarefaSelected = tipoDaTarefa;
  }
  setTipoIntegracaoSelected(str: string) {
    this.tipoIntegracaoSelected = str;
  }
  constructor(
    private clienteService: ClienteService,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private acoesClienteService: AcoesClienteService
  ) {}
  setCompromisso(dto: Compromisso) {
    this.compromisso = dto;
  }
  createTarefa() {
    const dto: DTOTarefa = {
      tipoDeTarefa: this.tipoDaTarefaSelected,
      horaMarcada: this.horaDaTarefa,
      cliente: { uuid: this.clientUuid },
    };
    if (this.tipoIntegracaoSelected === 'COMPROMISSO') {
      dto.compromisso = this.compromisso;
      this.acoesClienteService.createTarefaComCompromisso(dto);
    } else {
      this.acoesClienteService.createTarefa(dto);
    }
  }
}

export interface DTOTarefa {
  tipoDeTarefa: string;
  horaMarcada: string;
  cliente: ICliente;
  empresa?: any;
  compromisso?: Compromisso;
}
