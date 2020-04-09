import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  

  cartelera:any;
  moviesPop:any;
  movies019:any;

  constructor( public _ms:MoviesService) {
    this._ms.getCartelera().subscribe(data =>  this.cartelera = data);
    this._ms.getMostPopularity().subscribe(data =>  this.moviesPop = data);
    this._ms.getMovies19().subscribe(data =>  this.movies019 = data);
   }
  ngOnInit() {
    
  }

}
