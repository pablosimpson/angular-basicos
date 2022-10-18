import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman' , 'IronMan', 'Hulk', 'Thor', 'Yo mero'];
  heroeBorrado : string = '';

  borrarHeroe(index : number) : void {
    //this.heroes.splice(index, 1);
    //console.log('Borrando');

    this.heroeBorrado = this.heroes.shift() || '';

  }

}
