# Focus-listener

Handles focus/blur from a group of elements.

If focus moves among elements in a defined group, blur event will not be fired. 


## Example

In `ui-autocomplete` we heed to omit blur event, if user click on a suggestion.

We provide `KitFocusListenerService` in the directive, register main input and `ui-autocomplete-options` element in the service and subscribe on `blur` event. 

* collection:modal - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-autocomplete), [demo](https://ngx-kit.com/collection/module/ui-autocomplete)
