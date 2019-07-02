import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gama-angular-exercicios';
  contador = 10;

  inc(){
    this.contador++
  }

  dec(){
    this.contador--
  }
}
