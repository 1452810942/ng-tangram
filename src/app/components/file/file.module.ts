import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NT_UPLOAD_INTERCEPTOR } from '@ng-tangram/components/upload';
import { NtFileModule } from '@ng-tangram/components/file';
import { NtFormsModule } from '@ng-tangram/components/forms';
import { NtIconModule } from '@ng-tangram/components/icon';
import { NtExampleModule } from '@ng-tangram/example';

import { DemoFileBasciComponent } from './demos/basic';
import { FileDocumentComponent } from './file.component';
import { FileUploadInterceptor } from './interceptor';

@NgModule({
  imports: [
    CommonModule,
    NtExampleModule,
    FormsModule,
    ReactiveFormsModule,
    NtFileModule,
    NtIconModule,
    NtFormsModule,
    RouterModule.forChild([
      { path: '', component: FileDocumentComponent }
    ])
  ],
  declarations: [FileDocumentComponent, DemoFileBasciComponent],
  providers: [
    { provide: NT_UPLOAD_INTERCEPTOR, useClass: FileUploadInterceptor }
  ]
})
export class FileDocumentModule { }