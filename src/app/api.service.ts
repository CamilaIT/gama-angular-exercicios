import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from 'src/typings/lista';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly url = 'https://alefesouza.dev/gama/languages.php'

  constructor(private http: HttpClient) { }

  getLista(): Observable<Lista[]>{
    return this.http.get<Lista[]>(`${this.url}`);
  }
}
