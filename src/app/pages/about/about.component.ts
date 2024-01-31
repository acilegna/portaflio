import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  
  
  constructor(private element : ElementRef, render:Renderer2 ) {}
  @Input() about:any;
  
  @Input()  childMessage!: string;

  public ejecuta(){
console.log(this.about)
  }
  
  ngOnInit() {
    // this.ejecuta()
  }
}
