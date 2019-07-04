import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from 'src/typings/lista';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor(private http: HttpClient) { }

  getLista(): Observable<Lista[]>{
    return this.http.get<Lista[]>('http://localhost:3000/languages');
  }

  addLanguage(language: Lista){ 
    return this.http.post<Lista>('http://localhost:3000/languages', language);
  }
}


//recomendado usar httpClient com Angular