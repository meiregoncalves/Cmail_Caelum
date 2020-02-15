import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'cmail-form-field',
  templateUrl: './cmail-form-group.component.html'
})
export class CmailFormFieldComponent {
  valorDaLabel = "";
  idDaLabel = "";
  @Input() campo = "";

  ngOnInit() {
    const inputDaTela = this.elementRef.nativeElement;
    const input = inputDaTela.querySelector('input');

    const placeholder = input.getAttribute('placeholder');
    this.valorDaLabel = placeholder;
    console.log(this.valorDaLabel);
    input.setAttribute('placeholder', ' ');    

    this.idDaLabel = input.getAttribute('name');
    input.setAttribute('id', this.idDaLabel);  
  }

  constructor (private elementRef: ElementRef){

  }

}