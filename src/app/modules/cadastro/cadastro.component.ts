import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

function validateUserName(FormControl) {
  const url = `http://localhost:3200/users/validation/${FormControl.value}`;
  FormControl.markAsTouched();
  return fetch(url)
  .then((response) => {
    console.log(response.status);
    if (response.ok) {
      return null
    }

    throw new Error('Usuário já foi pego :(')
  })
  .catch((erro: Error) => {
    console.log(erro);
    return { userTaken : true}
  });
}  

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})

export class CmailCadastroComponent {
    formCadastro = new FormGroup({
      name:	new	FormControl('',	[Validators.required, Validators.minLength(3)]),
      username:	new	FormControl('',	[Validators.required], [this.validateUserNameComRxJS.bind(this)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
			senha:	new	FormControl('',	Validators.required),
			avatar:	new	FormControl('', Validators.required),
    });  

    handleCadastrarUsuario()	{
      if (this.formCadastro.valid)
      {
        console.log(JSON.stringify(this.formCadastro.value));

        fetch('http://localhost:3200/users', {
          method: 'POST',
          body: JSON.stringify(this.formCadastro.value),
          headers: {
            'content-type': 'application/json'
          }
        }).then((response) => {
          console.log(response.status);
          if (response.status == 201) {
            // Object.keys(this.formCadastro.controls).forEach((nomeDoCampo) => {
            //   console.log(nomeDoCampo);
            //   console.log(this.formCadastro.get(nomeDoCampo));
            //   this.formCadastro.get(nomeDoCampo).value("");
            // });
          }
        });
      }
      else{
        Object.keys(this.formCadastro.controls).forEach((nomeDoCampo) => {
          //console.log(nomeDoCampo);
          this.formCadastro.get(nomeDoCampo).markAsTouched({ onlySelf: true })
        });
      }
    }    

    constructor(private httpClient: HttpClient) {

    }

    validateUserNameComRxJS(FormControl) {
      const url = `http://localhost:3200/users/validation/${FormControl.value}`;
      return this.httpClient.get(url);
    }
    
    ngOnInit() {

    }
}
