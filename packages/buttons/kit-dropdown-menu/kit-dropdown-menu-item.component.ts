import { Component, HostBinding, HostListener, Inject, Input, OnInit, Optional } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentDropdownMenuItem, KitComponentStyle } from '@ngx-kit/core';

import { KitDropdownMenuComponent } from './kit-dropdown-menu.component';

@Component({
  selector: 'kit-dropdown-menu-item,[kit-dropdown-menu-item],[kitDropdownMenuItem]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitDropdownMenuItemComponent implements OnInit {

  @Input() kitDropdownMenuItem: any;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  @HostListener('click') click(event: MouseEvent) {
    this.menu.itemClick.emit(event);
    this.menu.close();
  }

  constructor(private styler: StylerComponent,
              @Inject(kitComponentDropdownMenuItem) private style: KitComponentStyle,
              @Optional() private menu: KitDropdownMenuComponent) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}