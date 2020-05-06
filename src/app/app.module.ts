import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms' 
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlists/playlist/playlist.component';
import { AllPlaylistsComponent } from './playlists/all-playlists/allplaylists.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsernavbarComponent } from './navbar/usernavbar/usernavbar.component';
import { SearchComponent } from './playlists/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { CreatePlaylistComponent } from './playlists/create-playlist/createPlaylist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    FaqComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent ,
    PlaylistComponent,
    AllPlaylistsComponent,
    UsernavbarComponent,
    SearchComponent,
    SignupComponent,
    UserProfileComponent,
    SigninComponent,
    CreatePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
