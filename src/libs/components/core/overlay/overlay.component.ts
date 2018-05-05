import { AnimationEvent, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair,
  Overlay
} from '@angular/cdk/overlay';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import {
  Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { fadeIn, fadeOut } from '@ng-tangram/animate/fading';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

import { getPositionClassName, NtOverlayPosition, OVERLAY_POSITIONS } from './overlay-positions';


export declare type NtOverlayTriggerType = '' | 'hover' | 'click';

@Component({
  selector: 'nt-overlay, [nt-overlay]',
  templateUrl: 'overlay.component.html',
  animations: [
    trigger('fade', [
      transition('void => *', fadeIn(.15)),
      transition('* => void', fadeOut(.15))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class NtOverlayComponent {

  private _isOpen = false;
  private _isMouseIn = false;

  private _origin: CdkOverlayOrigin;
  private _position: NtOverlayPosition = 'bottomLeft';
  private _positionPairs = OVERLAY_POSITIONS[this._position];
  private _paddingClass = getPositionClassName(this._positionPairs[0]);
  private _arrow = false;
  private _noSpacing = false;
  private _trigger: NtOverlayTriggerType = '';
  private _overlayClass = '';
  private _fixed = false;

  private _closeEvent = new EventEmitter<any>();
  private _positionChange = new EventEmitter<string>();

  get isOpen() { return this._isOpen; }
  get isMouseIn() { return this._isMouseIn; }

  @Input()
  set origin(value: CdkOverlayOrigin) { this._origin = value; }
  get origin() { return this._origin; }

  @Input()
  set position(value: NtOverlayPosition) { this._position = value; this._setPosition(); }
  get positions() { return this._positionPairs; }

  get paddingClass() { return this._paddingClass; }

  @Input()
  set fixed(value: boolean) { this._fixed = coerceBooleanProperty(value); this._setPosition(); }
  get fixed() { return this._fixed; }

  @Input()
  set arrow(value: boolean) { this._arrow = coerceBooleanProperty(value); }
  get arrow() { return this._arrow; }

  @Input()
  set noSpacing(value: boolean) { this._noSpacing = coerceBooleanProperty(value); }
  get noSpacing() { return this._noSpacing; }

  @Input()
  set trigger(value: NtOverlayTriggerType) { this._trigger = value; }
  get trigger() { return this._trigger; }

  @Input()
  set overlayClass(value: string) { this._overlayClass = value; }
  get overlayClass() { return this._overlayClass; }

  @ViewChild(CdkConnectedOverlay) cdkConnectedOverlay: CdkConnectedOverlay;

  @Output() afterOpen = new EventEmitter<any>();
  @Output() afterClosed = new EventEmitter<any>();

  @Output() beforeOpen = new EventEmitter<any>();
  @Output() beforeClosed = new EventEmitter<any>();
  @Output() positionChange = new EventEmitter<ConnectedOverlayPositionChange>();

  // animationStateChanged = new EventEmitter<AnimationEvent>();

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef) {

    this._closeEvent
      .debounceTime(100)
      .filter(_ => this._isMouseIn === false)
      .subscribe(_ => this.hide());

    this._positionChange
      .filter(position => position !== this._paddingClass)
      .subscribe((position: any) => {

        const pane = this.cdkConnectedOverlay.overlayRef.overlayElement.querySelector('.nt-overlay-container');
        this._paddingClass && this._renderer.removeClass(pane, this._paddingClass);
        this._paddingClass = position;
        this._renderer.addClass(pane, this._paddingClass);
      });
  }

  private _setPosition() {
    this._positionPairs = this.fixed ?
      OVERLAY_POSITIONS[this._position].slice(0, 1) :
      OVERLAY_POSITIONS[this._position];

    this._paddingClass = getPositionClassName(this._positionPairs[0]);
  }

  private getPosition(value: NtOverlayPosition) {
    return this.fixed ? OVERLAY_POSITIONS[value].slice(0, 1) : OVERLAY_POSITIONS[value];
  }

  show() {
    this._isOpen = true;
    // this.opened.next();
  }

  hide() {
    this._isOpen = false;
    // this.closed.next();
  }

  click() {
    if (this.trigger === 'click') {
      this.isOpen ? this.hide() : this.show();
    }
  }

  onOverlayPositionChange(event: ConnectedOverlayPositionChange) {
    this._positionChange.next(getPositionClassName(event.connectionPair));
  }

  onMouseEnter() {
    if (this.trigger === 'hover') {
      this._isMouseIn = true;
      this.show();
    }
  }

  onMouseLeave() {
    if (this.trigger === 'hover') {
      this._closeEvent.next(this._isMouseIn = false);
    }
  }

  onAnimationStart(event: AnimationEvent): void {
    if (event.toState === null) {
      this.beforeOpen.next();
    } else if (event.toState === 'void') {
      this.beforeClosed.next();
    }
  }


  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === null) {
      this.afterOpen.next();
    } else if (event.toState === 'void') {
      this.afterClosed.next();
    }
  }
}
