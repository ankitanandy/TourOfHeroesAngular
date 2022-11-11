import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  readonly ApiUrl="https://tourofheroesdemo.azurewebsites.net/api/hero";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  getHeroesMock()
  {
   return this.http.get<Hero[]>('/assets/mock-heroouptput.json');
  
  }
  getHeroes():Observable<Hero[]>
  {
   return this.http.get<Hero[]>(this.ApiUrl);
  }
  getHero(id:number):Observable<Hero>
  {
   return this.http.get<Hero>(`${this.ApiUrl}/${id}`);
  }

  updateHeroes(hero?:Hero):void
  {
  this.http.put(`${this.ApiUrl}/${hero?.id}`,hero,);
  }
}
