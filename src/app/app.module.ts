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
import {MatDatepickerModule, MatIconModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import { CustomDatepickerComponent } from './components/custom-datepicker/custom-datepicker.component';

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
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
