import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'; 
import { translateAnimation } from 'src/app/animations';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [translateAnimation],
})
 
export class AboutComponent {
 @Input() hijo=""
 


  constructor() {  
    
  }  

 
/* public visible(id:string){
     
  console.log(id)
  this.datos=id
  console.log(this.datos)
} */
ngOnInit() {
 
 
 
 /*   var  hola=this.changeService.myOtherFn();
   this.datos=hola;
   console.log(hola); */
}
 
 
 


  
/*   change() {
    const changeNav = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          var id = entry.target.getAttribute('id');          

          this.datos = id;
        }
      });
    };
    const options = {
      threshold: 0.55,
    };
    const observer = new IntersectionObserver(changeNav, options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });
  } */
}
