import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Clase principal encargada de establecer los estados 
 * de los contenedores en el tooblar.
 * @autor César Augusto Rodríguez Téllez
 * @autor Diego Anderson Cobos Alarcón.
 * @since 1.0.0
 * @version 1.1.5
 */
export class AppComponent {
  title = 'cifradoCsar';
  /**
   * Variables booleanas que determinan
   * la visibilidad de los tres contenedores
   * del toolbar.
   */
  estado: boolean;
  estadoC: boolean;
  estadoD: boolean;

  constructor(){
    this.estado = true;
    this.estadoC = false;
    this.estadoD = false;
  }
}
