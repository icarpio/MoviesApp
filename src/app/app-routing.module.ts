import {Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {MoviesComponent} from './components/movies/movies.component';
import {SearchComponent} from './components/search/search.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';

const routes:Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:texto', component: SearchComponent },
  { path: 'movie/:id/:pag', component: MovieDetailComponent },
  { path: 'movie/:id/:pag/:text', component: MovieDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }