import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableGridModule } from 'src/app/components/table/table.module';
import { OportunidadesGeralComponent } from './geral.component';
import { InputModule } from 'src/app/components/form/input/input.module';
import { SelectModule } from 'src/app/components/form/select/select.module';
import { LabelModule } from 'src/app/components/form/label/label.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { ModalGeraCompromissoComponent } from './modal-gera-compromisso/modal-gera-compromisso.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClienteModule } from '../../cliente/cliente.module';
import { CompromissoFormComponent } from 'src/app/components/modal/acoes-cliente/compromisso-form/compromisso-form.component';
import { CompromissoFormModule } from 'src/app/components/modal/acoes-cliente/compromisso-form/compromisso-form.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [OportunidadesGeralComponent, ModalGeraCompromissoComponent],
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
    MatDividerModule,
  ],
  exports: [OportunidadesGeralComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
})
export class OportunidadesGeralModule {}
