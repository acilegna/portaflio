import { Component, Input } from '@angular/core';

import { trigger, transition, animate, style } from '@angular/animations';
import {  translateAnimation,Animation, translates } from 'src/app/animations';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss'],
  animations: [translateAnimation, Animation, translates],
})
export class TrabajoComponent {
  @Input() hijo = '';
  isVisible = true;
  
  
  sequencesGroup = true;
  sequences = true;

  sequencesChange() {
    this.sequences = !this.sequences;
  }

  sequencesGroupChange() {
    this.sequencesGroup = !this.sequencesGroup;
  }
  toggleImage() {
    this.isVisible == false
      ? (this.isVisible = true)
      : (this.isVisible = false);
  }
  ngOnInit() {
    
  }
}
