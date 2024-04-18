import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ChangeNavService } from 'src/app/services/change-nav.service';
import { Router } from '@angular/router';
import { PruebaDirective } from 'src/app/directivas/prueba.directive';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
  toggleState() {
    // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }

  onTrigger(entries: any) {
 //console.log(entries)
 var id = entries.target.getAttribute('id');
 /* console.log(id)
 this.padre=id */
 this.padre=id
  }
  constructor(
    private changeService: ChangeNavService,
    private render: Renderer2,
    private router: Router
  ) {
   // this.get();
  }

  ngOnInit() {}
  get() {
    if (window.location.href == 'http://localhost:4200/#about')
      console.log('ddd');
  }
}
