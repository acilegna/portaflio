
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
  ViewChild,
  ViewChildren
} from '@angular/core';

import { TrabajoComponent } from '../pages/trabajo/trabajo.component';
import { HeaderComponent } from '../layouts/header/header.component';

@Directive({
  selector: '[TrabajoDir]',
})
export class TrabajoDirective implements OnInit {

  @Input() thresholdMin = 0.5;
  @Output() isVisible = new EventEmitter<string>();
  @ViewChild('TrabajoCompon', { static: false }) trabajoCompon = TrabajoComponent;
  buton: any



  constructor(private element: ElementRef, private renderer: Renderer2, private header: HeaderComponent, private trabajo: TrabajoComponent) { }

  //TODO: possibly implement debouncing

  ngOnInit() {
    this.createObserver();
  }

  /*  addClassName(className:any) {
     this.renderer.addClass(this.buton=this.element.nativeElement, className);
    
     this.isVisible.emit();
     
   }
 
   removeClassName(className: any) {
     if (this.element.nativeElement.classList.contains(className)) {
       this.renderer.removeClass(this.element.nativeElement, className);
        
     }
   } */

  createObserver() {
    const option = {
      threshold: [this.thresholdMin],
    };

    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {

            this.header.envia("trabajo si me veo")

            this.renderer.addClass(this.header.buttonTrabajo.nativeElement, 'activa');
            if (this.header.buttonHome.nativeElement.classList.contains('activa') ||
              this.header.buttonAbout.nativeElement.classList.contains('activa')) {
              this.renderer.removeClass(this.header.buttonHome.nativeElement, 'activa');
              this.renderer.removeClass(this.header.buttonAbout.nativeElement, 'activa');

            }
            // this.header.envia(this.trabajo.trabajo)
          } else {

          }
        });
    };

    const observer = new IntersectionObserver(callback, option);
    const target = this.element.nativeElement;
    target && observer.observe(target);

  }
}

