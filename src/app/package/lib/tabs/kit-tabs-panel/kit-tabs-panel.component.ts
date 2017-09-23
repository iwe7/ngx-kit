import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'kit-tabs-panel,[kitTabsPanel]',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTabsPanelComponent implements OnInit {
  @HostBinding('class') hostClass: string;

  @Input() kitTabsPanel: null;

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
