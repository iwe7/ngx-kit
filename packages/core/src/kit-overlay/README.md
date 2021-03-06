# Overlay

Service for hosting elements/components in a layer is above of the page content.

## Scope
 
* Modals
* Tooltips
* Dropdowns


## Usage

### Use `*kitOverlay` directive

Any element/component could be projected.

```html
<div *kitOverlay="display">
  Some content
</div>
```

`*kitOverlay` - expects a boolean expression, like `*ngIf`.

### Use `KitOverlayService`

```typescript
const ref = this.overlayService.hostComponent({component: DemoOverlayComponent});
```


### Positioning

In base example `<div>` just will be projected to `<kit-overlay-host>`. You can use css for positioning.

```html
<div *kitOverlay="display" style="position: fixed; top: 100px; left: 50%; transform: translateX(-50%)">
  Some content
</div>
```

Use `KitOverlayPositionService` for more advanced cases.

`kitOverlayPosition` just provides `KitOverlayPositionService` on element and pass params.

```html
<button #anchor>Dropdown toggle</button>
<div *kitOverlay="display" [kitOverlayPosition]="{type: 'dropdown', anchor: anchor}">
  <ul>
    <li>Item1</li>
    <li>Item2</li>
    <li>Item3</li>
  </ul>
</div>
```

Or provide `KitOverlayPositionService` on a component. Also needs `KitStyleService` for applying styles.

```ts
@Component({
  selector: 'app-popup',
  providers: [
    KitOverlayPositionService, 
    KitStyleService,
  ],
  ...
})
export class AppPopupComponent {
  constructor(private overlayPosition: KitOverlayPositionService) {
    this.overlayPosition.type = 'side';
  }
  
  ngOnChanges() {
    this.overlayPosition.anchor = this.anchor;
    this.overlayPosition.reposition();
    ...
  }
...
```

```html
<button (click)="display = true" #anchor>Show popup</button>
<app-popup *kitOverlay="display" [anchor]="anchor">
  Popup content
</app-popup>
``` 

#### `type`

* `dropdown`
* `side`

#### `position`

* `top`
* `bottom`
* `left`
* `right`
* `top-left`
* `top-right`
* `bottom-left`
* `bottom-right`
* `left-top`
* `left-bottom`
* `right-top`
* `right-bottom`


### Data-binding

For service-hosted components we have methods for communication with component instance.

#### input

```typescript
export class OverlayComponent {
  @Input() field: string;
}
```

```typescript
const ref = this.overlayService.hostComponent({component: OverlayComponent});
ref.input({field: 'value'});
```

`input` method passes value to the defined field and calls `ngOnChanges` life-cycle hook (if needed).

#### output

```typescript
export class OverlayComponent {
  @Output() event = new EventEmitter<any>();
}
```

```typescript
const ref = this.overlayService.hostComponent({component: OverlayComponent});
ref.instance.event.subscribe((value: any) => {
});
```


### Host components in Lazy Modules

You could get error `No component factory found for NameOfComponent` inside Lazy Modules. To solve the problem just provide `KitOverlayService` in this module.



## Example

* collection:custom-select - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-custom-select), [demo](http://ngx-kit.com/collection/module/ui-custom-select) 
* collection:modal - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-modal), [demo](http://ngx-kit.com/collection/module/ui-modal) 
* collection:tooltip - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-tooltip), [demo](http://ngx-kit.com/collection/module/ui-tooltip) 
