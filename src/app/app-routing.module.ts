import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ApplicationComponent} from './components/application/application.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'application', component: ApplicationComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
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
