import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})

export class CmailCadastroComponent {
    formCadastro = new FormGroup({
      nome:	new	FormControl('',	[Validators.required, Validators.minLength(3)]),
			username:	new	FormControl('',	Validators.required),
			senha:	new	FormControl('',	Validators.required),
			avatar:	new	FormControl('', Validators.required),
    });

    handleCadastrarUsuario()	{
      if (this.formCadastro.invalid)
      {
        Object.keys(this.formCadastro.controls).forEach((nomeDoCampo) => {
          //console.log(nomeDoCampo);
          this.formCadastro.get(nomeDoCampo).markAsTouched({ onlySelf: true })
        });
      }
      else{
        console.log(this.formCadastro.value);
      }
    }    

    constructor() {

    }

    ngOnInit() {

    }
}
