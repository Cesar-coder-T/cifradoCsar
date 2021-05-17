import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-alfabeto',
  templateUrl: './alfabeto.component.html',
  styleUrls: ['./alfabeto.component.css']
})
export class AlfabetoComponent implements OnInit {

  /**
   * Array de tipo "string" que contendrá el alfabeto.
   */
  alfabeto: string[];
  /**
   * Contructor que contiene la intancia del array.
   */
  constructor(
    private estado: AppComponent
  ) {
    this.alfabeto = [];
  }

  /**
   * Método que ejecuta su contenido al cargar el DOM
   * correspondiente.
   */
  ngOnInit(): void {
    this.generarAlfabeto();
    this.estado.estadoC = true;
    this.estado.estadoD = false;
  }

  /**
   * Método que genera el alfabeto y lo guarda en 
   * el array "alfabeto".
   */
  generarAlfabeto(){
    let ascii: number = 65;
    for(let i = 1; i <= 26; i++){
      this.alfabeto[i]= String.fromCharCode(ascii);
      ascii++
    }
  }

}
