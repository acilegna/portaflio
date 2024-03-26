import { Component, ElementRef } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';

import { slideInAnimation } from './animations';
 import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
 
})
export class AppComponent {
 
  title = 'portfolio';
  btnes!: ElementRef  
  blocks = Array(20).fill(null).map((x, i) => i + 1);
  constructor(private contexts: ChildrenOutletContexts) {}

/*   getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  } */
 
 
}
 