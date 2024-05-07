import {
  Directive,
  OnInit,
  EventEmitter,
  Output,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[intersection]',
})
export class InterObserver implements OnInit, AfterViewInit {
  @Output() trigger = new EventEmitter();

  constructor() {}

  ngAfterViewInit() {
    this.change();
  }

  ngOnInit() {
    window.location.replace('#home');
  }

  change() {
    const changeNav = (entries: any) => {
      entries.forEach((entry: any) => {
        // verificar el elemnto que esta siendo intersectado
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          // encontrar los elements (<a> ) que contenga clase activa y eliminarla
          document.querySelector('.activa').classList.remove('activa');

          //obteber id de la seccion que esta siendo intersectada
          var id = entry.target.getAttribute('id');

          this.trigger.emit(id);

          window.location.replace('#' + id);

          // console.log(about)
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
