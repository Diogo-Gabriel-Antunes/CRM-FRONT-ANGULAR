import { Component, Input } from '@angular/core';
import { CalendarioHorario } from 'src/app/pages/agenda/calendario';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss'],
})
export class TarefaComponent {
  @Input() calendarioHorario!: CalendarioHorario;
}
