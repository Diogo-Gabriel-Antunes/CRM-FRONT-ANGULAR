import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';

import { MenuModule } from './components/menu/menu.module';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './security/login/login.component';
import { TokenInterceptor } from './security/token.interceptor';
import { InputModule } from './components/form/input/input.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { SelectModule } from './components/form/select/select.module';

import { CommonModule } from '@angular/common';
import {
  MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { SuccessComponent } from './components/alerts/success/success.component';
import { LabelModule } from './components/form/label/label.module';
import { InputHoraModule } from './components/form/input-hora/input-hora.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ConfiguracoesModule } from './pages/configuracoes/configuracoes.module';
import { InputDateModule } from './components/form/input-date/input-date.module';
import { AgendaModule } from './pages/agenda/agenda.module';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { OportunidadesGeralModule } from './pages/oportunidades/geral/geral.module';
import { TableGridModule } from './components/table/table.module';
import { ClienteModule } from './pages/cliente/cliente.module';
import { TarefasGeralModule } from './pages/tarefas/tarefas-geral/tarefas-geral.module';
import { FunilGeralModule } from './pages/funil/funil-geral/funil-geral.module';
import { CampanhaGeralModule } from './pages/campanha/campanha-geral/campanha-geral.module';
import { InserirClienteModule } from './components/modal/cliente/inserir-cliente/inserir-cliente.module';
import { LeadsModule } from './pages/leads/leads.module';
import { InputValorCurrencyComponent } from './components/form/input-valor-currency/input-valor-currency.component';
import { InputValorCurrencyModule } from './components/form/input-valor-currency/input-valor-currency.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    SuccessComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    ConfiguracoesModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatSidenavModule,
    FormsModule,
    InputModule,
    LabelModule,
    MatDialogModule,
    SelectModule,
    InputHoraModule,
    NgxMaskDirective,
    MatBottomSheetModule,
    MatButtonToggleModule,
    InputDateModule,
    AgendaModule,
    MatTableModule,
    CdkTableModule,
    TableGridModule,
    LeadsModule,
    InputValorCurrencyModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    {
      provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
      useValue: {},
    },
    provideNgxMask(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
