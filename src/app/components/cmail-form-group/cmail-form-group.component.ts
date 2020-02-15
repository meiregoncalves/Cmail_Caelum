import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-field',
  templateUrl: './cmail-form-group.component.html'
})
export class CmailFormFieldComponent {
  valorDaLabel = "";
  idDaLabel = "";

  ngOnInit() {
    const inputDaTela = this.elementRef.nativeElement;

    const placeholder = inputDaTela.querySelector('input').getAttribute('placeholder');
    this.valorDaLabel = placeholder;
    console.log(this.valorDaLabel);
    inputDaTela.querySelector('input').setAttribute('placeholder', ' ');    

    this.idDaLabel = inputDaTela.querySelector('input').getAttribute('name');
    inputDaTela.querySelector('input').setAttribute('id', this.idDaLabel);  
  }

  constructor (private elementRef: ElementRef){

  }

}