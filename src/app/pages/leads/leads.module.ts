import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsComponent } from './leads.component';
import { CabecalhosComponent } from './cabecalhos/cabecalhos.component';
import { FiltrosComponent } from './filtros/filtros.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [LeadsComponent, CabecalhosComponent, FiltrosComponent],
  imports: [CommonModule,MatDatepickerModule,MatFormFieldModule],
  exports: [LeadsComponent],
})
export class LeadsModule {}
