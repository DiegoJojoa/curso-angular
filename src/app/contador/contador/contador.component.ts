import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: ` 
    <h3>La base es: <strong>{{numero}}</strong></h3>
    <button (click)="acumular(+base)">+{{base}}</button>
    <button (click)="acumular(-base)">-{{base}}</button> 
    `
})

export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 0;
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}