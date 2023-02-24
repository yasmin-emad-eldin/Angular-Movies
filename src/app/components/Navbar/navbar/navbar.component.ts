import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  x:number=0
  total:any
  totalLocalStorage:any=0
    constructor(private movies:MoviesService){

    }
  ngOnInit(){
  //getFavoriteList
  this.movies.getCartItems()
    .subscribe((value:any)=> {
       this.total=value
      //  console.log("totalfav",this.total)
    })
   
  this.movies.getFavoriteList().subscribe((data) => {
    // console.log('getFavoriteList');
    // console.log(data);
    // console.log(data.total_results);
    this.total = data.total_results
   
  })


}
}