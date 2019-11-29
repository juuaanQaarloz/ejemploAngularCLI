import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {AuthGuard} from './guards/auth.guard';
import {mockBackendProvider} from './mock/mock-backend';
import {TrackScrollDirective} from './directives/track-scroll.directive';
import { OnlyGivenCharactersDirective } from './directives/only-given-characters.directive';
import { FormatCellPipe } from './pipes/format-cell.pipe';
import { StyleCellDirective } from './directives/style-cell.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TrackScrollDirective,
    OnlyGivenCharactersDirective,
    FormatCellPipe,
    StyleCellDirective
  ],
  exports: [
    TrackScrollDirective,
    OnlyGivenCharactersDirective,
    FormatCellPipe,
    StyleCellDirective
  ],
  providers: [
    AuthGuard,
    mockBackendProvider,
    CurrencyPipe
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
