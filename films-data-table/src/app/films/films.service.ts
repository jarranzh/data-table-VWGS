import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResponse, GenresResponse } from './film';
import { FilmDetailsResponse } from '../film-detail/film-detail';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  API_KEY = '746d2bbbd834e0945d86303a25ca3072';
  filmsUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${this.API_KEY}`;
  genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}`;
  filmDetailUrl = `https://api.themoviedb.org/3/movie/movieID?api_key=${this.API_KEY}`

  constructor(private http: HttpClient) { }

  getFilms(): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(this.filmsUrl);
  }

  getFilmDetail(id: number): Observable<FilmDetailsResponse> {
    const auxfilmDetailUrl= this.filmDetailUrl.replace('movieID', id.toString());
    return this.http.get<FilmDetailsResponse>(auxfilmDetailUrl);
  }

  getGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(this.genresUrl);
  }


}
