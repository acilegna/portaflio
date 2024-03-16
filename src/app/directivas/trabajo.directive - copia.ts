
/* El decorador Input se utiliza para la comunicación entre los dos componentes. 
Envía datos de un componente a otro mediante el enlace de propiedades.
//La directiva Directive, proporciona la funcionalidad del decorador @Directive
 //responsable de acceder al elemento DOM. ElementRef, */
import {

  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  Input,
  Output,
  EventEmitter,

} from '@angular/core';

import { HeaderComponent } from '../layouts/header/header.component';
import { TrabajoComponent } from '../pages/trabajo/trabajo.component';
@Directive({
  selector: '[TrabajoDir]',
})
export class TrabajoDirective implements OnInit {

  @Input() thresholdMin = 0.5;
  @Output() isVisible = new EventEmitter<string>();
  //@ViewChild('TrabajoCompon', { static: false }) trabajoCompon = TrabajoComponent;

  constructor(private element: ElementRef, private renderer: Renderer2, private header: HeaderComponent, private trabajo: TrabajoComponent) { }


  ngOnInit() {
    this.createObserver();
  }


  createObserver() {
    const option = {
      threshold: [this.thresholdMin],
    };

    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {
          // if (entry.isIntersecting) {  
          // console.log(entry.intersectionRatio)
          // if (entry.isIntersecting) { 
          if (entry.intersectionRatio > 0) {
            this.trabajo.toggleImage();

            this.renderer.addClass(this.header.buttonTrabajo.nativeElement, 'activa');


            if (this.header.buttonHome.nativeElement.classList.contains('activa') ||
              this.header.buttonAbout.nativeElement.classList.contains('activa')) {

              this.renderer.removeClass(this.header.buttonHome.nativeElement, 'activa');
              this.renderer.removeClass(this.header.buttonAbout.nativeElement, 'activa');

            }

          } else {

          }
        });
    };

    const observer = new IntersectionObserver(callback, option);
    const target = this.element.nativeElement;
    target && observer.observe(target);

  }
}

