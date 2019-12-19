import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    SearchComponent,
    SearchCriteriaComponent,
    SearchResultsComponent,
    SearchDetailComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class SearchModule { }
