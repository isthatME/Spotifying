import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'info', pathMatch: 'full', component: InfoComponent },
  { path: 'faq', pathMatch: 'full', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,InfoComponent,FaqComponent]
