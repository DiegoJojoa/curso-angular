import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbs.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder:15000
        },
        {
          nombre:'Vegeta',
          poder:10000
        }
      ];

    constructor() {
    }

    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}