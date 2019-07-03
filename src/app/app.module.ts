import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service'
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'contador', component: ContadorComponent },
  {path: 'api', component: ApiComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ApiComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
   
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
