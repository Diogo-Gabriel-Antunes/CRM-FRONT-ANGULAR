import { Component, OnInit } from '@angular/core';
import { FunilGeralService } from './funil-geral.service';
import { IFunil } from 'src/app/Interfaces/IFunil';
import { PaginationOptions } from 'src/app/components/table/table';
import { MatDialog } from '@angular/material/dialog';
import { EtapasComponent } from 'src/app/components/modal/funil/etapas/etapas.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-funil-geral',
  templateUrl: './funil-geral.component.html',
  styleUrls: ['./funil-geral.component.scss', '../../../app.component.scss'],
})
export class FunilGeralComponent implements OnInit {
  tableOptions = this.funilService.tableOptions;
  data!: IFunil[];
  paginationOptions!: PaginationOptions;
  funilSelected!: string;
  pesquisaRapida!: string;

  constructor(
    private funilService: FunilGeralService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  setPesquisaRapida(str: string) {
    this.pesquisaRapida = str;
  }
  setPaginationOptions(paginationOptions: PaginationOptions) {
    this.paginationOptions = paginationOptions;
  }
  setFunilSelected(uuid: string) {
    this.funilSelected = uuid;
  }
  openDialogEtapas() {
    if (!this.funilSelected) {
      this.snackBar.open('Selecione um funil', undefined, {
        duration: 3000,
      });
      return;
    }
    this.dialog.open(EtapasComponent, {
      data: { funilUuid: this.funilSelected },
    });
  }
  openDialogIntegracoes() {
    if (!this.funilSelected) {
      this.snackBar.open('Selecione um funil', undefined, {
        duration: 3000,
      });
      return;
    }
    this.dialog.open(EtapasComponent, {
      data: { funilUuid: this.funilSelected },
    });
  }
  ngOnInit(): void {
    this.getFunis();
  }

  getFunis() {
    this.funilService.getFunis().subscribe({
      next: (resposta) => {
        this.data = resposta;
      },
    });
  }
}
