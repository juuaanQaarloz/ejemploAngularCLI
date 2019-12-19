import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: '', 
    component: SearchComponent,
    children: [
      { path: '', component: SearchCriteriaComponent },
      { path: 'results', component: SearchResultsComponent },
      { path: 'detail/:id', component: SearchDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
