import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-field',
  templateUrl: './cmail-form-group.component.html'
})
export class CmailFormFieldComponent {
  valorDaLabel = '';

  ngOnInit() {
    const inputDaTela = this.elementRef.nativeElement;

    const placeholder = inputDaTela.querySelector('input').getAttribute('placeholder');
    this.valorDaLabel = placeholder;

    console.log(this.valorDaLabel);
    inputDaTela.querySelector('input').setAttribute('placeholder', ' ');
  }

  constructor (private elementRef: ElementRef){

  }

}