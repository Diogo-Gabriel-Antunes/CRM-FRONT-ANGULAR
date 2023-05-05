import { Component, Input } from '@angular/core';
import { CalendarioHorario } from 'src/app/pages/agenda/calendario';

@Component({
  selector: 'app-oportunidade',
  templateUrl: './oportunidade.component.html',
  styleUrls: ['./oportunidade.component.scss'],
})
export class OportunidadeComponent {
  @Input() calendarioHorario!: CalendarioHorario;
}
