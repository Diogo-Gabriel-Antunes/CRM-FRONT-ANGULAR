import { Component, OnInit } from '@angular/core';
import {
  ITableSchema,
  PaginationOptions,
} from 'src/app/components/table/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TarefasGeralService } from './tarefas-geral.service';
import { TarefaTable } from './tarefas-geral';
import { CompromissoComponent } from './compromisso/compromisso.component';
import { TarefasInserirComponent } from './tarefas-inserir/tarefas-inserir.component';

@Component({
  selector: 'app-tarefas-geral',
  templateUrl: './tarefas-geral.component.html',
  styleUrls: ['./tarefas-geral.component.scss', '../../../app.component.scss'],
})
export class TarefasGeralComponent implements OnInit {
  pesquisaRapida!: string;
  setPesquisaRapida(str: string) {
    this.pesquisaRapida = str;
  }
  tableOptions: ITableSchema = this.tarefasGeralService.dataOptions;
  data!: TarefaTable[];
  paginationOptions!: PaginationOptions;
  tarefaSelected!: string;

  constructor(
    private tarefasGeralService: TarefasGeralService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.snackBar.open('Carregando suas Tarefas');
    this.tarefasGeralService.getTarefasGeral().subscribe({
      next: (resposta) => {
        this.data = resposta;
      },
      error: () => {},
      complete: () => {},
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(CompromissoComponent, {
      width: '422px',
      height: '400px',
      data: { tarefaUuid: this.tarefaSelected },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogInserir() {
    const dialogRef = this.dialog.open(TarefasInserirComponent, {
      width: '922px',
      height: '400px',
      data: { tarefaUuid: this.tarefaSelected },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  setPaginationOptions(paginationOptions: PaginationOptions) {
    this.paginationOptions = paginationOptions;
  }
  setTarefaSelected(uuid: string) {
    this.tarefaSelected = uuid;
  }
}
