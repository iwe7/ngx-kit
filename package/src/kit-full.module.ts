import { NgModule } from '@angular/core';
import { BemClassGenStrategy, ClassGenStategy, StylerModule } from '@ngx-kit/styler';
import { KitCollapseModule } from './collapse/kit-collapse.module';
import { KitCommonModule } from './common/kit-common.module';
import { KitFormsModule } from './forms/kit-forms.module';
import { KitIconsModule } from './icons/kit-icons.module';
import { KitLoadingBarModule } from './loading-bar/kit-loading-bar.module';
import { KitOverlayModule } from './overlay/kit-overlay.module';
import { KitSlideModule } from './slide/kit-slide.module';

const initableModules = [
  StylerModule,
  KitIconsModule,
  KitLoadingBarModule,
  KitOverlayModule,
];
const simpleModules = [
  KitCollapseModule,
  KitCommonModule,
  KitFormsModule,
  KitSlideModule,
];

@NgModule({
  imports: [
    StylerModule.forRoot(),
    KitIconsModule.forRoot(),
    KitLoadingBarModule.forRoot(),
    KitOverlayModule.forRoot(),
    ...simpleModules,
  ],
  declarations: [],
  providers: [
    {
      provide: ClassGenStategy,
      useClass: BemClassGenStrategy,
    },
  ],
  exports: [
    ...initableModules,
    ...simpleModules,
  ],
})
export class KitFullForRootModule {
}

@NgModule({
  imports: [
    ...initableModules,
    ...simpleModules,
  ],
  declarations: [],
  providers: [],
  exports: [
    ...initableModules,
    ...simpleModules,
  ],
})
export class KitFullModule {
}