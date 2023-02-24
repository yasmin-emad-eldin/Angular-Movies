import {
  asNativeElements,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent implements OnInit {
  pages: number = 1;
  arrayOfDigits: any[] = [];
  movie: any;
  picture: any;
  picture1: any;
  public name: string = '';
  // favouit
  total: any = 0;
  //color of  heart
  favoriteStyle: any 
  favoriteStyle1: any = [];
  z:any
x:any
  constructor(private movies: MoviesService) {}

  ngOnInit() {
    this.movies.getAllMovies(this.pages).subscribe((data) => {
      // this.movies.counterSubject.subscribe()((data) =>{
      this.movie = data.results;
      this.numPages(data.total_pages);
      this.picture = `https://image.tmdb.org/t/p/w500`;
      this.picture1 = this.movie[this.pages].poster_path;
      //getgetAcountDetials
      this.movies.getAcountDetials().subscribe((data) => {
        localStorage.setItem('acountId', data.id);
      });
    });
    this.movies.getFavoriteList().subscribe((data) => {
      // console.log('getFavoriteList');
      // console.log(data);
      // console.log(data.total_results);
      this.total = data.total_results;
    });

    this.movies.getCartItems().subscribe((value: any) => {
      value = this.total;
      console.log('value', value);
    });

    this.favoriteStyle = localStorage.getItem('favoriteStyle');
    let favoriteStyle1 = JSON.parse(this.favoriteStyle)
    console.log('load', this.favoriteStyle);
    console.log('load1', favoriteStyle1);  
    for(var i=0; i<favoriteStyle1.length; i++){
      console.log(favoriteStyle1[i]);
      this.movies.getFavoriteList().subscribe((data) => {
        let obj = data.results.find((o: any) => o.id === favoriteStyle1[i]);
if(obj){
 alert('yes')
// let box = document.getElementById(favoriteStyle1[i]) as HTMLDivElement;
// console.log(favoriteStyle1[i]);
}else{
  alert('no')

}
            
      })
     }
     
// for (let i = 0;this.favoriteStyle1.length; i++) {
//       this.movies.getFavoriteList().subscribe((data) => {
//         let box = document.getElementById(this.favoriteStyle1[i]) as HTMLDivElement;
//         let obj = data.results.filter((o: any) => o.id === this.favoriteStyle1[i]);

//         if (obj) {
//           box.style.color = 'red';
//         } else {
//           box.style.color = 'gray';
//         }
//       });
//     }
    }
    // for (let i = 0;this.favoriteStyle1.length; i++) {
    //   this.movies.getFavoriteList().subscribe((data) => {
    //     let box = document.getElementById(this.favoriteStyle[i]) as HTMLDivElement;
    //     let obj = data.results.filter((o: any) => o.id === this.favoriteStyle1[i]);

    //     if (obj) {
    //       box.style.color = 'red';
    //     } else {
    //       box.style.color = 'gray';
    //     }
    //   });
    // }
    // this.z=localStorage.getItem('favoriteStyle');
    // let y=JSON.parse(this.z)
    // console.log('load1', y);
  
  addFavorite(id: any) {
    let addMovie: object = {
      media_type: 'movie',
      media_id: id,
      favorite: true,
    };
    let removeMovie: object = {
      media_type: 'movie',
      media_id: id,
      favorite: false,
    };
    //getFavoriteList
    this.movies.getFavoriteList().subscribe((data) => {
      let obj = data.results.find((o: any) => o.id === id);
      if (obj) {
        alert('1');
        let box = document.getElementById(id) as HTMLDivElement;
        this.favoriteStyle=data.results.map(function (heart:any) {
          return heart.id;
        });
        

        // get index if value found otherwise -1
        // console.log('delete',this.favoriteStyle)
        let index = this.favoriteStyle.indexOf(id);
        if (index > -1) {
          //if found
          this.favoriteStyle.splice(index, 1);
          localStorage.setItem('favoriteStyle',JSON.stringify(this.favoriteStyle));
          console.log('delete', this.favoriteStyle);

        }
        box.style.color = 'gray';
        //removeMovie
        this.movies.addFavoriteMovie(removeMovie).subscribe((data) => {
          console.log(data);
          this.movies.updateCartItems(--this.total);
        });
      } else {
        alert('2');
        let box = document.getElementById(id) as HTMLDivElement;
        this.favoriteStyle=data.results.map(function (heart:any) {
          return heart.id;
        });

        this.favoriteStyle.push(id);
        localStorage.setItem('favoriteStyle',JSON.stringify(this.favoriteStyle));
        console.log('add', this.favoriteStyle);
        box.style.color = 'red';
        // //addFavoriteMovie
        this.movies.addFavoriteMovie(addMovie).subscribe((data) => {
          console.log(data);
          this.movies.updateCartItems(++this.total);
        });
      }
    });
  }
  textAreaEmpty() {
    console.log(this.name);
    if (this.name == '') {
      // alert("11")
      this.movies.getAllMovies(this.pages).subscribe((data) => {
        this.movie = data.results;
        this.numPages(data.total_pages);
      });
    } else {
      this.movies.searchProductByName(this.name).subscribe((data) => {
        console.log(data);
        this.movie = data.results;
        console.log(data.total_pages);
        this.numPages(data.total_pages);
      });
    }
  }
  onChangeEvent(event: any) {
    console.log(this.name);
    if (event.target.value == '') {
      // alert("11")
      this.movies.getAllMovies(this.pages).subscribe((data) => {
        this.movie = data.results;
        this.numPages(data.total_pages);
      });
    } else {
      this.movies.searchProductByName(event.target.value).subscribe((data) => {
        console.log(data);
        this.movie = data.results;
        console.log(data.total_pages);
        this.numPages(data.total_pages);
      });
    }
  }
  search() {
    if (this.name == '') {
      this.movies.getAllMovies(this.pages).subscribe((data) => {
        this.movie = data.results;
        this.numPages(data.total_pages);
      });
    } else {
      this.movies.searchProductByName(this.name).subscribe((data) => {
        console.log(data);
        this.movie = data.results;
        console.log(data.total_pages);
        this.numPages(data.total_pages);
      });
      // alert("222")
    }
  }
  allmove() {
    this.movies.getAllMovies(this.pages).subscribe((data) => {
      console.log(data);
      this.movie = data.results;
      console.log(data.total_pages);
      this.numPages(data.total_pages);
    });
  }

  pageid(pages: number) {
    this.movies.getAllMovies(this.pages).subscribe((data) => {
      this.movie = data.results;
      console.log(this.movie);
    });
  }
  numPages(num: number) {
    this.arrayOfDigits = [];
    for (var i = 1; i <= num; i++) {
      this.arrayOfDigits.push(i);
    }
  }
  //////////////////////////
}
