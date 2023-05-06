import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataUtilService } from 'src/app/Commons/utils/data-util.service';
import { IOptions } from 'src/app/Interfaces/IOptions';
import { ClienteService } from 'src/app/pages/cliente/cliente.service';

@Component({
  selector: 'app-compromisso-form',
  templateUrl: './compromisso-form.component.html',
  styleUrls: ['./compromisso-form.component.scss'],
})
export class CompromissoFormComponent {
  fimDoCompromisso!: string;
  inicioDoCompromisso!: string;
  mesOptions = this.clienteService.optionsMes;
  mesSelected!: string;
  horariosOptions = this.clienteService.horariosOptions;
  horarioSelected!: string;
  diaDoMes: IOptions[] = this.clienteService.diaDoMes;
  diaSelected!: string;
  @Input() tipoIntegracao!: string;
  @Output() emitindoCompromisso = new EventEmitter<any>();
  constructor(
    private clienteService: ClienteService,
    private dataUtils: DataUtilService
  ) {}
  setFimDoCompromisso(str: string) {
    this.fimDoCompromisso = str;
    this.emitCompromisso();
  }
  setDiaSelected(str: string) {
    this.diaSelected = str;
    this.emitCompromisso();
  }
  setInicioDoCompromisso(str: string) {
    this.inicioDoCompromisso = str;
    this.emitCompromisso();
  }
  setMesSelected(str: string) {
    this.mesSelected = str;
    this.emitCompromisso();
  }
  setHorarioSelected(str: string) {
    this.horarioSelected = str;
    this.emitCompromisso();
  }

  getDisabled() {
    if (this.tipoIntegracao === 'COMPROMISSO') {
      return false;
    } else {
      return true;
    }
  }

  emitCompromisso() {
    let compromisso = {
      inicioCompromisso: this.inicioDoCompromisso
        ? this.dataUtils.FormataData(this.inicioDoCompromisso)
        : null,
      fimCompromisso: this.fimDoCompromisso
        ? this.dataUtils.FormataData(this.fimDoCompromisso)
        : null,
      mes: this.mesSelected,
      horario: this.horarioSelected,
      diaDoMes: this.diaSelected,
    };

    this.emitindoCompromisso.emit(compromisso);
  }
}
