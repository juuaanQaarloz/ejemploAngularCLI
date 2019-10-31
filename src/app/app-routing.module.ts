import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ApplicationComponent} from './components/application/application.component';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'application2', component: ApplicationComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/application2', pathMatch: 'full' },
  { path: '**', redirectTo: '/application2'}
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
