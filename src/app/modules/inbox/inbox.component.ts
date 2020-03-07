import { Component } from '@angular/core';

@Component({
  selector: 'inbox',
  templateUrl: './inbox.component.html'
})

export class CmailInboxComponent {
  title = 'Caixa de entrada';
  isNewEmailFormActive = false;

  emails = [
    {
      id: "dflskdjflcds",
      assunto: "E-mail 1",
      para: "teste@cmail.com",
      conteudo: "conteúdo 1"
    },
    {
      id: "dflskdjfloo",
      assunto: "E-mail 2",
      para: "teste@cmail.com",
      conteudo: "conteúdo 2"
    }
  ];

  novoEmail = {
    id:"",
    assunto: "",
    para: "",
    conteudo: ""
  }

  toggleNewEmailFormActive() {
    this.isNewEmailFormActive = !this.isNewEmailFormActive;
  }

  handleSubmitOfNewEmail(formEmail){
    if (formEmail.invalid) {
      return false;
    }
    
    this.emails.push(this.novoEmail);
    this.novoEmail = { id : "", assunto : "", para : "", conteudo: ""}
  }

  apagaEmail(idDoEmailQueVaiSumir: string) {
    console.log('emails', this.emails);
    const listaAtualizadaDeEmails = this.emails.filter((emailAtual) => {
      if (emailAtual.id === idDoEmailQueVaiSumir) {
        return false;
      }

      return true;
    });

    console.log('lista atualizada', listaAtualizadaDeEmails);
    this.emails = listaAtualizadaDeEmails;
  }
}
