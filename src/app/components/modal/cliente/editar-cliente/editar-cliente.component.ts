import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeralServiceService } from 'src/app/Commons/geral/geral-service.service';
import { ICliente } from 'src/app/Interfaces/ICliente';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { ClienteService } from 'src/app/pages/cliente/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss'],
})
export class EditarClienteComponent {
  estadoSelect = this.geralService.estadoSelect;
  nome!: string;
  sobrenome!: string;
  telefone1!: string;
  telefone2!: string;
  email!: string;
  cep!: string;
  logradouro!: string;
  estado!: string;
  pais!: string;
  cidade!: string;
  captacao!: string;
  campanhaOptions!: IOptions[];
  campanhaSelected!: string;
  funilOptions!: IOptions[];
  funilSelected!: string;
  captacaoOptions: IOptions[] = [
    {
      label: 'Funil',
      value: 'FUNIL',
    },
    { label: 'Campanha', value: 'CAMPANHA' },
  ];
  constructor(
    private geralService: GeralServiceService,
    private clienteService: ClienteService,
    @Inject(MAT_DIALOG_DATA) public data: { clienteUuid: string }
  ) {}
  ngOnInit(): void {
    this.clienteService.getOneClienteByUuid(this.data.clienteUuid).subscribe({
      next: (cliente) => {
        this.setCliente(cliente);
      },
    });
  }

  setCliente(cliente: ICliente) {
    this.setNome(cliente.nome!);
    this.setSobrenome(cliente.sobrenome!);
    this.setTelefone1(cliente.contato?.telefone!);
    this.setTelefone2(cliente.contato?.telefone2!);
    this.setEmail(cliente.contato?.email!);
    this.setCep(cliente.endereco?.cep!);
    this.setCidade(cliente.endereco?.cidade!);
    this.setEstado(cliente.endereco?.estado!);
    this.setLogradouro(cliente.endereco?.logradouro!);
    this.setPais(cliente.endereco?.pais!);
    if (cliente.captacao?.funil) {
      this.captacao = 'FUNIL';
      this.funilSelected = cliente.captacao.funil.uuid;
    } else {
      this.captacao = 'CAMPANHA';
      this.campanhaSelected = cliente.captacao?.campanha.uuid!;
    }
  }

  setNome(str: string) {
    this.nome = str;
  }
  setSobrenome(str: string) {
    this.sobrenome = str;
  }
  setTelefone1(str: string) {
    this.telefone1 = str;
  }
  setTelefone2(str: string) {
    this.telefone2 = str;
  }
  setEmail(str: string) {
    this.email = str;
  }
  setCep(str: string) {
    this.cep = str;
  }
  setLogradouro(str: string) {
    this.logradouro = str;
  }
  setEstado(str: string) {
    this.estado = str;
  }
  setPais(str: string) {
    this.pais = str;
  }
  setCidade(str: string) {
    this.cidade = str;
  }
  setFunilSelected(str: string) {
    this.funilSelected = str;
  }
  setCampanhaSelected(str: string) {
    this.campanhaSelected = str;
  }
  setCaptacao(str: string) {
    if (str === 'FUNIL') {
      this.clienteService.getFunil().subscribe({
        next: (resposta) => {
          this.funilOptions = resposta;
        },
      });
    } else if (str === 'CAMPANHA') {
      this.clienteService.getCampanhas().subscribe({
        next: (resposta) => {
          this.campanhaOptions = resposta;
        },
      });
    }
    this.captacao = str;
  }

  updateCliente() {
    var dto: ICliente = {
      uuid: this.data.clienteUuid,
      nome: this.nome,
      sobrenome: this.sobrenome,
      contato: {
        email: this.email,
        telefone: this.telefone1,
        telefone2: this.telefone2,
      },
      endereco: {
        cep: this.cep,
        cidade: this.cidade,
        estado: this.estado,
        logradouro: this.logradouro,
        pais: this.pais,
      },
      captacao: {
        campanha: { uuid: this.campanhaSelected },
        funil: { uuid: this.funilSelected },
      },
    };

    this.clienteService.updateCliente(dto, this.data.clienteUuid).subscribe({
      next: (resposta) => {
        console.log(resposta);
      },
    });
  }
}
