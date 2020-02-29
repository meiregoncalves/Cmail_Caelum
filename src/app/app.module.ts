import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { ModuloDeRotasConfiguradas } from './app.routes';
import { CmailInboxComponent } from './modules/inbox/inbox.component';
import { CmailFormFieldComponent } from './components/cmail-form-group/cmail-form-group.component';
import { cmailInputFieldDirective } from './components/cmail-form-group/cmail-input-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CmailCadastroComponent,
    CmailInboxComponent,
    CmailFormFieldComponent,
    cmailInputFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModuloDeRotasConfiguradas
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
