import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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
import { HttpClient } from '@angular/common/http';

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

  @ViewChild('inputnombre') inputnombre: ElementRef;
  @ViewChild('inputemail') inputemail: ElementRef;
  @ViewChild('inputarea') inputarea: ElementRef;

  constructor(
    public _MessageService: MessageService,
    public fb: FormBuilder,
    private httpclien: HttpClient
  ) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required]],
    });
  }

  @Input() hijo = '';

  /*   contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {
      this.simpleNotification();
    });
  }
 */
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
    }).then((result) => {
      if (result.isConfirmed) {
        this.clear();
      }
    });
  }

  clear() {
    this.inputnombre.nativeElement.value = '';
    this.inputemail.nativeElement.value = '';
    this.inputarea.nativeElement.value = '';
  }

  ngOnInit() {}

  enviocorreo() {
    let params = {
      nombre: this.myForm.value.nombre,
      email: this.myForm.value.email,
      mensaje: this.myForm.value.mensaje,
     
    };
    //console.log(params)
    
    this.httpclien.post('https://resend-demo.ladoobscurodelaluna.com/formulario', params).subscribe(resp=>{
   // this.httpclien.post('http://localhost:3000/formulario', params).subscribe(resp=>{
      console.log(resp);
    });
  }
}
