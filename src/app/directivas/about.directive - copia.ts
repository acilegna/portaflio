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
  AfterViewInit,
} from '@angular/core';

import { HeaderComponent } from '../layouts/header/header.component';
import { AboutComponent } from '../pages/about/about.component';

@Directive({
  selector: '[aboutDir]',
})
export class AboutDirective implements OnInit, AfterViewInit {
  @Input() thresholdMax = 0.4;
  @Input() thresholdMin = 0.1;
  @Output() isVisible = new EventEmitter<string>();
  @Input() rootMargin = '70px 70px 70px 70px';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private header: HeaderComponent,
    private about: AboutComponent
  ) {}

  public ngAfterViewInit(): void {}

  ngOnInit() {
    this.createObserver();
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

      rootMargin: this.rootMargin,
    };

    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {
          // if (entry.isIntersecting) {
          if (entry.intersectionRatio > 0) {
            // this.about.visible();
            this.renderer.addClass(
              this.header.buttonAbout.nativeElement,
              'activa'
            );

            this.addClassName('visible');

            if (
              this.header.buttonHome.nativeElement.classList.contains(
                'activa'
              ) ||
              this.header.buttonTrabajo.nativeElement.classList.contains(
                'activa'
              )
            ) {
              this.renderer.removeClass(
                this.header.buttonHome.nativeElement,
                'activa'
              );
              this.renderer.removeClass(
                this.header.buttonTrabajo.nativeElement,
                'activa'
              );
            }
          } else {
            this.removeClassName('visible');
          }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = this.element.nativeElement;
    target && observer.observe(target);
  }
}
