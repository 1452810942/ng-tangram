import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'example-slider-basic',
  template: `
    <nt-slider [formControl]="control" (input)="inputValue = $event.value"></nt-slider>
  `
})
export class ExampleSliderBasicComponent {
  inputValue: number = 5;
  control = new FormControl(5);
 }
