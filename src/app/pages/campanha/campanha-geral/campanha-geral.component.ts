import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EtapasComponent } from 'src/app/components/modal/funil/etapas/etapas.component';
import { PaginationOptions } from 'src/app/components/table/table';
import { FunilGeralService } from '../../funil/funil-geral/funil-geral.service';
import { IFunil } from 'src/app/Interfaces/IFunil';
import { CampanhaGeralService } from './campanha-geral.service';
import { ICampanha } from 'src/app/Interfaces/ICampanha';

@Component({
  selector: 'app-campanha-geral',
  templateUrl: './campanha-geral.component.html',
  styleUrls: ['./campanha-geral.component.scss', '../../../app.component.scss'],
})
export class CampanhaGeralComponent {
  tableOptions = this.campanhaService.tableOptions;
  data!: ICampanha[];
  paginationOptions!: PaginationOptions;
  campanhaSelected!: string;
  pesquisaRapida!: string;

  constructor(
    private campanhaService: CampanhaGeralService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  setPesquisaRapida(str: string) {
    this.pesquisaRapida = str;
  }
  setPaginationOptions(paginationOptions: PaginationOptions) {
    this.paginationOptions = paginationOptions;
  }
  setCampanhaSelected(uuid: string) {
    this.campanhaSelected = uuid;
  }
  openDialogEtapas() {
    if (!this.campanhaSelected) {
      this.snackBar.open('Selecione um funil', undefined, {
        duration: 3000,
      });
      return;
    }
    this.dialog.open(EtapasComponent, {
      data: { funilUuid: this.campanhaSelected },
    });
  }

  ngOnInit(): void {
    this.getFunis();
  }

  getFunis() {
    this.campanhaService.getCampanhas().subscribe({
      next: (resposta) => {
        this.data = resposta;
      },
    });
  }
}
