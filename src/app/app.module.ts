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
  entryComponents: [NewBeneficiaryComponent],
  providers: [
    { provide: DateAdapter, useClass: MyDateAdapter},
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ]
})
export class AppModule { }
