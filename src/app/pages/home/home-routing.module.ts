import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { ConfiguracoesComponent } from '../configuracoes/configuracoes.component';
import { AuthGuardGuard } from 'src/app/security/auth-guard.guard';
import { AgendaComponent } from '../agenda/agenda.component';
import { OportunidadesGeralComponent } from '../oportunidades/geral/geral.component';
import { TarefasGeralComponent } from '../tarefas/tarefas-geral/tarefas-geral.component';
import { CampanhaGeralComponent } from '../campanha/campanha-geral/campanha-geral.component';
import { LeadsComponent } from '../leads/leads.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardGuard] },
  {
    path: 'cliente',
    component: ClienteComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'oportunidade/geral',
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
    component: TarefasGeralComponent,
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
    path: 'campanha/geral',
    component: CampanhaGeralComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'leads',
    component: LeadsComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
