import { Injectable, ViewChild } from '@angular/core';

import { AboutComponent } from '../pages/about/about.component';
 
@Injectable({
  providedIn: 'root',
})

export class ChangeNavService {
 

  constructor() {
    

  }

  change() {
  //  let miVariable = new AboutComponent;
    const changeNav = (entries: any) => {
      entries.forEach((entry: any) => {
        // verificar el elemnto que esta siendo intersectado
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          // encontrar los elements (<a> ) que contenga clase activa y eliminarla
          document.querySelector('.activa').classList.remove('activa');

          //obteber id de la seccion que esta siendo intersectada
         var id = entry.target.getAttribute('id');
        // this. Input.nativeElement.value = 'Whale!';
         
       
          // console.log( "this.about.visible()")
          // miVariable.visible(id);

          // console.log(about)
          //encontrar la etiqueta del menu que coincida con el id de la seccion intersectada  y agregar clase "activa"
          var newLink = document
            .querySelector(`.nav-link[href="#${id}"]`)
            .classList.add('activa');
        }
      });
    };

    const options = {
      threshold: 0.55,
    };

    const observer = new IntersectionObserver(changeNav, options);

    // elemento observado section
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  myOtherFn  () {
    return "id";
}
}
