import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ChangeNavService } from 'src/app/services/change-nav.service';
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

  isCollapse = true; // guardamos el valor
  toggleState() {
    // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }
  constructor(private changeService: ChangeNavService) {
  
  }

 

  ngOnInit() {
   // console.log(this.cadena);
    //  this.changeService.change();
  }
}
