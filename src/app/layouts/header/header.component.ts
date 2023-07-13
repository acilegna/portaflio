import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  goDown1() {
    this.scroller.scrollToAnchor('targetRed');
  }
  toTheTop() {
    document.body.scrollTop = 10;
    document.documentElement.scrollTop = 10;
  }

  constructor(private scroller: ViewportScroller) {}
}
