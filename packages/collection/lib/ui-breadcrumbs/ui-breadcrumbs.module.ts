import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitRefModule } from '@ngx-kit/core';
import { UiBreadcrumbsItemComponent } from './ui-breadcrumbs-item/ui-breadcrumbs-item.component';
import { UiBreadcrumbsComponent } from './ui-breadcrumbs/ui-breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiBreadcrumbsComponent,
    UiBreadcrumbsItemComponent,
  ],
  exports: [
    KitRefModule,
    UiBreadcrumbsComponent,
    UiBreadcrumbsItemComponent,
  ],
})
export class UiBreadcrumbsModule {
}
