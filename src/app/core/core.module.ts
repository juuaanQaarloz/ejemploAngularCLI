import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from './guards/auth.guard';
import {mockBackendProvider} from './mock/mock-backend';
import {TrackScrollDirective} from './directives/track-scroll.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TrackScrollDirective
  ],
  exports: [
    TrackScrollDirective
  ],
  providers: [
    AuthGuard,
    mockBackendProvider
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
