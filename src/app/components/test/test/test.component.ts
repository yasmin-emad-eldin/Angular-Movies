import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  counter: any = 0;
  ary: any[] = ['three', 'seven', 'eleven'];
  arryFav: any[] = [];
  arryHeart: any;
  arryHear: string = 'gray';

  constructor(private movies: MoviesService) {}

  ngOnInit() {
    this.counter = localStorage.getItem('counter');
    let index = this.ary.indexOf('three'); // get index if value found otherwise -1
    console.log(this.ary);

    if (index > -1) {
      //if found
      this.ary.splice(index, 1);
      console.log(this.ary);
    }
    var data1 = [20, 18, 15, 10, 9];
    console.log(data1.length);
    function exerciseOne(names: any) {
      names.forEach((name: any) => console.log(name));
    }
    exerciseOne(['Jack', 'Joe', 'John', 'Bob']);
    this.movies.getFavoriteList().subscribe((data) => {
      this.arryHeart = data.results.map(function (heart: any) {
        return heart.id;
      });
      console.log(this.arryHeart);
      console.log(this.arryHeart[0]);

      this.arryHeart.push('kk');
      for (var i = 0; i < this.arryHeart.length; i++) {
        console.log(this.arryHeart[i]);
        let obj = data.results.find((o: any) => o.id === this.arryHeart[i]);
       
        }
        // let box1= document.getElementById(JSON.stringify(this.arryHeart[i])) as HTMLDivElement;
        // if (obj) {
        //   alert('yes');
        //   this.arryHear = 'red';
        // } else {
        //             this.arryHear = 'blue';

        //   alert('no');
        // }
      //}
    });
    // function exerciseOne(names:any) {
    //   names.forEach((name: any) => console.log(name));
    // }
    // exerciseOne(arryHeart)
    // })
    // function exerciseOne1(names:any){
    //   names.forEach(function(x:any){
    //     console.log(x)
    //   });
    // }
    // exerciseOne1(['John1','peter1','mart1'])
  }
  add() {
    localStorage.setItem('counter', JSON.stringify(++this.counter));
  }
  minis() {
    localStorage.setItem('counter', JSON.stringify(--this.counter));
  }
  getColor(idColor:any){
    this.movies.getFavoriteList().subscribe((data) => {
      // this.arryHeart = data.results.map(function (heart: any) {
      //   return heart.id;
      // });
      // console.log(this.arryHeart);
      // console.log(this.arryHeart[0]);

      // this.arryHeart.push('kk');
      // for (var i = 0; i < data.results.length; i++) {
        // console.log(this.arryHeart[i]);
        let obj = data.results.find((o: any) => o.id ===idColor);
       if (obj){
        return "bule"
       }
       else{
        return "white"
       }
        // }
  })
}

}
