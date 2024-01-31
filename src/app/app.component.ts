import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'portfolio';
  btnes!: ElementRef  
  blocks = Array(20).fill(null).map((x, i) => i + 1);
}
