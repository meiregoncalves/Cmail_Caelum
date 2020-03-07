import { CmailFormFieldComponent } from './cmail-form-group/cmail-form-group.component';
import { cmailInputFieldDirective } from './cmail-form-group/cmail-input-field.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CmailFormFieldComponent,
    cmailInputFieldDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CmailFormFieldComponent,
    cmailInputFieldDirective,
  ],
})
export class SharedComponentsModule {}

