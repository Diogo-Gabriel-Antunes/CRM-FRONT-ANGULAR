import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ClienteComponent } from '../cliente/cliente.component';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from 'src/app/components/form/input/input.component';
import { InputModule } from 'src/app/components/form/input/input.module';
import { FormModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { ClientecardComponent } from 'src/app/components/card/clientecard/clientecard.component';
import { MatCardModule } from '@angular/material/card';
import { AcoesClienteComponent } from 'src/app/components/modal/acoes-cliente/acoes-cliente.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { OportunidadesFormModalComponent } from 'src/app/components/modal/acoes-cliente/oportunidades-form-modal/oportunidades-form-modal.component';
import { PropostaFormModalComponent } from 'src/app/components/modal/acoes-cliente/proposta-form-modal/proposta-form-modal.component';
import { LabelModule } from 'src/app/components/form/label/label.module';
import { LabelComponent } from 'src/app/components/form/label/label.component';
import { SelectModule } from 'src/app/components/form/select/select.module';
import { SelectComponent } from 'src/app/components/form/select/select.component';
import { ClienteModule } from '../cliente/cliente.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/security/token.interceptor';
import { ConfiguracoesModule } from '../configuracoes/configuracoes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfiguracoesModule,
    HomeRoutingModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatTabsModule,
    LabelModule,
    SelectModule,
    InputModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
})
export class HomeModule {}
