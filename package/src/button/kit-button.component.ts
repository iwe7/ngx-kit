import { Component, EventEmitter, HostListener, Inject, Input, OnInit, Output, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentButton } from '../core/meta/tokens';
import { kitButtonGroupDirection } from './meta';

// @todo proxy enter listener to (action)
@Component({
  selector: 'kit-button,[kitButton]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitButtonComponent implements OnInit {
  @Output() action = new EventEmitter<any>();

  @Input() kitButton: any;

  @Output() selectedChanged = new EventEmitter<boolean>();

  private _loading = false;

  private _selected = false;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentButton) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @Input()
  set color(color: string) {
    this.styler.host.applyState({color});
  }

  @Input()
  set disabled(disabled: boolean) {
    this.styler.host.applyState({disabled});
  }

  set grouped(direction: kitButtonGroupDirection) {
    this.styler.host.applyState({grouped: direction});
  }

  @Input()
  set link(link: boolean) {
    this.styler.host.applyState({link});
  }

  @Input()
  set loading(loading: boolean) {
    this._loading = this.loading;
    this.styler.host.applyState({loading});
  }

  get selected(): boolean {
    return this._selected;
  }

  @Input()
  set selected(selected: boolean) {
    this._selected = selected;
    this.styler.host.applyState({selected});
  }

  @Input()
  set size(size: string) {
    this.styler.host.applyState({size});
  }

  ngOnInit() {
  }

  @HostListener('click')
  clickListener(event: MouseEvent) {
    if (!this._loading) {
      this.action.emit(event);
    }
  }

  pushSelected(selected: boolean) {
    this.selected = selected;
    this.selectedChanged.emit(selected);
  }
}