import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild

} from '@angular/core';

import { HeaderComponent } from '../layouts/header/header.component';


@Directive({
  selector: '[homeDir]',

})

export class HomeDirective implements OnInit {

  @Input() thresholdMax = 0.4;
  @Input() thresholdMin = 0.1;
  @Output() isVisible = new EventEmitter<string>();


  @ViewChild('HeaderComponent', { static: false }) headerComponent = HeaderComponent;

  constructor(private element: ElementRef, private renderer: Renderer2, private header: HeaderComponent) {

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

