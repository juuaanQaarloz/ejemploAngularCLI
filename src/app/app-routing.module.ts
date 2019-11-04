import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ApplicationComponent} from './components/application/application.component';
import {AuthGuard} from './core/guards/auth.guard';
import {MenuPageComponent} from './components/menu-page/menu-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'application2', component: ApplicationComponent, canActivate: [AuthGuard]},
  {path: 'menuPage', component: MenuPageComponent},
  { path: '', redirectTo: '/menuPage', pathMatch: 'full' },
  { path: '**', redirectTo: '/menuPage'}
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
