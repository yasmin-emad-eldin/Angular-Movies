import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './components/allMovies/all-movies/all-movies.component';
import { ErroComponent } from './components/Error/erro/erro.component';
import { FavoritesComponent } from './components/Favorites/favorites/favorites.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout/mainlayout.component';
import { MovieDetialsComponent } from './components/movieDetials/movie-detials/movie-detials.component';
import { TestComponent } from './components/test/test/test.component';

const routes: Routes = [
  // {path:'',component:AllMoviesComponent,children:[
  //   {path:'',redirectTo:'/AllMoviesComponent',pathMatch:'full'},
  // ]},
  {path:'',component:MainlayoutComponent},
  {path:'MainlayoutComponent',component:MainlayoutComponent},
  {path:'detials',component:MovieDetialsComponent},
  {path:'test',component:TestComponent},
  {path:'Favorites',component:FavoritesComponent},

  {path:'detials/:id',component:MovieDetialsComponent},
   {path:'**',component:ErroComponent},
   
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
