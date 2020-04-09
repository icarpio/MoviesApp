import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';
import { callbackify } from 'util';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  

  private apiKey: string = "";
  private urlMoviedDB: string = " https://api.themoviedb.org/3";
  private movies:any[] = [];
  constructor(private jsonp: Jsonp) { }

  //Most Popularity
  getMostPopularity() {
    let url = `${this.urlMoviedDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((response: any) => response.json().results ));
  }

  searchMovie(text: string) {
    let url = `${this.urlMoviedDB}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((response: any) => {
      this.movies = response.json().results;
      return response.json().results;
    }));
  }

  getCartelera() {
    let start = new Date();
    let end = new Date();
    end.setDate( end.getDate() - 7 );
    let startString = `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`;
    let endString = `${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`;
    let url = `${this.urlMoviedDB}/discover/movie?primary_release_date.gte=2020-02-15&primary_release_date.lte=2020-02-22&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((response: any) => response.json().results));
  }

  getMovies19(){
    let url = `${ this.urlMoviedDB }/discover/movie?primary_release_year=2019&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((response: any) => response.json().results));
  }

  getMovie( id:string ){
    let url = `${ this.urlMoviedDB }/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe(map((response: any) => response.json()));
  }
}
