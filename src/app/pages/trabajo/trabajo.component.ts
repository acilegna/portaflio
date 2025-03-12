import { Component, Input } from '@angular/core';

import {
  translateAnimation,
  Animation,
  translates,
  hijo2,
  hijo3,
  container,
  fadeInGroup,
  fadeTab
} from 'src/app/animations';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss'],
  animations: [
    translateAnimation,
    Animation,
    translates,
    hijo2,
    hijo3,
    container,
    fadeInGroup,
    fadeTab

  ],
})
export class TrabajoComponent {

  activeTab: string = 'tab1'; // Pestaña activa

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }


  @Input() hijo = '';

  isVisible: boolean = true;

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
  ngOnInit() {}
}
