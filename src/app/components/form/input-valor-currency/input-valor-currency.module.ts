import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputValorCurrencyComponent } from './input-valor-currency.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputValorCurrencyComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputValorCurrencyComponent],
})
export class InputValorCurrencyModule {}
