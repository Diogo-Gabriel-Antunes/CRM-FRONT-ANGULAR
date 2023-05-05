import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from 'src/app/pages/cliente/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/api/http/http.service';

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [SelectComponent],
  providers: [ClienteService, HttpService],
})
export class SelectModule {}
