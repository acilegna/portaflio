 
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

  
 
  @Directive({
    selector: '[fadeIn]',
  })
  export class FadeInDirective implements OnInit {
    
    
     
   
    @Input() thresholdMax = 0.8;
    @Input() thresholdMin = 0.4;
    @Output() isVisible = new EventEmitter<string>();
     
    buton: any
 
   
  
    constructor(private element : ElementRef, private renderer: Renderer2) {}
  
    //TODO: possibly implement debouncing
  
    ngOnInit() {
      this.createObserver();
    }
     
    addClassName(className:any) {
      this.renderer.addClass(this.buton=this.element.nativeElement, className);
     
      this.isVisible.emit();
      
    }
  
    removeClassName(className: any) {
      if (this.element.nativeElement.classList.contains(className)) {
        this.renderer.removeClass(this.element.nativeElement, className);
         
      }
    }
  
    createObserver() {
      const options = {
        threshold: [this.thresholdMin, this.thresholdMax],
      };
  
      const callback = (entries:any) => {
        entries &&
          entries.forEach((entry:any) => {
            if (entry.isIntersecting) {
              this.addClassName('visible');
             
            } else {
              this.removeClassName('visible');
              
            }
          });
      };
      
      const observer = new IntersectionObserver(callback, options);
      const target = this.element.nativeElement;   
      target  &&  observer.observe(target );
      
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