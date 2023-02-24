import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './components/allMovies/all-movies/all-movies.component';
import { ErroComponent } from './components/Error/erro/erro.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/Navbar/navbar/navbar.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout/mainlayout.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieDetialsComponent } from './components/movieDetials/movie-detials/movie-detials.component';
import { TestComponent } from './components/test/test/test.component';
import { FavoritesComponent } from './components/Favorites/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    ErroComponent,
    NavbarComponent,
    MainlayoutComponent,
    MovieDetialsComponent,
    TestComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
