import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cifradoCsar';
  estado: boolean;

  constructor(){
    this.estado = false;
  }
}
