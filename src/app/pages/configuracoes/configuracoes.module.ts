import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfiguracoesComponent } from './configuracoes.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { InputModule } from 'src/app/components/form/input/input.module';
import { LabelModule } from 'src/app/components/form/label/label.module';
import { InputHoraModule } from 'src/app/components/form/input-hora/input-hora.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConfiguracoesService } from './configuracoes.service';
import { TokenInterceptor } from 'src/app/security/token.interceptor';

@NgModule({
  declarations: [ConfiguracoesComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
    InputModule,
    LabelModule,
    InputHoraModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  exports: [ConfiguracoesComponent],
  providers: [
    ConfiguracoesService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class ConfiguracoesModule {}
