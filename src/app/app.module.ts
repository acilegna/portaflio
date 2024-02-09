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
 
//importar directiva
import { AboutDirective } from './directivas/about.directive';
 
import { TrabajoDirective} from './directivas/trabajo.directive';
 import { HomeDirective } from './directivas/home.directive';
 
import { MatCardModule } from '@angular/material/card';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,  
    AboutDirective, TrabajoComponent, 
    TrabajoDirective,
    HomeDirective
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
