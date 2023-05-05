import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClientecardComponent } from 'src/app/components/card/clientecard/clientecard.component';
import { AcoesClienteComponent } from 'src/app/components/modal/acoes-cliente/acoes-cliente.component';
import { OportunidadesFormModalComponent } from 'src/app/components/modal/acoes-cliente/oportunidades-form-modal/oportunidades-form-modal.component';
import { PropostaFormModalComponent } from 'src/app/components/modal/acoes-cliente/proposta-form-modal/proposta-form-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { InputModule } from 'src/app/components/form/input/input.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LabelModule } from 'src/app/components/form/label/label.module';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { SelectModule } from 'src/app/components/form/select/select.module';
import { TarefaFormModalComponent } from 'src/app/components/modal/acoes-cliente/tarefa-form-modal/tarefa-form-modal.component';
import { InputDateHoursModule } from 'src/app/components/form/input-date-hours/input-date-hours.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CompromissoFormComponent } from 'src/app/components/modal/acoes-cliente/compromisso-form/compromisso-form.component';
import { CompromissoFormModule } from 'src/app/components/modal/acoes-cliente/compromisso-form/compromisso-form.module';
import { InserirClienteComponent } from 'src/app/components/modal/cliente/inserir-cliente/inserir-cliente.component';
import { MatDividerModule } from '@angular/material/divider';
import { ClienteService } from './cliente.service';
import { EditarClienteComponent } from 'src/app/components/modal/cliente/editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [
    ClienteComponent,
    ClientecardComponent,
    AcoesClienteComponent,
    OportunidadesFormModalComponent,
    PropostaFormModalComponent,
    TarefaFormModalComponent,
    ClientecardComponent,
    EditarClienteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    LabelModule,
    MatDialogModule,
    SelectModule,
    InputDateHoursModule,
    InputModule,
    FormsModule,
    MatSnackBarModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatDividerModule,
    CompromissoFormModule,
  ],
  providers: [
    provideNgxMask(),
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    InserirClienteComponent,
    ClienteService,
  ],
  exports: [ClienteComponent],
})
export class ClienteModule {}
