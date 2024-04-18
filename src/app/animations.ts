import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

export const translateAnimation = trigger('enterState', [
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
