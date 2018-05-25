import {ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';

import {ToastComponent} from './toast/toast.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    ToastComponent,
  ],
  providers: [
    ToastComponent
  ],
  exports: [
    // Shared Modules
    TranslateModule,
    // Shared Components
    ToastComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA ],

})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
