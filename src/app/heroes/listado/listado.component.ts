import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor']
  heroesBorrados: string[] = [];
  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() ?? '';
    this.heroesBorrados.push(this.heroeBorrado);
  }

}
