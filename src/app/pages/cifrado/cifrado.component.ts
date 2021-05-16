import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cifrado',
  templateUrl: './cifrado.component.html',
  styleUrls: ['./cifrado.component.css']
})
export class CifradoComponent implements OnInit {
  seleccion:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
