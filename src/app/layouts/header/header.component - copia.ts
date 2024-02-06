/* import { AfterViewInit, Component, ElementRef,   EventEmitter,   Input, OnInit, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FadeInDirective } from '../prueba/fade-in.directive';
import { Directive } from '@angular/core';

@Component({
  selector: 'app-header',
   templateUrl: './header.component.html',
 
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent   {
  
 
  private intersectionObserver?: IntersectionObserver;
 
 
  //@ViewChild('btn', { read: ElementRef, static: true })
 // @ViewChild('btn') boton= ElementRef<HTMLInputElement>;
 @ViewChild('btn', {static: true}) buttonRef: ElementRef<HTMLButtonElement>;
 

  constructor(private renderer: Renderer2  ) {
   
  }
   parentMessage= "msj padre";
 
 
    
 
public changeRed (){ 
 // if (this.buttonRef?.nativeElement) {
    //this.buttonRef.nativeElement.style.color='red'
    
     
 

    this.renderer.removeClass(this.buttonRef.nativeElement,"deresaltar")
  //let elementoInterior = document.querySelector('.expande');
  this.renderer.addClass(this.buttonRef.nativeElement, "resaltar");
  //this.boton.prototype.nativeElement.style.color= 'blue';
      
  
   
  }  
  
  public changeBlue( ){ 
 
      //this.buttonRef.nativeElement.style.color='blue'
      this.renderer.removeClass(this.buttonRef.nativeElement,"resaltar")
      this.renderer.addClass(this.buttonRef.nativeElement, "deresaltar");
  
    //let elementoInterior = document.querySelector('.expande');
     //elementoInterior.removeAttribute("class")
    //this.elementoInterior?.setAttribute("class","deresaltar" )
    //this.renderer.addClass(this.btn.nativeElement, "resaltar");
 
   } 

   } */

/*   ngAfterViewInit() {
    this.intersectionObserver  = new IntersectionObserver((entries) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // do something if intersecting
           
           
          this.renderer.addClass(this.elementsToExpand, 'resaltar');
         //console.log("this.elementsToExpand")   
         // entry.target.style.color= 'blue';
        } else {
          // do something if not intersecting
        }
      });
    });
  }
    ngOnInit() {

    }
  } */
/*   ngOnInit() {
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is in the viewport!');
          this.btn.nativeElement.style.color= 'blue';
        }
      });
    });
    this.intersectionObserver.observe(this.el.nativeElement);

     
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  } */


     
 
/*   public newValue= 1
  @ViewChild('btn' , {read: ElementRef, static: true})
	public btn!: ElementRef;  
 
  constructor(public renderer: Renderer2) { }
  ngOnInit() {
 // this.ejecutar();    
      
  }
   ngAfterViewInit() {
  //this.ejecutar()
  }  
  
  public ejecutar ( ){ 
     
   this.renderer.addClass(this.btn.nativeElement, "resaltar");
  // this.btn.nativeElement.style.color= 'blue';
  } */
 

