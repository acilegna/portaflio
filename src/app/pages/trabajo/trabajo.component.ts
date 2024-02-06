import { Component, Input } from '@angular/core';
import { AboutDirective} from 'src/app/directivas/about.directive';
@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss']
})
export class TrabajoComponent {
@Input() trabajo:any
}
