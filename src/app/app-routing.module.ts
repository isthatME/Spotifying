import { PlaylistComponent } from './playlists/playlist/playlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { AllPlaylistsComponent } from './playlists/all-playlists/allplaylists.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'allPlaylists', pathMatch: 'full', component: AllPlaylistsComponent },
  { path: 'playlist/:id', pathMatch: 'full', component: PlaylistComponent }, 
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'faq', pathMatch: 'full', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,FaqComponent]
