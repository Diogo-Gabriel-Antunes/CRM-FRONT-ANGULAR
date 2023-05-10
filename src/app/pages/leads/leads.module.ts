import { LOCALE_ID, NgModule } from '@angular/core';
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
import { DialogCreateLeadsTimelineComponent } from './dialog-create-leads-timeline/dialog-create-leads-timeline.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { InputModule } from 'src/app/components/form/input/input.module';
import { InputValorCurrencyModule } from 'src/app/components/form/input-valor-currency/input-valor-currency.module';
import { ModalClienteModule } from 'src/app/components/modal/modal-cliente/modal-cliente.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { DialogLeadComponent } from './cards/dialog-lead/dialog-lead.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    LeadsComponent,
    CabecalhosComponent,
    FiltrosComponent,
    CardsComponent,
    DialogCreateLeadsTimelineComponent,
    DialogLeadComponent,
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
    MatDialogModule,
    MatDividerModule,
    InputModule,
    InputValorCurrencyModule,
    ModalClienteModule,
    MatSlideToggleModule,
    FormsModule,
    MatCheckboxModule,
  ],
  exports: [LeadsComponent],
  providers: [DataUtilService, provideNgxMask()],
})
export class LeadsModule {}
