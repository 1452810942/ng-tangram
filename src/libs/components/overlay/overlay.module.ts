import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NtOverlayComponent } from './overlay.component';

@NgModule({
  imports: [CommonModule, OverlayModule],
  exports: [NtOverlayComponent],
  declarations: [NtOverlayComponent],
})
export class NtOverlayModule { }
