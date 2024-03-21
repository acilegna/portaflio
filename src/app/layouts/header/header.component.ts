import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

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

  isCollapse = true; // guardamos el valor
  toggleState() {
    // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }
  constructor() {}

  ngOnInit() {
    const changeNav = (entries: any) => {
      entries.forEach((entry: any) => {
        // verificar el elemnto que esta siendo intersectado
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          // encontrar los elements (<a>  <div>) y eliminarlos
          document.querySelector('.activa').classList.remove('activa');

          //obteber id de la seccion que esta siendo intersectada
          var id = entry.target.getAttribute('id');

          //encontrar la etiqueta del menu que coincida con el id de la seccion intersectada  y agregar clase "activa"
          var newLink = document
            .querySelector(`.nav-link[href="#${id}"]`)
            .classList.add('activa');
        }
      });
    };

    const options = {
      threshold: 0.55,
    };

    const observer = new IntersectionObserver(changeNav, options);

    // elemento observado section
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
}
