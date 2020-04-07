import { Component } from '@angular/core';
import {MoviesService} from './services/movies.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesApp';

  constructor(public _mvService:MoviesService){
    this.getCartelera();
  }
  getMostPopularity(){
    this._mvService.getMostPopularity().subscribe(data=>console.log(data));
  }
  searchMovie(text:string){
    this._mvService.searchMovie(text).subscribe(data=>console.log(data));
  }
  getCartelera(){
    this._mvService.getCartelera().subscribe(data=>console.log(data));
  }
}
