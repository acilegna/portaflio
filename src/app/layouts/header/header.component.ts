import { Component, ElementRef, Renderer2, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent {

  @ViewChild('about', { static: true }) buttonAbout: ElementRef<HTMLButtonElement>;
  @ViewChild('portfolio', { static: true }) buttonPortf: ElementRef<HTMLButtonElement>;
  @ViewChild('home', { static: true }) buttonHome: ElementRef<HTMLButtonElement>;

  constructor(private renderer: Renderer2) { }
  parentMessage = "msj padre";
  btnAbout=1

 
public envia(valor:any){
  console.log("yu"+valor)
  if(this.btnAbout==valor){
    console.log("about")
  }
}
ngOnInit() {
  console.log(this.envia)

 // console.log(this.headerComponent)
}
  public activaBoton(boton:ElementRef, clase:any){
    this.renderer.addClass(this.buttonAbout.nativeElement, clase);
  }
  public desactivaBoton(boton:any, clase:any){
    this.renderer.removeClass(this.buttonAbout.nativeElement, clase);
  }
  public changeRed() {

    this.renderer.removeClass(this.buttonAbout.nativeElement, "inactiva")

    this.renderer.addClass(this.buttonAbout.nativeElement, "activa");

  }

  public changeBlue() {

    this.renderer.removeClass(this.buttonAbout.nativeElement, "activa")

    this.renderer.addClass(this.buttonAbout.nativeElement, "inactiva");

  }

}

