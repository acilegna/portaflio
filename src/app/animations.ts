import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,sequence
} from '@angular/animations'; 
//about
export const translates = trigger('entrada', [
  state(
    'void',
    style({
      transform: 'translateX(-50%)',
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


//about
export const fadeInSequence = trigger('fadeInSequence', [
  transition('* <=> *', [
    query('.animate', [
      style({ opacity: 0, transform: 'scale(0)' }),
      sequence([
        animate(
          '500ms 0.03s',
          style({ opacity: 1, transform: 'scale(0, .01)' })
        ),
        animate('200ms 0.03s', style({ transform: 'scale(1, .01)' })),
        animate('200ms 0.03s', style({ transform: 'scale(1, 1)' })),
      ]),
    ]),
  ]),
]);



 


 //Trabajos
export const fadeInGroup = trigger('fadeInGroup', [
  transition('* <=> *', [
    query('div', [
      style({ opacity: 0, transform: 'scale(0.8)' }),
      group([
        animate('500ms', style({ opacity: 1 })),
        animate('200ms ease-in', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ]),
]);









export const translateAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(15px)' }),
    animate('1s', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('1s', style({ opacity: 0, transform: 'translateX(15px)' })),
  ]),
]);

//Trabajos about
export const Animation = trigger('enterState', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-40px)' }),
    animate('0.9s', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate(
      '0.9s',
      style({ opacity: 0, transform: 'translateX(15px)' })
    ),
  ]),
]);


export const container = trigger('container', [
  transition(':enter, :leave', [
    query('@*', animateChild(), { optional: true })
  ])
])

export const hijo2 =     trigger('enterRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-10%)' }),
    animate('0.5s ease-in', style({ opacity: 1, transform: 'translateX(0%)' }))
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateX(0%)' }),
    animate('0.5s ease-in', style({ opacity: 0, transform: 'translateX(-10%)' }))
  ]),
])

export const hijo3 =       trigger('enterLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(10%)' }),
    animate('0.5s ease-in', style({ opacity: 1, transform: 'translateX(0%)' }))
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateX(0%)' }),
    animate('0.5s ease-in', style({ opacity: 0, transform: 'translateX(10%)' }))
  ]),
])
