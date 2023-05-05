import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Compromisso } from 'src/app/pages/agenda/calendario';
import { OportunidadesGeralService } from '../geral.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-gera-compromisso',
  templateUrl: './modal-gera-compromisso.component.html',
  styleUrls: ['./modal-gera-compromisso.component.scss'],
})
export class ModalGeraCompromissoComponent {
  compromisso!: Compromisso;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { oportunidadeUuid: string },
    private geralService: OportunidadesGeralService,
    private snackBar: MatSnackBar
  ) {}

  geraCompromisso() {
    this.snackBar.open('Gerando seu compromisso');
    this.compromisso.horario;
    const dto: Compromisso = {
      ...this.compromisso,
      oportunidades: {
        uuid: this.data.oportunidadeUuid,
      },
    };
    this.geralService.geraCompromissoSubmit(dto).subscribe({
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
