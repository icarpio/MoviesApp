import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';
import { callbackify } from 'util';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey: string = "Your KEY";
  private urlMoviedDB: string = " https://api.themoviedb.org/3";

  constructor(private jsonp: Jsonp) { }

  //Most Popularity
  getMostPopularity() {
    let url = `${this.urlMoviedDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((response: any) => response.json()));
  }

  searchMovie(text: string) {
    let url = `${this.urlMoviedDB}/search/movue?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((response: any) => response.json()));
  }

  
  
  getCartelera() {
    let url = `${this.urlMoviedDB}/discover/movie?primary_release_date.gte=2020-04-03&primary_release_date.lte=2020-04-09&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map((response: any) => response.json()));
  }
}
