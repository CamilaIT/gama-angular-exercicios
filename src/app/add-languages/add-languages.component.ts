import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Lista } from 'src/typings/lista';

@Component({
  selector: 'app-add-languages',
  templateUrl: './add-languages.component.html',
  styleUrls: ['./add-languages.component.css']
})
export class AddLanguagesComponent implements OnInit {

  language: Lista = {
    name: '',
    creator: '',
    year: 0,
  };

  constructor(private languageService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  sendLanguage(){
    console.log(this.language);

    this.languageService.addLanguage(this.language).subscribe(value => {
      alert("Sucesso!");
      this.router.navigateByUrl('/api');
    });

  }

}
