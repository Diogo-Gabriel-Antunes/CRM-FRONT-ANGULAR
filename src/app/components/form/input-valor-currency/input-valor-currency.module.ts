import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputValorCurrencyComponent } from './input-valor-currency.component';
import { FormsModule } from '@angular/forms';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  NgxMaskService,
  provideNgxMask,
} from 'ngx-mask';

@NgModule({
  declarations: [InputValorCurrencyComponent],
  imports: [CommonModule, FormsModule, NgxMaskPipe, NgxMaskDirective],
  exports: [InputValorCurrencyComponent],
  providers: [provideNgxMask()],
})
export class InputValorCurrencyModule {}
