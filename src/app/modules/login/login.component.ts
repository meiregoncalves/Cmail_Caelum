import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.sevice';
import { Router } from '@angular/router';

@Component({
    selector:'login-component',
    templateUrl: './login.component.html',
})

export class LoginComponent {

    constructor(
        private loginService : LoginService,
        private router: Router
    ) {

    }

    titulo: string = 'Página de login';
    formLogin = new FormGroup({
        login : new FormControl('', [Validators.email, Validators.required]),
        senha : new FormControl('', [Validators.required])
    })
    handleLoginUsuario() {
        if (this.formLogin.invalid){
            return false;
        }

        const LoginDTO = {
            email: this.formLogin.get('login').value,
            password: this.formLogin.get('senha').value,
        };

        this.loginService
        .logar(LoginDTO)
        .then((respostaDoServerEmObjeto) => {
            console.log(respostaDoServerEmObjeto);
            this.router.navigate(['/']);
        })
        .catch((erro) => {
            console.log(erro);
        });
    }
}