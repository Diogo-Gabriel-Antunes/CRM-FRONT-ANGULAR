import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { FormsModule } from '@angular/forms';
import { LabelModule } from 'src/app/components/form/label/label.module';
import { InputModule } from 'src/app/components/form/input/input.module';
import { SelectModule } from 'src/app/components/form/select/select.module';
import { HttpClientModule } from '@angular/common/http';
import { InputHoraModule } from 'src/app/components/form/input-hora/input-hora.module';
import { InputDateModule } from 'src/app/components/form/input-date/input-date.module';
import { MatIconModule } from '@angular/material/icon';
import { AgendaTimelineComponent } from 'src/app/components/agenda-timeline/agenda-timeline.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CompromissoCardComponent } from 'src/app/components/card/agenda/compromisso-card/compromisso-card.component';
import { TarefaComponent } from 'src/app/components/card/agenda/compromisso-card/tarefa/tarefa.component';
import { OportunidadeComponent } from 'src/app/components/card/agenda/compromisso-card/oportunidade/oportunidade.component';
@NgModule({
  declarations: [
    AgendaComponent,
    AgendaTimelineComponent,
    CompromissoCardComponent,
    TarefaComponent,
    OportunidadeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputHoraModule,
    InputModule,
    SelectModule,
    InputDateModule,
    LabelModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
  ],
  exports: [AgendaComponent],
})
export class AgendaModule {}
