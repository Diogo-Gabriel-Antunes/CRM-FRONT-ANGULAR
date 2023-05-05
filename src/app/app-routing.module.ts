import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { LoginComponent } from './security/login/login.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { AuthGuardGuard } from './security/auth-guard.guard';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { OportunidadesGeralComponent } from './pages/oportunidades/geral/geral.component';
import { TarefasGeralComponent } from './pages/tarefas/tarefas-geral/tarefas-geral.component';
import { FunilGeralComponent } from './pages/funil/funil-geral/funil-geral.component';
import { CampanhaGeralComponent } from './pages/campanha/campanha-geral/campanha-geral.component';
import { LeadsComponent } from './pages/leads/leads.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'cliente',
        component: ClienteComponent,
        canActivate: [AuthGuardGuard],
      },

      {
        path: 'configuracoes',
        component: ConfiguracoesComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'agenda',
        component: AgendaComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'oportunidades/geral',
        component: OportunidadesGeralComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'tarefas/geral',
        component: TarefasGeralComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'funil/geral',
        component: FunilGeralComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'campanha/geral',
        component: CampanhaGeralComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'leads',
        component: LeadsComponent,
        canActivate: [AuthGuardGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
