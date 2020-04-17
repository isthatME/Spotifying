import { PlaylistComponent } from './playlists/playlist/playlist.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { AllPlaylistsComponent } from './playlists/all-playlists/allplaylists.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'allPlaylists', component: AllPlaylistsComponent },
  { path: 'playlist/:id', component: PlaylistComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,FaqComponent]
