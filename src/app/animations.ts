import {
  animate,
  style,
  transition,
  trigger,
  state,
  query,
  sequence,
  group,
  keyframes,
  animateChild,
} from '@angular/animations';

//Trabajos about
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
//Trabajos
export const fadeInSequence = trigger('fadeInSequence', [
  transition('* <=> *', [
    query('div', [
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
export const fadeInGroups = trigger('fadeInGroups', [
  transition('* <=> *', [
    query('button', [
      style({ opacity: 0, transform: 'scale(0.8)' }),
      group([
        animate('500ms  0.4s', style({ opacity: 1 })),
        animate('200ms  0.4s', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ]),
]);


//home
export const statech = trigger('fadeInSequence', [
  transition('* <=> *', [
    query('button', [
      style({ opacity: 0, transform: 'scale(0)' }),
      sequence([
        animate(
          '500ms 0.01s',
          style({ opacity: 1, transform: 'scale(0, .01)' })
        ),
        animate('200ms 0.01s', style({ transform: 'scale(1, .01)' })),
        animate('200ms 0.01s', style({ transform: 'scale(1, 1)' })),
      ]),
    ]),
  ]),
]);





//about
export const fadeGroup= trigger('fadeGroup', [
  transition('* <=> *', [
    query(':self', [
      style({ opacity: 0, transform: 'scale(0.8)' }),
      group([
        animate('500ms', style({ opacity: 1 })),
        animate('200ms ease-in', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ]),
]);

//about
export const fadeSequen = trigger('fadeSequen', [
  transition('* <=> *', [
    query(':self', [
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

