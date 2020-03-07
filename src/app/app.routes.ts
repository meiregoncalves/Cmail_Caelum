import { Routes, RouterModule } from '@angular/router';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { CmailInboxComponent } from './modules/inbox/inbox.component';
import { LoginComponent } from './modules/login/login.component';

const rotas: Routes = [
    { path: '', component: CmailInboxComponent },
    { path: 'cadastro', component: CmailCadastroComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
]

export const ModuloDeRotasConfiguradas = RouterModule.forRoot(rotas);

