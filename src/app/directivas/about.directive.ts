
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
import { AboutComponent } from 'src/app/pages/about/about.component';


@Directive({
  selector: '[aboutDir]',

})

export class AboutDirective implements OnInit, AfterViewInit {

  @Input() thresholdMax = 0.4;
  @Input() thresholdMin = 0.1;
  @Output() isVisible = new EventEmitter<string>();

  //buton: any

  @ViewChild('HeaderComponent', { static: false }) headerComponent = HeaderComponent;
  @ViewChild('AboutComponent', { static: false }) aboutComponent = AboutComponent;


  constructor(private element: ElementRef, private renderer: Renderer2, private header: HeaderComponent, private about: AboutComponent) {

  }

  public ngAfterViewInit(): void {

  }


  ngOnInit() {
    this.createObserver();

    // console.log(this.headerComponent)
  }

  addClassName(className: any) {
    this.renderer.addClass(this.element.nativeElement, className);
    this.isVisible.emit();

  }

  removeClassName(className: any) {
    if (this.element.nativeElement.classList.contains(className)) {
      this.renderer.removeClass(this.element.nativeElement, className);

    }
  }

  createObserver() {
    const options = {
      threshold: [this.thresholdMin],
    };

    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {


          if (entry.isIntersecting) {

            this.addClassName('visible');
            this.header.envia(this.about.about)

           // console.log("hola me veo")


          } else {
            this.removeClassName('visible');
             


            // this.header.changeBlue()
            //console.log("hola2 no me veo")

          }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = this.element.nativeElement;
    target && observer.observe(target);

  }
}

/*  //this.renderer2.addClass(this.element.nativeElement, 'visible');
   //this.element.nativeElement.style.color = 'blue';
   this.buton= this.element.nativeElement;
   
   this.renderer2.setStyle(
     this.buton,
     'border-left',
     '23px dashed olive'
   ); */