
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
  ViewChildren,
  QueryList,
  AfterViewInit,
  Component,
  ComponentRef,

} from '@angular/core';

import { HeaderComponent } from '../layouts/header/header.component';
 


@Directive({
  selector: '[homeDir]',

})

export class HomeDirective implements OnInit, AfterViewInit {

  @Input() thresholdMax = 0.4;
  @Input() thresholdMin = 0.1;
  @Output() isVisible = new EventEmitter<string>();

  
  @ViewChild('HeaderComponent', { static: false }) headerComponent = HeaderComponent;
 


  constructor(private element: ElementRef, private renderer: Renderer2, private header: HeaderComponent ) {

  }

  public ngAfterViewInit(): void {

  }


  ngOnInit() {
    this.createObserver();
 
  }

   

  createObserver() {
    const options = {
      threshold: [this.thresholdMin],
    };

    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {


          if (entry.isIntersecting) {

         
            // this.header.envia(this.about.about)
            this.renderer.addClass(this.header.buttonHome.nativeElement, 'activa');
             if (this.header.buttonAbout.nativeElement.classList.contains('activa') ||
              this.header.buttonTrabajo.nativeElement.classList.contains('activa')) {
              this.renderer.removeClass(this.header.buttonAbout.nativeElement, 'activa');
              this.renderer.removeClass(this.header.buttonTrabajo.nativeElement, 'activa');

            }  

          } else {
           

          }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = this.element.nativeElement;
    target && observer.observe(target);

  }
}

 