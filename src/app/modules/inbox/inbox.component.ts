import { Component } from '@angular/core';

@Component({
  selector: 'inbox',
  templateUrl: './inbox.component.html'
})

export class CmailInboxComponent {
  title = 'Caixa de entrada';
  isNewEmailFormActive = false;

  emails = [
  ]

  novoEmail = {
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
    this.novoEmail = { assunto : "", para : "", conteudo: ""}
  }
}
