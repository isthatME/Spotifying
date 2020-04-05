import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
 
import { AppRoutingModule,routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Playlist1Component } from './playlists/playlist1/playlist1.component';
import { Playlist2Component } from './playlists/playlist2/playlist2.component';
import { Playlist3Component } from './playlists/playlist3/playlist3.component';
import { Playlist4Component } from './playlists/playlist4/playlist4.component';
import { AllPlaylistsComponent } from './playlists/all-playlists/allplaylists.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    FaqComponent,
    HomeComponent,
    CadastroComponent,
    Playlist1Component,
    Playlist2Component,
    Playlist3Component,
    Playlist4Component,
    AllPlaylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
