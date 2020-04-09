import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  

  cartelera:any;

  constructor( public _ms:MoviesService) {
    this._ms.getCartelera().subscribe(data => {
       this.cartelera = data;
       console.log(this.cartelera.results)
    })
   }

  ngOnInit() {
    
  }

}
