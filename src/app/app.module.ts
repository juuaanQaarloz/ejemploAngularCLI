import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationComponent } from './components/application/application.component';
import { FieldFormComponent } from './components/field-form/field-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SectionFormComponent } from './components/section-form/section-form.component';
import { ProcessFormComponent } from './components/process-form/process-form.component';
import { ContentFormComponent } from './components/content-form/content-form.component';
import { StepFormComponent } from './components/step-form/step-form.component';
import { OperationFormComponent } from './components/operation-form/operation-form.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {ModalModule} from './components/custom-modal';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  DateAdapter,
  MAT_DATE_FORMATS, MatAutocompleteModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import { CustomDatepickerComponent } from './components/custom-datepicker/custom-datepicker.component';
import { BeneficiaryTableComponent } from './components/beneficiaries/beneficiary-table/beneficiary-table.component';
import { BeneficiaryItemComponent } from './components/beneficiaries/beneficiary-item/beneficiary-item.component';
import { NewBeneficiaryComponent } from './components/beneficiaries/new-beneficiary/new-beneficiary.component';
import {DialogModule} from './components/dialog/dialog.module';
import {MY_DATE_FORMATS, MyDateAdapter} from './core/utilities/date.adapter';
import { SearchOccupationComponent } from './components/search-occupation/search-occupation.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import {NewFormatwoComponent} from './components/beneficiaries/new-formatwo/new-formatwo.component';
import { NewAgentComponent } from './components/beneficiaries/new-agent/new-agent.component';
import {NewCountryComponent} from './components/beneficiaries/new-country/new-country.component';
import { TableComponent } from './components/table-component/table/table.component';
import { TableRowComponent } from './components/table-component/table-row/table-row.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire/questionnaire.component';
import { QuestionComponent } from './components/questionnaire/question/question.component';
import { NewRowComponent } from './components/table-component/new-row/new-row.component';
import { OptionComponent } from './components/option/option.component';
import {AutocompleteComponent} from './components/autocomplete/autocomplete.component';
import {ApplicationService} from './core/services';
import { NewPaymentComponent } from './components/beneficiaries/new-payment/new-payment.component';
import { ErrorBannerComponent } from './components/error-banner/error-banner.component';
import { CoverageComponent } from './components/coverage/coverage/coverage.component';
import { SearchCriteriaComponent } from './components/search/search-criteria/search-criteria.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchDetailComponent } from './components/search/search-detail/search-detail.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { AppConstants } from './app.constants';
import { NgxPaginationModule } from 'ngx-pagination';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    FieldFormComponent,
    SectionFormComponent,
    ProcessFormComponent,
    ContentFormComponent,
    StepFormComponent,
    OperationFormComponent,
    LoginComponent,
    CustomDatepickerComponent,
    BeneficiaryTableComponent,
    BeneficiaryItemComponent,
    NewBeneficiaryComponent,
    SearchOccupationComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MenuPageComponent,
    PaginationComponent,
    NewFormatwoComponent,
    NewAgentComponent,
    NewCountryComponent,
    TableComponent,
    TableRowComponent,
    QuestionnaireComponent,
    QuestionComponent,
    NewRowComponent,
    OptionComponent,
    AutocompleteComponent,
    NewPaymentComponent,
    AutocompleteComponent,
    ErrorBannerComponent,
    CoverageComponent,
    NewPaymentComponent,
    DocumentsComponent,
    SearchCriteriaComponent,
    SearchResultsComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    CoreModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    DialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatProgressSpinnerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [NewBeneficiaryComponent, NewFormatwoComponent, NewAgentComponent, NewCountryComponent,
    NewPaymentComponent, NewRowComponent],
  providers: [
    AppConstants,
    { provide: DateAdapter, useClass: MyDateAdapter},
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
    ]
})
export class AppModule { }
