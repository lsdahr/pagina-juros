import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { JurosimplesComponent } from './jurosimples/jurosimples.component';
import { JuroscompostosComponent } from './juroscompostos/juroscompostos.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'jurosimples', component: JurosimplesComponent},
      {path: 'juroscompostos', component: JuroscompostosComponent}
    ])
     ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, NavbarComponent, JurosimplesComponent, JuroscompostosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }