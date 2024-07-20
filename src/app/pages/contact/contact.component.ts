import { Component, Input } from '@angular/core';

import {
  translateAnimation,
  Animation,
  translates,
  hijo2,
  hijo3,
  container,
} from 'src/app/animations';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

  animations: [
    translateAnimation,
    Animation,
    translates,
    hijo2,
    hijo3,
    container,
  ],
})
export class ContactComponent {
  constructor(public _MessageService: MessageService) {}
  @Input() hijo = '';
  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {});
  }
 
  ngOnInit() {
 
  }
}
