import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { HttpService } from 'src/app/api/http/http.service';
import {
  ITableSchema,
  PaginationOptions,
} from 'src/app/components/table/table';
import { ModalClienteComponent } from '../modal-cliente.component';
import { TarefasGeralService } from 'src/app/pages/tarefas/tarefas-geral/tarefas-geral.service';

@Component({
  selector: 'app-table-cliente',
  templateUrl: './table-cliente.component.html',
  styleUrls: [
    './table-cliente.component.scss',
    '../../../../app.component.scss',
  ],
})
export class TableClienteComponent implements OnInit {
  pesquisaRapida!: string;
  data!: ICliente[];
  paginationOptions!: PaginationOptions;
  clienteSelected!: string;

  @Output() event = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<TableClienteComponent>,
    private tarefasGeralService: TarefasGeralService,
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public dataDialog: { clienteUuid: string }
  ) {}

  setPesquisaRapida(str: string) {
    this.pesquisaRapida = str;
  }
  setPaginationOptions(paginationOptions: PaginationOptions) {
    this.paginationOptions = paginationOptions;
  }
  setClienteSelected(uuid: string) {
    this.clienteSelected = uuid;
  }
  fecha() {
    this.dialogRef.close(this.clienteSelected);
  }

  seleciona() {
    this.tarefasGeralService.setClienteUuid(this.clienteSelected);
    this.event.emit(this.clienteSelected);
  }

  ngOnInit(): void {
    this.httpService.get<ICliente[]>('/cliente/modal', '/cliente').subscribe({
      next: (resposta) => {
        this.data = resposta;
      },
    });
  }

  tableOptions: ITableSchema = {
    labelOptions: [
      {
        label: 'Nome',
        objectName: 'nome',
      },
      {
        label: 'Sobrenome',
        objectName: 'sobrenome',
      },
      {
        label: 'Cargo',
        objectName: 'cargo',
      },
      {
        label: 'Setor',
        objectName: 'setor',
      },
      {
        label: 'Minimo Faturamento',
        objectName: 'minFaturamento',
      },
      {
        label: 'Maximo Faturamento',
        objectName: 'maxFaturamento',
      },
      {
        label: 'Telefone',
        objectName: 'telefone',
      },
      {
        label: 'Telefone 2',
        objectName: 'telefone2',
      },
      {
        label: 'E-mail',
        objectName: 'email',
      },
    ],
    optionsTable: {
      length: '20',
      pageSize: '20',
      pagination: true,
    },
  };
}
