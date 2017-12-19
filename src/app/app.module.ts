import { BrowserModule } from '@angular/platform-browser';
import {trigger, state, style, transition, animate } from '@angular/animations';
import{NgModule}from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { routing } from './app.routing';
import { GrupoClienteFornecedoresComponent } from './grupo-cliente-fornecedores/grupo-cliente-fornecedores.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GrupoClienteFornecedoresComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule
 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
