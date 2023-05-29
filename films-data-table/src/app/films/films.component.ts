import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service';
import { Film, Genre } from './film';
import { Store } from '@ngxs/store';
import { GetFilmsListAction, GetGenresListAction } from '../states/film.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  providers: [FilmsService],
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films$: Observable<Film[]>;
  genres$: Observable<Genre[]>;
  films: Film[] = [];
  genres: Genre[] = [];

  constructor(private store: Store) { 
    this.films$ = this.store.select(state => state.filmsDataTable.films);
    this.genres$ = this.store.select(state => state.filmsDataTable.genre);
  }

  ngOnInit(): void {
    this.getFilms();
    this.getGenresList();
  }

  getFilms(): void {
    this.store.dispatch(new GetFilmsListAction());
  }

  getGenresList(): void {
    this.store.dispatch(new GetGenresListAction()).subscribe((data) => this.genres = data.filmsDataTable.genres) ;
  }

}
