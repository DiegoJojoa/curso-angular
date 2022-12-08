import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbs.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input()
  personajes: Personaje[] = [];

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    console.log("ingreso")
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    // this.personajes.push(this.nuevo);
    this.reset();
  }

  reset() {
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
