import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalClienteComponent } from './modal-cliente.component';
import { FormsModule } from '@angular/forms';
import { LabelModule } from '../../form/label/label.module';
import { InputModule } from '../../form/input/input.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TableClienteComponent } from './table-cliente/table-cliente.component';
import { TableGridModule } from '../../table/table.module';

@NgModule({
  declarations: [ModalClienteComponent, TableClienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    LabelModule,
    InputModule,
    MatIconModule,
    MatDialogModule,
    TableGridModule,
  ],
  exports: [ModalClienteComponent],
})
export class ModalClienteModule {}
