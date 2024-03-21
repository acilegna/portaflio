import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  HostBinding,
} from '@angular/core';

import { HeaderComponent } from '../layouts/header/header.component';
import { AboutComponent } from '../pages/about/about.component';
import { debounceTime, Observable, Subscription } from 'rxjs';
@Directive({
  selector: '[aboutDir]',
})
export class AboutDirective implements OnInit {
  @Output() isVisible = new EventEmitter<string>();
  subscription: Subscription;

  @Input() threshold = 0.5;
  
  @HostBinding('class.activa') isVisibleInView = false;
  private observer: IntersectionObserver;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private header: HeaderComponent,
    private about: AboutComponent
  ) {}

 

  



  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
         // this.isVisibleInView = true;
          this.renderer.addClass(
            this.header.buttonAbout.nativeElement,
            'activa'
          );
          // Probably needs to be called in production
          //
          // this.observer.disconnect();
        } else {
          // Probably not interesting in production
          // but used for demo purposes
          //
          //this.isVisibleInView = false;
          this.renderer.removeClass(
            this.header.buttonAbout.nativeElement,
            'activa'
          );
        }
      },
      {
        threshold: 0.5,
      }
    );

    this.observer.observe(this.element.nativeElement as HTMLElement);
  }
  ngOnDestroy() {
    this.observer.disconnect();
  }
  
}
