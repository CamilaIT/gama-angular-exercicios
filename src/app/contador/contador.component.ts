import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador = 10;
  

  inc(){
    this.contador++
  }

  dec(){
    this.contador--
  }

  constructor() { }

  ngOnInit() {
  }

}
