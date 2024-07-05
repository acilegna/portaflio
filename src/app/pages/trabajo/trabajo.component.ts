import { Component, Input } from '@angular/core';
 
import {  translateAnimation,Animation, translates,hijo2,hijo3,container} from 'src/app/animations';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss'],
  animations: [translateAnimation, Animation,   translates,hijo2,hijo3, container],
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
