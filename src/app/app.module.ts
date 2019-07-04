import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { AddLanguagesComponent } from './add-languages/add-languages.component';

import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service'
import { from } from 'rxjs';
import { CampoYearPipe } from './campo-year.pipe';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'contador', component: ContadorComponent },
  {path: 'api', component: ApiComponent},
  {path: 'add-languages', component: AddLanguagesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ApiComponent,
    HomeComponent,
    AddLanguagesComponent,
    CampoYearPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule   
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
