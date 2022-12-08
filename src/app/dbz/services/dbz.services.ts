import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbs.interface";

@Injectable()
export class DbzService {

    personajes: Personaje[] = [
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
        console.log("servicio inicializado")
    }

}