import { UserEditComponent } from './playlists/user-edit/user-edit.component';
import { AuthGuard } from './shared/auth.guard';
import { PlaylistComponent } from './playlists/playlist/playlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { AllPlaylistsComponent } from './playlists/all-playlists/allplaylists.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './playlists/search/search.component';
import { CreatePlaylistComponent } from './playlists/create-playlist/createPlaylist.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'allPlaylists', pathMatch: 'full', component: AllPlaylistsComponent, canActivate:[AuthGuard]},
  { path: 'playlist/:id', pathMatch: 'full', component: PlaylistComponent, canActivate:[AuthGuard]}, 
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'faq', pathMatch: 'full', component: FaqComponent },
  { path: 'userEdit', pathMatch: 'full', component: UserEditComponent, canActivate:[AuthGuard]},
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'search', pathMatch: 'full', component: SearchComponent, canActivate:[AuthGuard]},
  { path: 'createPlaylist', pathMatch: 'full', component: CreatePlaylistComponent },
  { path: 'signin', pathMatch: 'full', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,FaqComponent]
