import { Component, ElementRef, Renderer2, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent {

  @ViewChild('about', { static: true }) buttonAbout: ElementRef<HTMLButtonElement>;
  @ViewChild('portfolio', { static: true }) buttonTrabajo: ElementRef<HTMLButtonElement>;
  @ViewChild('home', { static: true }) buttonHome: ElementRef<HTMLButtonElement>;
 
  constructor() { }
//comunicacion padre hijo menuAbout = 2;
  


}

