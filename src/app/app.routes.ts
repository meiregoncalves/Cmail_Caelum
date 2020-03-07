import { Routes, RouterModule } from '@angular/router';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { CmailInboxComponent } from './modules/inbox/inbox.component';
import { AuthGuard } from './guards/auth.guards';

const rotas: Routes = [
  { path: '', component: CmailInboxComponent, canActivate: [ AuthGuard ] },
  { path: 'cadastro', component: CmailCadastroComponent },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module')
      .then((modulo) => modulo.LoginModule)
  },
  { path: '**', redirectTo: '' },
]

export const ModuloDeRotasConfiguradas = RouterModule.forRoot(rotas);