import { Component, Input } from '@angular/core';

import {  zoom} from 'src/app/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [zoom ],
})
export class AboutComponent {
  @Input() hijo = '';
  
  constructor() { }
  
  ngOnInit() { }
}
