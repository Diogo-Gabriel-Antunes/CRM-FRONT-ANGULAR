import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputHoraComponent } from './input-hora.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputHoraComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputHoraComponent],
})
export class InputHoraModule {}
