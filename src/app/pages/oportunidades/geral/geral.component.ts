import { Component, OnInit } from '@angular/core';
import {
  ITableSchema,
  PaginationOptions,
} from 'src/app/components/table/table';
import { OportunidadesGeralService } from './geral.service';
import { OportunidadesTable } from './geral';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CompromissoFormComponent } from 'src/app/components/modal/acoes-cliente/compromisso-form/compromisso-form.component';
import { ModalGeraCompromissoComponent } from './modal-gera-compromisso/modal-gera-compromisso.component';

@Component({
  selector: 'app-oportunidade-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.scss', '../../../app.component.scss'],
})
export class OportunidadesGeralComponent implements OnInit {
  pesquisaRapida!: string;
  setPesquisaRapida(str: string) {
    this.pesquisaRapida = str;
  }
  tableOptions: ITableSchema = this.oportunidadesGeralService.dataOptions;
  data!: OportunidadesTable[];
  paginationOptions!: PaginationOptions;
  oportunidadeSelected!: string;

  constructor(
    private oportunidadesGeralService: OportunidadesGeralService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.snackBar.open('Carregando suas oportunidades');
    this.oportunidadesGeralService.getOportunidades().subscribe({
      next: (resposta) => {
        console.log(resposta);
        this.data = resposta;
      },
      complete: () => {
        this.snackBar.dismiss();
      },
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalGeraCompromissoComponent, {
      width: '422px',
      height: '400px',
      data: { oportunidadeUuid: this.oportunidadeSelected },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  setPaginationOptions(paginationOptions: PaginationOptions) {
    this.paginationOptions = paginationOptions;
  }
  setOportunidadeSelected(uuid: string) {
    this.oportunidadeSelected = uuid;
  }
}
