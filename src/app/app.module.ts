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
  MAT_DATE_FORMATS,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
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
import { TableComponent } from './components/general-table/table/table.component';
import { ItemTableComponent } from './components/general-table/item-table/item-table.component';
import { AddEditItemTableComponent } from './components/general-table/add-edit-item-table/add-edit-item-table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import {FormaTwoTableComponent} from './components/formatwo/formatwo-table/formatwo-table.component';
import {FormatFourTableComponent} from './components/formatfour/formatfour-table/formatfour-table.component';
import {FormaThreeTableComponent} from './components/formathree/formathree-table/formathree-table.component';
import {FormaTwobTableComponent} from './components/formatwob/formatwob-table/formatwob-table.component';
import {CoverageTableComponent} from './components/coverage/coverage-table/coverage-table.component';
import {FormaTwoItemComponent} from './components/formatwo/formatwo-item/formatwo-item.component';
import {NewFormatwoComponent} from './components/formatwo/new-formatwo/new-formatwo.component';

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
    TableComponent,
    ItemTableComponent,
    AddEditItemTableComponent,
    PaginationComponent,
    FormaTwoTableComponent,
    FormatFourTableComponent,
    FormaThreeTableComponent,
    FormaTwobTableComponent,
    CoverageTableComponent,
    FormaTwoItemComponent,
    NewFormatwoComponent,
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
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [NewBeneficiaryComponent, NewFormatwoComponent],
  providers: [
    { provide: DateAdapter, useClass: MyDateAdapter},
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ]
})
export class AppModule { }
