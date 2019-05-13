import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { NtCheckboxChange } from '@ng-tangram/components';

@Component({
  selector: 'example-checkbox-basic',
  template: `
    <nt-checkbox checked="true">basic</nt-checkbox>
  `
})
export class ExampleCheckboxBasicComponent { }
