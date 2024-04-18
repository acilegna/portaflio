import {
  Directive,
  OnInit,
  OnDestroy,
  Renderer2,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { AboutComponent } from '../pages/about/about.component';
import { HeaderComponent } from '../layouts/header/header.component';
@Directive({
  selector: '[prueba]',
})
export class PruebaDirective implements OnInit, OnDestroy, AfterViewInit {
  @Output() trigger = new EventEmitter();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private header: HeaderComponent
  ) {}

  ngAfterViewInit() {
    this.change();
  }

  ngOnInit() {
    //this.change()

    window.location.replace('#home');
  }

  ngOnDestroy() {}

  change() {
    //let miVariable = new AboutComponent;
    const changeNav = (entries: any) => {
      entries.forEach((entry: any) => {
      
        // verificar el elemnto que esta siendo intersectado
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          // encontrar los elements (<a> ) que contenga clase activa y eliminarla
          document.querySelector('.activa').classList.remove('activa');

          //obteber id de la seccion que esta siendo intersectada
          var id = entry.target.getAttribute('id');
          //this.header.valor=id
         // if (id === 'about') {
            this.trigger.emit(entry);
          //}
          window.location.replace('#' + id);

          // this .header.Input.nativeElement.value= id;

          // console.log( "this.about.visible()")
          //  miVariable.visible();

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
  /* change() {
    
    const changeNav = (entries: any) => {
      entries.forEach((entry: any) => {
        // verificar el elemnto que esta siendo intersectado
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          // encontrar los elements (<a> ) que contenga clase activa y eliminarla
         
         if(this.element.nativeElement.id=="about"){
         // console.log( this.about.visible())
        
  
        
         }
        }
      });
    };

    const options = {
      threshold: 0.55,
    };

    const observer = new IntersectionObserver(changeNav, options);

    // elemento observado section
    //const target = this.element.nativeElement;
    const sections = this.element.nativeElement;
     
      observer.observe(sections);
    
  } */
}
