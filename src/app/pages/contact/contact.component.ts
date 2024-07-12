import { Component, Input } from '@angular/core';
import {  translateAnimation,Animation, translates,hijo2,hijo3,container} from 'src/app/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
 
  animations: [translateAnimation, Animation,   translates,hijo2,hijo3, container],
})

export class ContactComponent {
  @Input() hijo = '';
  
}
