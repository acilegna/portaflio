import { Component, ElementRef, Renderer2, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent {

  @ViewChild('about', { static: true }) buttonAbout: ElementRef<HTMLHeadElement>;
  @ViewChild('portfolio', { static: true }) buttonTrabajo: ElementRef<HTMLHeadElement>;
  @ViewChild('home', { static: true }) buttonHome: ElementRef<HTMLHeadElement>;

  isCollapse = true;   // guardamos el valor
  toggleState() { // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }
  constructor() { }
  //comunicacion padre hijo menuAbout = 2;



}

