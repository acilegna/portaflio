import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { trigger, transition, animate, style, state } from '@angular/animations';


@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss'],
  animations: [
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(50%)' }),
        animate('50ms ease-out', style({ transform: 'translateX(50%)' })),
      ]),
     /*  transition(":leave", [
        animate('50ms ease-out', style({ transform: 'translateX(50%)' })),
      ]) */
    ])
  ],
})
export class TrabajoComponent {

  isVisible = true;
  toggleImage() {
  
  this.isVisible == false ? this.isVisible = true : this.isVisible = false
  }
  ngOnInit() {
   // console.log("En este instante el componente ha cargado");
    
  }
 

}


