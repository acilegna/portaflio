import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
 import { TrabajoComponent } from './pages/trabajo/trabajo.component';
 import { HeaderComponent } from './layouts/header/header.component';

const routes: Routes = [

  { path: 'prtaflio', component: TrabajoComponent },
  { path: 'about', component: AboutComponent },  
];



 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
