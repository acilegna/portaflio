 
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SharkDirective } from './shark.directive';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
  
export class PruebaComponent  implements AfterViewInit{
  
  extraCreature: string | undefined;
 
   
  @ViewChild(SharkDirective) 

  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
     
    
  };

  ngAfterViewInit() {
    console.log(this.extraCreature); // Dolphin
  }
}
