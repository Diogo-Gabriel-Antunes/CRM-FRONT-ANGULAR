import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { HttpService } from 'src/app/api/http/http.service';
import { SuccessComponent } from '../../alerts/success/success.component';
import { DTOOportunidade } from './oportunidades-form-modal/oportunidades-form-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DTOTarefa } from './tarefa-form-modal/tarefa-form-modal.component';

@Injectable({
  providedIn: 'root',
})
export class AcoesClienteService {
  constructor(
    private httpService: HttpService,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar
  ) {}

  createOportunidadeComCompromisso(dto: DTOOportunidade) {
    this.httpService
      .post<DTOOportunidade>('/oportunidade/compromisso', dto, '/cliente')
      .subscribe({
        next: (resposta) => {
          this.bottomSheet.open(SuccessComponent, {
            data: { mensagem: 'Oportundiade criada com sucesso' },
          });
        },
        error: () => {},
        complete: () => {
          this.bottomSheet.dismiss();
        },
      });
  }

  createOportunidade(dto: DTOOportunidade) {
    this.httpService
      .post<DTOOportunidade>('/oportunidade/acoes', dto, '/cliente')
      .subscribe({
        next: (resposta) => {
          this.bottomSheet.open(SuccessComponent, {
            data: { mensagem: 'Oportundiade criada com sucesso' },
          });
        },
        error: () => {},
        complete: () => {
          this.bottomSheet.dismiss();
        },
      });
  }

  createTarefa(dto: DTOTarefa) {
    return this.httpService.post('/tarefa', dto, '/tarefa');
  }
  createTarefaComCompromisso(dto: DTOTarefa) {
    return this.httpService.post('/tarefa/compromisso', dto, '/tarefa');
  }
}
