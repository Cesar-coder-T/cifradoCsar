import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-decifrado',
  templateUrl: './decifrado.component.html',
  styleUrls: ['./decifrado.component.css']
})
export class DecifradoComponent implements OnInit {
  /**
   * Variable de tipo "string", la cual, guardará el texto a decifrar.
   */
   textoADecifrar: string;
   /**
    * Variable de tipo "string", la cual, guardará el número 
    * correspondiente a la rotación.
    */
   seleccion: string;
   /**
    * Variable de tipo "string", la cual, guardará el
    * sentido de la rotación (izquierda o derecha).
    */
   sentido: string;
   /**
    * Variable de tipo "Array", la cual, guardará cada letra por separado,
    * correpondientes al texto a cifrar.
    */
   separador: string[];
   /**
    * Variable de tipo "Array", la cual, guardará el alfabeto.
    */
   abc: string[];
   /**
    * Variable de tipo "string", la cual, guardará el texto ya cifrado.
    */
   textoDecifrado: string;
 
   /**
    * El constructor de la clase contendrá todas las
    * variables ya inicializadas.
    */
   constructor(
     private estado: AppComponent
   ) {
     this.textoADecifrar = "";
     this.seleccion = "";
     this.sentido = "";
     this.separador = [];
     this.abc = [];
     this.textoDecifrado = "";
     this.estado.estadoD = true;
     this.estado.estadoC = false;
   }
 
   ngOnInit(): void {
   }
 
   /**
    * Método que realiza el cifrado "César"
    * dependiento de la configuración que 
    * elija el usuario.
    */
   realizarCifrado(){

    let posicionArrayAuxiliar: number = 0;
    let ascii: number = 65;
    for(let i = 0; i < 3; i++){
      if(i == 1){
        posicionArrayAuxiliar = 26;
      }else if(i == 2){
        posicionArrayAuxiliar *= 2;
      }
      ascii = 65;
      for(let j = 1; j <= 26; j++){
        this.abc[j+posicionArrayAuxiliar]= String.fromCharCode(ascii);
        ascii++
      }
    }

     this.separador = this.textoADecifrar.split("");
 
     if(this.sentido == "izquierda"){
       this.textoDecifrado = "";
       for(let i = 0; i < this.separador.length; i++){
         if(this.separador[i] == " "){
           this.textoDecifrado += " ";
         }
         for(let j = 27; j < this.abc.length; j++){
           if(this.separador[i].toUpperCase() == this.abc[j]){
             console.log(this.abc[j+parseInt(this.seleccion)]);
             this.textoDecifrado += this.abc[j+parseInt(this.seleccion)];
             break;
           }
         }
       }
     }
     
     if(this.sentido == "derecha"){
       this.textoDecifrado = "";
       for(let i = 0; i < this.separador.length; i++){
         if(this.separador[i] == " "){
           this.textoDecifrado += " ";
         }
         for(let j = 27; j < this.abc.length; j++){
           if(this.separador[i].toUpperCase() == this.abc[j]){
             console.log(this.abc[j-parseInt(this.seleccion)]);
             this.textoDecifrado += this.abc[j-parseInt(this.seleccion)];
             break;
           }
         }
       }
     }
 
   }

}
