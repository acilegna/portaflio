import {
  AfterViewInit, Inject, PLATFORM_ID,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { statech,translateAnimation,fadeSequen,fadeGroup   } from 'src/app/animations';
import { gsap } from 'gsap';
import { isPlatformBrowser } from '@angular/common';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [statech,translateAnimation,fadeSequen,  fadeGroup   ],
})

export class HeaderComponent implements AfterViewInit {
  @ViewChild('about', { static: true }) buttonAbout: ElementRef<HTMLHeadElement>;
  @ViewChild('portfolio', { static: true }) buttonTrabajo: ElementRef<HTMLHeadElement>;
  @ViewChild('home', { static: true }) buttonHome: ElementRef<HTMLHeadElement>;
  @ViewChild('contact', { static: true }) buttonContact: ElementRef<HTMLHeadElement>;
  @ViewChild('social', { static: true }) buttonsocialt: ElementRef<HTMLHeadElement>;
  @ViewChild('sociall', { static: true }) buttonsocial: ElementRef<HTMLHeadElement>;

  @ViewChild('section', { static: true }) section: ElementRef<HTMLHeadElement>;
  @ViewChild('input', { static: true }) Input: ElementRef<HTMLInputElement>;
  isCollapse = true; // guardamos el valor

  //valor a recibir
  public padre = 'papa';


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  sequencesGroup = true;
  sequences = true;

  sequencesChange() {
    this.sequences = !this.sequences;
  }

  sequencesGroupChange() {
    this.sequencesGroup = !this.sequencesGroup;
  }
  toggleState() {
    // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;

  }

  onTrigger(id: any) {
    this.padre = id;

    if (this.padre == 'home') {
      this.styleRed()
    }

    if (this.padre == 'about') {
      this.stylePink()
    }

    if (this.padre == 'portfolio') {
      this.styleBlue()
    }
  }

  styleBlue() {
    this.buttonHome.nativeElement.setAttribute('style', 'color:#0c9693;');
    this.buttonAbout.nativeElement.setAttribute('style', 'color:#0c9693;');
    this.buttonContact.nativeElement.setAttribute('style', 'color:#0c9693;');
    this.buttonsocial.nativeElement.setAttribute('style', 'color:#0c9693;');
    this.buttonsocialt.nativeElement.setAttribute('style', 'color:#0c9693;');

  }

  styleRed() {
    this.buttonAbout.nativeElement.setAttribute('style', 'color:#919191;');
    this.buttonTrabajo.nativeElement.setAttribute('style', 'color:#919191;');
    this.buttonContact.nativeElement.setAttribute('style', 'color:#919191;');
    this.buttonsocial.nativeElement.setAttribute('style', 'color:#919191;');
    this.buttonsocialt.nativeElement.setAttribute('style', 'color:#919191;');
  }

  stylePink() {
    this.buttonTrabajo.nativeElement.setAttribute('style', 'color: #e349c4;');
    this.buttonHome.nativeElement.setAttribute('style', 'color: #e349c4;');
    this.buttonContact.nativeElement.setAttribute('style', 'color: #e349c4;');
    this.buttonsocial.nativeElement.setAttribute('style', 'color: #e349c4;');
    this.buttonsocialt.nativeElement.setAttribute('style', 'color: #e349c4;');
  }
  /*   Fíjate que tienes casi lo mismo, pero le pides a Angular que te inyecte el tipo de plataforma
    (@Inject(PLATFORM_ID) private platformId: Object), y de este modo, antes de suscribirte a windows, 
    compruebas si efectivamente te encuentras en el navegador con isPlatformBrowser(this.platformId). */


  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    if (isPlatformBrowser(this.platformId)) {

      gsap.to(".sublogo", {
        x: "-52vw", // mover 32 a la izquierda, positivo ala derecha
        y: "15vh",
        scale: 2.5,
        rotate: 360,
        scrollTrigger: {
          trigger: ".sublogo", //elemento animar
          markers: true,
          start: "top 80%",
          end: "top 40%",
          scrub: 3, // 

        }
      });
    }
  }

}

