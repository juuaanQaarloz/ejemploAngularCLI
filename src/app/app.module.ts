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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
