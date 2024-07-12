import {
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';

import {
 
  translateAnimation,
  Animation, translates,fadeInGroup,fadeInSequence
} from 'src/app/animations';

import { gsap } from 'gsap';
//import { isPlatformBrowser } from '@angular/common';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ translateAnimation, Animation, translates,fadeInGroup,fadeInSequence],
})

export class HeaderComponent  {
  @ViewChildren('menu') buttonsocialt: QueryList<ElementRef>;

  @ViewChild('section', { static: true }) section: ElementRef<HTMLHeadElement>;
  @ViewChild('input', { static: true }) Input: ElementRef<HTMLInputElement>;
  isCollapse = true; // guardamos el valor

   

  //valor a recibir
  public padre = 'papa';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
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
      this.styleRed();
    }

    if (this.padre == 'about') {
      this.stylePink();
    }

    if (this.padre == 'portfolio') {
      this.styleBlue();
    }

    if (this.padre == 'contact') {
      this.stylewhite();
    }
  }

  styleBlue() {
    let toArray = this.buttonsocialt.toArray();
    let ref = toArray.find((el) =>
      el.nativeElement.setAttribute('style', 'color:#0c9693')
    );
  }

  styleRed() {
    let toArray = this.buttonsocialt.toArray();
    let ref = toArray.find((el) =>
      el.nativeElement.setAttribute('style', 'color:#919191')
    );
  }

  stylePink() {
    let toArray = this.buttonsocialt.toArray();
    let ref = toArray.find((el) =>
      el.nativeElement.setAttribute('style', 'color: #e349c4')
    );
  }

  stylewhite() {
    let toArray = this.buttonsocialt.toArray();
    let ref = toArray.find((el) =>
      el.nativeElement.setAttribute('style', 'color: #e39f63')
    );
  }

}
