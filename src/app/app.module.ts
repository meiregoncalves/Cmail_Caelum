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
import { LoginComponent } from './modules/login/login.component';
import { SharedComponentsModule } from './components/shared.components.module';
import { AuthGuard } from './guards/auth.guards';

@NgModule({
  declarations: [ // Components, Diretivas
    AppComponent,
    HeaderComponent,
    CmailCadastroComponent,
    CmailInboxComponent,
    // CmailFormGroup,
    // CmailInputFieldDirective
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
    ModuloDeRotasConfiguradas
  ],
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
