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
import Swal from 'sweetalert2';

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  resultado!: string;
  myForm: FormGroup;

  constructor(public _MessageService: MessageService, public fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });
  }

  @Input() hijo = '';

  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {

    
      this.simpleNotification();
    });
  }

  simpleNotification() {
    Swal.fire({
      position: 'center',
      background: '#141414',
      color: 'white',
      width: 350,
      title: 'Mensaje enviado',
      icon: 'success',
      iconColor: '#e39f63',
      confirmButtonColor: '#e39f63',
      confirmButtonText: 'Ok',
    });
  }
  ngOnInit() {}
}
