import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
private counterSubject:BehaviorSubject<number>
  private httpoptions={};
  session_id:string="b8467177e245e7ffe25350dad2d34f68f2090857"
  constructor(private http: HttpClient) {
this.counterSubject=new BehaviorSubject<number>(0)
  this.httpoptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=utf-8'
    }),
  };
  }
  
  getAllMovies(page:number):Observable<any>{
return this.http.get<any>(`${environment.apiUrl}movie/popular${environment.api_key}&page=${page}`)
  }
  getMovieDetials(id:number):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}movie/${id}${environment.api_key}`)
    }
    searchProductByName(MovieName:any):Observable<any>{
      // return this.noonproduts.find(prd=>prd.Name==prdName);
      return this.http.get<any>(`${environment.apiUrl}search/movie${environment.api_key}&query=${MovieName}`)
    } 
    getGuestSession():Observable<any>{
      return this.http.get<any>(`${environment.apiUrl}authentication/guest_session/new${environment.api_key}`)
      }
 
      getAcessToken():Observable<any>{
        return this.http.get<any>(`${environment.apiUrl}authentication/token/new${environment.api_key}`)

      }
      getSession():Observable<any>{
        return this.http.post<any>(`${environment.apiUrl}authentication/session/new${environment.api_key}`,JSON.stringify({ request_token:'7913a2e8dd3274f2725125d35fb6c9f16d9c2531'}),this.httpoptions)

      }
      getAcountDetials():Observable<any>{
        return this.http.get<any>(`${environment.apiUrl}account${environment.api_key}&session_id=${this.session_id}`)
      }
      getFavoriteList():Observable<any>{
      let acountId=localStorage.getItem("acountId")
      return this.http.get<any>(`${environment.apiUrl}account/${acountId}/favorite/movies${environment.api_key}&sort_by=created_at.desc&session_id=${this.session_id}`)
      }
      addFavoriteMovie(movie:any):Observable<any>{
        let acountId=localStorage.getItem("acountId")
        return this.http.post<any>(`${environment.apiUrl}account/${acountId}/favorite${environment.api_key}&session_id=${this.session_id}`,JSON.stringify(movie),this.httpoptions)
      }
      getCartItems():Observable<number> {

        return this.counterSubject.asObservable()
    }

    updateCartItems(items: number) {

        this.counterSubject.next(items);


    };

  }

