import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCommonModule } from '../kit-common/kit-common.module';
import { KitInputValueAccessor } from './accessors/kit-input-value-accessor';
import { KitCheckDirective } from './kit-check/kit-check.directive';

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCommonModule,
  ],
  exports: [
    KitInputValueAccessor,
    KitCheckDirective,
  ],
  declarations: [
    KitInputValueAccessor,
    KitCheckDirective,
  ],
})
export class KitFormsModule {
}
