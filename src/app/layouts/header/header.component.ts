import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { statech, zoom } from 'src/app/animations';
import { gsap } from 'gsap';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [zoom, statech],
})
export class HeaderComponent implements OnInit {
  @ViewChild('about', { static: true })
  buttonAbout: ElementRef<HTMLHeadElement>;
  @ViewChild('portfolio', { static: true })
  buttonTrabajo: ElementRef<HTMLHeadElement>;
  @ViewChild('home', { static: true }) buttonHome: ElementRef<HTMLHeadElement>;
  @ViewChild('section', { static: true }) section: ElementRef<HTMLHeadElement>;
  @ViewChild('input', { static: true }) Input: ElementRef<HTMLInputElement>;
  isCollapse = true; // guardamos el valor

  //valor a recibir
  public padre = 'papa';
  public ui = '';

  toggleState() {
    // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }

  onTrigger(id: any) {
    this.padre = id;
  }
  constructor() {}

  ejecuta() {
   gsap.to('#hello', { duration: 1, x: 100, opacity: 0.2 });
    //gsap.from('#hello', { duration: 1, x: 0, opacity: 0.2 });
    //gsap.from('#hello',  {duration:0.5,x: -200, opacity: 0.2});

 
  }

  ngOnInit() {
    this.ejecuta();
  }
}
