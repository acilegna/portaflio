import { Component, Input } from '@angular/core';

import {    translateAnimation, Animation,translates} from 'src/app/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
 
 
  animations: [translateAnimation, Animation, translates],
 
})
export class AboutComponent {
  @Input() hijo = '';
  sequencesGroup = true;
  sequences = true;

  sequencesChange() {
    this.sequences = !this.sequences;
  }

  sequencesGroupChange() {
    this.sequencesGroup = !this.sequencesGroup;
  }

  constructor() {}

  ngOnInit() {}
}
