import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { AcoesClienteComponent } from '../../modal/acoes-cliente/acoes-cliente.component';
import { EditarClienteComponent } from '../../modal/cliente/editar-cliente/editar-cliente.component';

@Component({
  selector: 'app-clientecard',
  templateUrl: './clientecard.component.html',
  styleUrls: ['./clientecard.component.scss'],
})
export class ClientecardComponent {
  @Input() clientes?: ICliente[];
  clientUuid!: string;
  constructor(
    public dialog: MatDialog,
  ) {}

  openDialog(clienteUuid: string) {
    const dialogRef = this.dialog.open(AcoesClienteComponent, {
      width: '1000px',
      height: '500px',
      data: {
        clienteUuid: clienteUuid,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEditar(clienteUuid: string) {
    const dialogRef = this.dialog.open(EditarClienteComponent, {
      width: '1200px',
      height: '650px',
      data: {
        clienteUuid: clienteUuid,
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (resposta) => {
        console.log(resposta);
      },
    });
  }
}
