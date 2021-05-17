import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cifradoCsar';
  estadoC: boolean;
  estadoD: boolean;

  constructor(){
    this.estadoC = false;
    this.estadoD = false;
  }
}
