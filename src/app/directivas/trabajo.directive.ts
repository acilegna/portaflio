 
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

  import { TrabajoComponent} from '../pages/trabajo/trabajo.component';
import { HeaderComponent } from '../layouts/header/header.component';
 
  @Directive({
    selector: '[TrabajoDir]',
  })
  export class  TrabajoDirective implements OnInit {
    
    @Input() thresholdMin = 0.4;
    @Output() isVisible = new EventEmitter<string>();
    @ViewChild('TrabajoCompon', { static: false }) trabajoCompon = TrabajoComponent;
    buton: any
 
   
  
    constructor(private element : ElementRef, private renderer: Renderer2, private header:HeaderComponent, private trabajo: TrabajoComponent ) {}
  
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
  
      const callback = (entries:any) => {
        entries &&
          entries.forEach((entry:any) => {
            if (entry.isIntersecting) {
        
             this.header.envia(this.trabajo.trabajo)
            } else {
             // this.header.envia(0)
            }
          });
      };
      
      const observer = new IntersectionObserver(callback, option);
      const target = this.element.nativeElement;   
      target  &&  observer.observe(target );
      
    }
  }
  
 