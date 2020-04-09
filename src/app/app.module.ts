import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {JsonpModule, HttpModule} from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { NoimagePipe } from './pipes/noimage.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailComponent,
    NavbarComponent,
    MoviesComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
