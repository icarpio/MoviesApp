import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: []
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  comeBack:string = "";
  search:string ="";
  
  constructor(public _msService: MoviesService, public router: ActivatedRoute) {
    this.router.params.subscribe(parameters => {
      this.comeBack = parameters['pag'];
      if(parameters['search']){
        this.search = parameters['search'];
      }
      this._msService.getMovie(parameters['id']).subscribe(movie => {
        this.movie = movie
        
      })
    })
  }

  ngOnInit() {
  }

}
