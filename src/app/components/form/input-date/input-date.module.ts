import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputDateComponent } from './input-date.component';

@NgModule({
  declarations: [InputDateComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputDateComponent],
})
export class InputDateModule {}
