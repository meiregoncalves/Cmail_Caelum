import { Component } from '@angular/core';
import { GlobalPageChannel } from 'src/app/services/GlobalPageChannel';

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

  valordabusca = "";
  constructor(private globalPageChannel: GlobalPageChannel) {
    this.globalPageChannel.search
    .subscribe((dadoAtualdaBusca) => {
      this.valordabusca = dadoAtualdaBusca;
    });
  }

  filtraPelaBusca() {
    const listaFiltradaEmail = this.emails.filter((emailAtual) => {
      if (emailAtual.assunto.includes(this.valordabusca)) {
        return false;
      }

      return true;
    });

    return listaFiltradaEmail;
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
