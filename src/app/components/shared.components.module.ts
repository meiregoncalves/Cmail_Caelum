import { CmailFormFieldComponent } from './cmail-form-group/cmail-form-group.component';
import { cmailInputFieldDirective } from './cmail-form-group/cmail-input-field.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmailCardComponent } from './cmail-card/cmail-card.component';


@NgModule({
  declarations: [
    CmailFormFieldComponent,
    cmailInputFieldDirective,
    CmailCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CmailFormFieldComponent,
    cmailInputFieldDirective,
    CmailCardComponent,
  ],
})
export class SharedComponentsModule {}

