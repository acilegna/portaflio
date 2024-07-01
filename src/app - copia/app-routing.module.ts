import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
 import { TrabajoComponent } from './pages/trabajo/trabajo.component';
 import { HeaderComponent } from './layouts/header/header.component';

 



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'portfolio', component: TrabajoComponent/* ,  data: { num: 1 }  */},
  { path: 'about', component: AboutComponent/* , data: { num: 5 } */ },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],  
})
export class AppRoutingModule {}
