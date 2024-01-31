import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { PruebaComponent } from './layouts/prueba/prueba.component';
//importar directiva
import { FadeInDirective } from './layouts/prueba/fade-in.directive';
 

import { SharkDirective } from './layouts/prueba/shark.directive';
 
import { MatCardModule } from '@angular/material/card';
import { PruebComponent } from './layouts/prueb/prueb.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    PruebaComponent,
    FadeInDirective,
    SharkDirective ,
   
    PruebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule ,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
