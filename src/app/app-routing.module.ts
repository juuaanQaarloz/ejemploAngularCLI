import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationComponent} from './components/application/application.component';
import {MenuPageComponent} from './components/menu-page/menu-page.component';

const routes: Routes = [
  {path: 'application2', component: ApplicationComponent},
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
