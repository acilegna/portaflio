import {
  animate,
  state,
  style,
  transition,
  trigger,

} from '@angular/animations';

//Trabajos about
export const translates= trigger('entrada', [
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
]);

 export const translateAnimation = trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-15px)' }),
      animate('500ms 0.03s', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
      animate('500ms 0.03s', style({ opacity: 0, transform: 'translateX(15px)' })),
    ]),
  ])
  



  //Trabajos about
 export const Animation = trigger('enterState', [
  
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-115px)' }),
    animate('600ms 0.04s', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('600ms 0.04s', style({ opacity: 0, transform: 'translateX(15px)' })),
  ]),
])


