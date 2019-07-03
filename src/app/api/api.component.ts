import { Component, OnInit, Input } from '@angular/core';
import { Lista } from 'src/typings/lista';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})

export class ApiComponent implements OnInit {
  
 lista: Array<Lista>
 
  constructor(private listaService: ApiService) { }

 
  ngOnInit() {
    this.listar();
  }

  listar(){
    this.listaService.getLista().subscribe(linguagens => this.lista = linguagens);
  }

}
