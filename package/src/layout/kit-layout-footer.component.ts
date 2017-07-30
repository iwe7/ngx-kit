import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentLayoutFooter } from '../core/meta/tokens';

@Component({
  selector: 'kit-layout-footer,[kitLayoutFooter]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutFooterComponent implements OnInit {
  @Input() kitLayoutFooter: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutFooter) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}