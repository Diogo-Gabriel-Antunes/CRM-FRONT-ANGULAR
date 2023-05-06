import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsComponent } from './leads.component';
import { CabecalhosComponent } from './cabecalhos/cabecalhos.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputDateModule } from 'src/app/components/form/input-date/input-date.module';
import { LabelModule } from 'src/app/components/form/label/label.module';
import { SelectModule } from 'src/app/components/form/select/select.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DataUtilService } from 'src/app/Commons/utils/data-util.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    LeadsComponent,
    CabecalhosComponent,
    FiltrosComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    InputDateModule,
    LabelModule,
    SelectModule,
    MatIconModule,
    RouterModule,
    NgxMaskDirective,
    NgxMaskPipe,
    DragDropModule,
  ],
  exports: [LeadsComponent],
  providers: [DataUtilService, provideNgxMask()],
})
export class LeadsModule {}
