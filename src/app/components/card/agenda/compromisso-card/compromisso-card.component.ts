import { Component, Input } from '@angular/core';
import {
  CalendarioHorario,
  Compromisso,
} from 'src/app/pages/agenda/calendario';

@Component({
  selector: 'app-compromisso-card',
  templateUrl: './compromisso-card.component.html',
  styleUrls: ['./compromisso-card.component.scss'],
})
export class CompromissoCardComponent {
  @Input() calendarioHorario!: CalendarioHorario;
  @Input() length!: number;
}
