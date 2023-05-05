import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDateHoursComponent } from './input-date-hours.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputDateHoursComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputDateHoursComponent],
})
export class InputDateHoursModule {}
