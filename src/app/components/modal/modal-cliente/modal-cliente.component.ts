import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableClienteComponent } from './table-cliente/table-cliente.component';
import { HttpService } from 'src/app/api/http/http.service';
import { ICliente } from 'src/app/Interfaces/ICliente';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.scss'],
})
export class ModalClienteComponent {
  @Input() clienteUuid!: string;
  cliente!: ICliente;
  clienteNome!: string;
  @Output() valueChange = new EventEmitter<any>();
  constructor(private dialog: MatDialog, private httpService: HttpService) {}

  openDialong() {
    const dialogRef = this.dialog.open(TableClienteComponent, {
      width: '1680px',
      height: '800px',
    });

    dialogRef.afterClosed().subscribe({
      next: (resposta) => {
        this.httpService
          .get<ICliente>(`/cliente/${resposta}`, '/cliente')
          .subscribe({
            next: (cliente) => {
              this.cliente = cliente;
              this.clienteUuid = cliente.uuid!;
              this.clienteNome = cliente.nome!;
              this.onChange();
            },
          });
      },
    });
  }

  @Output()
  onChange() {
    this.valueChange.emit(this.clienteUuid);
  }
}
