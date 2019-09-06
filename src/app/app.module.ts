import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationComponent } from './components/application/application.component';
import { FieldFormComponent } from './components/field-form/field-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrackScrollDirective } from './directives/track-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    FieldFormComponent,
    HeaderComponent,
    FooterComponent,
    TrackScrollDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
