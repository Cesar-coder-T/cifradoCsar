import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cifrado',
  templateUrl: './cifrado.component.html',
  styleUrls: ['./cifrado.component.css']
})
/**
 * Clase encargada de cifrar el texto ingresado
 * por el usuario.
 * @autor César Augusto Rodríguez Téllez
 * @autor Diego Anderson Cobos Alarcón.
 * @since 1.0.0
 * @version 1.1.5
 */
export class CifradoComponent implements OnInit {
  /**
   * Variable de tipo "string", la cual, guardará el texto a cifrar.
   */
  textoACifrar: string;
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
   * Variable de tipo "Array", la cual, guardará el alfabeto del componente
   * "AlfabetoComponent".
   */
  @Input() abc: string[];

  /**
   * Variable de tipo "Array", la cual, guardará 3 veces el alfabeto. 
   */
  alfabetoExtendido: string[];
  /**
   * Variable de tipo "string", la cual, guardará el texto ya cifrado.
   */
  textoCifrado: string;

  /**
   * El constructor de la clase contendrá todas las
   * variables ya inicializadas.
   */
  constructor(
  ) {
    this.textoACifrar = "";
    this.seleccion = "";
    this.sentido = "";
    this.separador = [];
    this.abc = [];
    this.alfabetoExtendido = [];
    this.textoCifrado = "";
  }

  ngOnInit(): void {
  }

  /**
   * Método que triplica el alfabeto original y
   * lo guarda en el array "alfabetoExtendido".
   */
  triplicarAlfabeto(){
    let posicionArrayAuxiliar: number = 0;
    for(let i = 0; i < 3; i++){
      if(i == 1){
        posicionArrayAuxiliar = 26;
      }else if(i == 2){
        posicionArrayAuxiliar *= 2;
      }
      for(let j = 1; j <= this.abc.length; j++){
        this.alfabetoExtendido[j+posicionArrayAuxiliar] = this.abc[j];
      }
    }
  }

  /**
   * Método que realiza el cifrado "César"
   * dependiento de la configuración que 
   * elija el usuario.
   */
  realizarCifrado(){
    this.triplicarAlfabeto();
    this.separador = this.textoACifrar.split("");

    if(this.sentido == "izquierda"){
      this.textoCifrado = "";
      for(let i = 0; i < this.separador.length; i++){
        if(this.separador[i] == " "){
          this.textoCifrado += " ";
        }
        for(let j = 27; j < this.alfabetoExtendido.length; j++){
          if(this.separador[i].toUpperCase() == this.alfabetoExtendido[j]){
            console.log(this.alfabetoExtendido[j-parseInt(this.seleccion)]);
            this.textoCifrado += this.alfabetoExtendido[j-parseInt(this.seleccion)];
            break;
          }
        }
      }
    }
    
    if(this.sentido == "derecha"){
      this.textoCifrado = "";
      for(let i = 0; i < this.separador.length; i++){
        if(this.separador[i] == " "){
          this.textoCifrado += " ";
        }
        for(let j = 27; j < this.alfabetoExtendido.length; j++){
          if(this.separador[i].toUpperCase() == this.alfabetoExtendido[j]){
            console.log(this.alfabetoExtendido[parseInt(this.seleccion)+j]);
            this.textoCifrado += this.alfabetoExtendido[parseInt(this.seleccion)+j];
            break;
          }
        }
      }
    }

  }

}
