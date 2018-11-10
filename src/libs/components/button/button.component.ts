import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, ViewEncapsulation } from '@angular/core';

export declare type NtButtonStyle = '' | 'hollow' | 'clear';
export declare type NtButtonColor = '' | 'primary' | 'secondary' | 'success' | 'warning' | 'alert';
export declare type NtButtonSize = '' | 'tiny' | 'small' | 'large' | 'medium';

@Component({
  selector: '[nt-button]',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': '["button", color, style, size, class].join(" ")',
    '[class.expanded]': 'expanded'
  }
})
export class NtButtonComponent {

  private _style: NtButtonStyle = '';

  private _expanded: boolean = false;

  _clicked = false;

  @Input() class: string = '';

  @Input() color: NtButtonColor = '';

  @Input() size: NtButtonSize = '';

  @Input('nt-button')
  set button(value: NtButtonStyle) {
    if (this._validStyle(value)) {
      this._style = value;
    }
  }

  @Input()
  set style(value: NtButtonStyle) { this._style = value; }
  get style() { return this._style; }

  @Input()
  set expanded(value: boolean) { this._expanded = coerceBooleanProperty(value); }
  get expanded() { return this._expanded; }

  private _validStyle(value: string) {
    return ['', 'hollow', 'clear'].indexOf(value) > -1;
  }
}
