import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { HttpService } from 'src/app/api/http/http.service';
import { ClienteService } from 'src/app/pages/cliente/cliente.service';

@Component({
  selector: 'app-proposta-form-modal',
  templateUrl: './proposta-form-modal.component.html',
  styleUrls: ['./proposta-form-modal.component.scss'],
})
export class PropostaFormModalComponent {
  statusProposta: IOptions[] = this.clienteService.getStatusProposta();
  statusPropostaSelected!: string;
  dataProposta!: string;
  valorProposta!: string;
  @Input() clientUuid!: string;
  constructor(
    private clienteService: ClienteService,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {}

  setDataProposta(dataProposta: string) {
    this.dataProposta = dataProposta;
  }
  setStatusDaProposta(status: string) {
    this.statusPropostaSelected = status;
  }

  createProposta() {
    const dto: DTO = {
      statusDaProposta: this.statusPropostaSelected,
      dataProposta: this.dataProposta,
      cliente: { uuid: this.clientUuid },
      orcamento: this.valorProposta,
    };

    this.httpService.post('/proposta', dto, '/cliente').subscribe({
      next: (resposta) => {
        this.snackBar.open('Proposta Criada com sucesso');
      },
    });
  }
}

interface DTO {
  statusDaProposta: string;
  dataProposta: string;
  orcamento: string;
  cliente: ICliente;
}
