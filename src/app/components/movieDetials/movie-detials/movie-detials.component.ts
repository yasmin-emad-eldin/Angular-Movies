import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.scss']
})
export class MovieDetialsComponent implements OnInit{
  currentId:number=0;
 Id:number=0;

movie:any
  constructor( private movies:MoviesService,private router:Router,private ActiceRooter:ActivatedRoute,private loction:Location){

  }
  ngOnInit(){


   this.ActiceRooter.paramMap.subscribe(
    paramMap=>{ this.currentId=Number(paramMap.get('id'));
  this.movies.getMovieDetials(this.currentId).subscribe((data) =>{
    // this.movie=data.results
    console.log(data)
this.movie=data
   })

   
})
}
}