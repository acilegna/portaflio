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

//import * as swal from 'sweetalert';
import swal from'sweetalert2';

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
    this._MessageService.sendMessage(form).subscribe(() => {
    //swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    });
    }

}
