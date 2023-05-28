import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResponse } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=746d2bbbd834e0945d86303a25ca3072"

  constructor(private http: HttpClient,) { }

  getFilms(): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(this.url);
  }
}
