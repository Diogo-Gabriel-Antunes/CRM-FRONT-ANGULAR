import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompromissoFormComponent } from './compromisso-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { InputModule } from 'src/app/components/form/input/input.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LabelModule } from 'src/app/components/form/label/label.module';
import { SelectModule } from 'src/app/components/form/select/select.module';
import { InputDateHoursModule } from 'src/app/components/form/input-date-hours/input-date-hours.module';

@NgModule({
  declarations: [CompromissoFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    InputModule,
    MatIconModule,
    FormsModule,
    LabelModule,
    SelectModule,
    InputDateHoursModule,
  ],
  exports: [CompromissoFormComponent],
})
export class CompromissoFormModule {}
