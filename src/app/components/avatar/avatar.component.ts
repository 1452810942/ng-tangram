
import { Component } from '@angular/core';

@Component({
  selector: 'nt-avatar-document',
  templateUrl: 'avatar.component.md'
})
export class AvatarDocumentComponent {
  api = require('!!raw-loader!libs/components/avatar/README.md').default;
  basicCode = require('!!raw-loader!./examples/basic').default;
  sizeCode = require('!!raw-loader!./examples/size').default;
  shapeCode = require('!!raw-loader!./examples/shape').default;
}
