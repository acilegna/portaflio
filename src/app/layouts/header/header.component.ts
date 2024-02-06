import { Component, ElementRef, Renderer2, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent {

  @ViewChild('about', { static: true }) buttonAbout: ElementRef<HTMLButtonElement>;
  @ViewChild('portfolio', { static: true }) buttonTrabajo: ElementRef<HTMLButtonElement>;
  @ViewChild('home', { static: true }) buttonHome: ElementRef<HTMLButtonElement>;
  boton: any;

  constructor(private renderer: Renderer2) { }

  menuHome = 1;
  menuAbout = 2;
  menuTrabajo = 3;
  claseActiva = 'activa';
  claseInactiva = 'inactiva';
  ngOnInit() {

    //this.desactivarAll();
  
  }



  public envia(valor: any) {     

    if (this.menuAbout === valor) {
      
      this.activaBoton(this.buttonAbout, this.claseActiva);
  

    } else if (this.menuTrabajo === valor ) {
      
     
      this.activaBoton(this.buttonTrabajo, this.claseActiva);

       this.desactivaBoton(this.buttonAbout,this.claseActiva);

    }

     
  }
  
  public desactivarAll(){
    this.renderer.addClass(this.buttonAbout.nativeElement, 'inactiva');
    this.renderer.addClass(this.buttonHome.nativeElement, 'inactiva');
    this.renderer.addClass(this.buttonTrabajo.nativeElement, 'inactiva');

  }
  public activaBoton(boton: ElementRef, clase: string) {
    this.renderer.addClass(boton.nativeElement, clase);
  }


 
  public desactivaBoton(boton: ElementRef, clase: string) {
    if (boton.nativeElement.classList.contains(clase)) {
      this.renderer.removeClass(boton.nativeElement, clase);

    }
     
  }


}

