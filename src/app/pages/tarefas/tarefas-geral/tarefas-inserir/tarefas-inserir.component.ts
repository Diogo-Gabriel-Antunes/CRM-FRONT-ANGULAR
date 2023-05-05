import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/api/http/http.service';
import { DTOTarefa } from 'src/app/components/modal/acoes-cliente/tarefa-form-modal/tarefa-form-modal.component';
import { Compromisso } from 'src/app/pages/agenda/calendario';
import { TarefasGeralService } from '../tarefas-geral.service';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { AcoesClienteService } from 'src/app/components/modal/acoes-cliente/acoes-cliente.service';
import { ICliente } from 'src/app/Interfaces/ICliente';

@Component({
  selector: 'app-tarefas-inserir',
  templateUrl: './tarefas-inserir.component.html',
  styleUrls: ['./tarefas-inserir.component.scss'],
})
export class TarefasInserirComponent {
  tipoDeTarefa: IOptions[] = this.tarefaService.getTipoDeTarefa();
  clientUuid: string = ' ';
  horaDaTarefa!: string;
  tipoDaTarefaSelected!: string;
  tipoIntegracao = this.tarefaService.tipoIntegracao;
  tipoIntegracaoSelected!: string;
  compromisso!: Compromisso;
  cliente!: ICliente;

  setClienteUuid(str: string) {
    this.clientUuid = str;
  }

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
    private tarefaService: TarefasGeralService,
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
      this.acoesClienteService.createTarefaComCompromisso(dto).subscribe({
        next: (resposta) => {
          console.log(resposta);
        },
      });
    } else {
      this.acoesClienteService.createTarefa(dto).subscribe((resposta) => {
        console.log(resposta);
      });
    }
  }
}
