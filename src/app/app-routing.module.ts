import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationComponent} from './components/application/application.component';
import {MenuPageComponent} from './components/menu-page/menu-page.component';
import { SearchCriteriaComponent } from './components/search/search-criteria/search-criteria.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchDetailComponent } from './components/search/search-detail/search-detail.component';

const routes: Routes = [
    { path: 'application2', component: ApplicationComponent },
    { path: 'search', component: SearchCriteriaComponent },
    { path: 'search/results', component: SearchResultsComponent },
    { path: 'search/detail/:id', component: SearchDetailComponent },
    { path: 'menuPage', component: MenuPageComponent },
    { path: '', redirectTo: '/menuPage', pathMatch: 'full' },
    { path: '**', redirectTo: '/menuPage' }
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
