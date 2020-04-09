import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search: string = "";

  constructor(public _msService: MoviesService, public router: ActivatedRoute) {
    this.router.params.subscribe(parameters => {
      if(parameters['text']){
        this.search = parameters['text'];
        this.searchMovie();
      }
    })
  }

  ngOnInit() {
  }

  searchMovie() {
    if (this.search.length == 0) {
      return;
    }
    this._msService.searchMovie(this.search).subscribe()
  }

}
