import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})


export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Batman', 'Hulk', 'Wonder Wooman','Capitan America']
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log("Borrado Heroe...")
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
