import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.alfabeto = [];
  }

  ngOnInit(): void {
    this.generarAlfabeto();
  }

  generarAlfabeto(){
    let ascii: number = 65;
    for(let i = 1; i <= 26; i++){
      this.alfabeto[i]= String.fromCharCode(ascii);
      ascii++
    }
    console.log(this.alfabeto);
  }

}
