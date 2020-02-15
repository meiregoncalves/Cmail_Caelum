import { Directive, ElementRef } from  '@angular/core'

@Directive({
    selector: '[cmailInputField]',
})

export class cmailInputFieldDirective {
    constructor(referenciaProElemento: ElementRef) {
        const inputDaTela = referenciaProElemento.nativeElement;
        inputDaTela.classList.add('mdl-textfield__input')
    }
}