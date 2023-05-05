import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  clienteUuid: string;
}

@Component({
  selector: 'app-acoes-cliente',
  templateUrl: './acoes-cliente.component.html',
  styleUrls: ['./acoes-cliente.component.scss'],
})
export class AcoesClienteComponent {
  clienteUuid: string = this.data.clienteUuid;
  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogData) {}
}
