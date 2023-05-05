import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableGridModule } from 'src/app/components/table/table.module';
import { InputModule } from 'src/app/components/form/input/input.module';
import { SelectModule } from 'src/app/components/form/select/select.module';
import { LabelModule } from 'src/app/components/form/label/label.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CompromissoFormModule } from 'src/app/components/modal/acoes-cliente/compromisso-form/compromisso-form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { TarefasGeralComponent } from './tarefas-geral.component';
import { CompromissoComponent } from './compromisso/compromisso.component';
import { TarefasInserirComponent } from './tarefas-inserir/tarefas-inserir.component';
import { InputDateHoursModule } from 'src/app/components/form/input-date-hours/input-date-hours.module';
import { ModalClienteModule } from 'src/app/components/modal/modal-cliente/modal-cliente.module';

@NgModule({
  declarations: [
    TarefasGeralComponent,
    CompromissoComponent,
    TarefasInserirComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableGridModule,
    InputModule,
    SelectModule,
    LabelModule,
    MatIconModule,
    MatPaginatorModule,
    MatMenuModule,
    MatToolbarModule,
    CompromissoFormModule,
    MatDialogModule,
    InputDateHoursModule,
    MatDividerModule,
    ModalClienteModule,
  ],
  exports: [TarefasGeralComponent],
})
export class TarefasGeralModule {}
