import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NtOverlayModule } from '@ng-tangram/components/core';

import { NtDropdownPaneComponent } from './dropdown-pane.component';
import { NtDropdownComponent } from './dropdown.component';

@NgModule({
  imports: [CommonModule, NtOverlayModule],
  entryComponents: [NtDropdownComponent],
  exports: [NtDropdownComponent, NtDropdownPaneComponent],
  declarations: [NtDropdownComponent, NtDropdownPaneComponent]
})
export class NtDropdownModule { }
