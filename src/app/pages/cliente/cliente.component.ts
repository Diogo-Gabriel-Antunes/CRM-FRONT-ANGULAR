import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { HttpService } from 'src/app/api/http/http.service';
import { InserirClienteComponent } from 'src/app/components/modal/cliente/inserir-cliente/inserir-cliente.component';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss', '../../app.component.scss'],
})
export class ClienteComponent implements OnInit {
  pesquisaRapida!: string;
  @Input() clientes!: ICliente[];

  setPesquisaRapida(str: string) {
    this.pesquisaRapida = str;
  }
  constructor(
    private http: HttpService,
    private dialog: MatDialog,
    private clienteService: ClienteService
  ) {}

  openDialogInserir() {
    const dialogRef = this.dialog.open(InserirClienteComponent, {
      width: '1200px',
      height: '650px',
      data: {
        refresh: this.getClientes,
      },
    });

    dialogRef.afterClosed().subscribe({
      next: () => {
        this.getClientes();
      },
    });
  }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getCliente().subscribe({
      next: (resposta) => {
        this.setClientes(resposta);
      },
    });
  }

  setClientes(clientes: ICliente[]) {
    this.clientes = clientes;
  }
}
