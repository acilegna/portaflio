import { Component } from '@angular/core';
import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  /* animations: [// trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideInOutAnimation', [

      // end state styles for route container (host)
      state('*', style({
          // the view covers the whole screen with a semi tranparent background
        
          
          color:'blue',
          position: 'relative',
          left: '50px',
          top: '60px',
          
          
         
      })),

      // route 'enter' transition
      transition(':enter', [

          // styles at start of transition
          style({
              // start with the content positioned off the right of the screen, 
              // -400% is required instead of -100% because the negative position adds to the width of the element
              
              left: '10%',

              // start with background opacity set to 0 (invisible)
              backgroundColor: 'rgba(0, 0, 0, 0)'
          }),

          // animation and styles at end of transition
          animate('.5s ease-in-out', style({
              // transition the right position to 0 which slides the content into view
              left: '0%',

              // transition the background opacity to 0.8 to fade it in
              backgroundColor: 'rgba(red)'
          }))
      ]),

      // route 'leave' transition
      transition(':leave', [
          // animation and styles at end of transition
          animate('.5s ease-in-out', style({
              // transition the right position to -400% which slides the content out of view
              right: '-400%',

              // transition the background opacity to 0 to fade it out
              backgroundColor: 'rgba(0, 0, 0, 0)'
          }))
      ])
  ]) ] */
   animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          transform: 'translateX(-100%)',
          opacity: '0',
        })
      ),
      transition(':enter', [
        animate(
          '.5s ease-in-out',
          style({
            transform: 'translateX(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ], 
})
export class AboutComponent {
   

  constructor() {}
 
 
  //comunicacion a hijo about desde padre header@Input() about: any;
valor=33
  ngOnInit() {

  }
}
   
