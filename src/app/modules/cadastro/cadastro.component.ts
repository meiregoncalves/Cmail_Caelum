import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})

export class CmailCadastroComponent {
    formCadastro = new FormGroup({
      nome:	new	FormControl('',	Validators.required),
			username:	new	FormControl('',	Validators.required),
			senha:	new	FormControl('',	Validators.required),
			avatar:	new	FormControl(),
    });

    handleCadastrarUsuario()	{
      if (this.formCadastro.invalid)
      {
        console.error('Form	inválido!	->',	this.formCadastro.invalid);
				return;
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
