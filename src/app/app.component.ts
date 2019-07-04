import { Component } from '@angular/core';
import { Lista } from 'src/typings/lista';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gama-angular-exercicios';


  // constructor(private apiService: ApiService) {
  //   apiService.getLista().subscribe(value => {
  //     this.lista = value;
  //   });
  // }
 
  
}
