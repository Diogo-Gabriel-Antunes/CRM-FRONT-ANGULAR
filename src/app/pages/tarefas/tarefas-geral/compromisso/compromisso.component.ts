import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Compromisso } from 'src/app/pages/agenda/calendario';
import { TarefasGeralService } from '../tarefas-geral.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-compromisso',
  templateUrl: './compromisso.component.html',
  styleUrls: ['./compromisso.component.scss'],
})
export class CompromissoComponent {
  compromisso!: Compromisso;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tarefaUuid: string },
    private tarefaGeralService: TarefasGeralService,
    private snackBar: MatSnackBar
  ) {}

  geraCompromisso() {
    this.snackBar.open('Gerando seu compromisso');
    this.compromisso.horario;
    const dto: Compromisso = {
      ...this.compromisso,
      tarefas: {
        uuid: this.data.tarefaUuid,
      },
    };
    this.tarefaGeralService.geraCompromissoSubmit(dto).subscribe({
      next: () => {
        this.snackBar.dismiss();
        this.snackBar.open('Compromisso gerado com sucesso', undefined, {
          duration: 3000,
        });
      },
      error: () => {
        this.snackBar.dismiss();
        this.snackBar.open(
          'Falha na geração do compromisso verifique o formulario',
          undefined,
          {
            duration: 3000,
          }
        );
      },
    });
  }

  setCompromisso(compromisso: Compromisso) {
    this.compromisso = compromisso;
  }
}
