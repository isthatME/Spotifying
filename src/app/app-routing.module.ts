import { Playlist4Component } from './playlists/playlist4/playlist4.component';
import { Playlist3Component } from './playlists/playlist3/playlist3.component';
import { Playlist2Component } from './playlists/playlist2/playlist2.component';
import { Playlist1Component } from './playlists/playlist1/playlist1.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { AllPlaylistsComponent } from './playlists/all-playlists/allplaylists.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'allPlaylists', pathMatch: 'full', component: AllPlaylistsComponent },
  { path: 'playlist1', pathMatch: 'full', component: Playlist1Component },
  { path: 'playlist2', pathMatch: 'full', component: Playlist2Component },
  { path: 'playlist3', pathMatch: 'full', component: Playlist3Component },
  { path: 'playlist4', pathMatch: 'full', component: Playlist4Component },  
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'cadastro', pathMatch: 'full', component: CadastroComponent },
  { path: 'faq', pathMatch: 'full', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,FaqComponent]
