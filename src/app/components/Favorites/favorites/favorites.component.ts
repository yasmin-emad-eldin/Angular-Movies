import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  pages:number=1
  arrayOfDigits: any[]=[];
  movie:any
  picture:any 
  picture1:any
  public name:string='';
// favouit
total:number=0
  constructor( private movies:MoviesService){
  }


  ngOnInit() {
      //getFavoriteList
      
  // this.getFavoriteList()
  this.movies.getFavoriteList().subscribe((data)=>{
    this.movie=data.results
      this.numPages(data.total_pages)
      this.picture=`https://image.tmdb.org/t/p/w500`
      this.picture1=this.movie[this.pages].poster_path
      this.total=data.total_results
  })
  this.movies.getCartItems()
  .subscribe((value:any)=> {
   value=this.total
     console.log("totalfav",this.total)
  })
}
  
  removeFavorite(id:any){

    let removeMovie:object = {
      media_type: "movie",
      media_id:id,
      favorite: false
    };
//removeMovie

 this.movies.addFavoriteMovie(removeMovie).subscribe((data)=>{
      console.log(data);
      this.numPages(data.total_pages)
      this.movie=data.results
      this.movies.updateCartItems(--this.total);

      this.movies.getFavoriteList().subscribe((data)=>{
        this.movie=data.results
          this.numPages(data.total_pages)
          this.picture=`https://image.tmdb.org/t/p/w500`
          this.picture1=this.movie[this.pages].poster_path

      })
    })
    
  }
  //arry pagnabtion
  numPages(num:number){
    this.arrayOfDigits=[]
      for (var i = 1; i <=num; i++) {
       this.arrayOfDigits.push(i);
     }
    
     
    }
    pageid(pages:number){

      this.movies.getAllMovies(this.pages).subscribe((data) =>{
        this.movie=data.results
        console.log(this.movie)
  
       })
}
//getFavoriteList
getFavoriteList(){
  this.movies.getFavoriteList().subscribe((data)=>{
    this.movie=data.results
      this.numPages(data.total_pages)
      this.picture=`https://image.tmdb.org/t/p/w500`
      this.picture1=this.movie[this.pages].poster_path

  })
}
}
