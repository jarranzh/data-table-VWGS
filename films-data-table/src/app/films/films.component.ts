import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service';
import { Film, Genre } from './film';
import { Store } from '@ngxs/store';
import { DeleteFilmAction, GetFilmsListAction, GetGenresListAction } from '../states/film.actions';
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
    this.films$.subscribe(data => this.films = data);
    this.genres$ = this.store.select(state => state.filmsDataTable.genre);
  }

  ngOnInit(): void {
    if(this.films.length === 0) {
      this.getFilms();
    }
    this.getGenresList();
  }

  getFilms(): void {
    this.store.dispatch(new GetFilmsListAction());
  }

  deleteFilm(id: number): void {
    if (confirm('Are you sure yu want to delete this film?')) {
    this.store.dispatch(new DeleteFilmAction(id));
    }
  }

  getGenresList(): void {
    this.store.dispatch(new GetGenresListAction()).subscribe((data) => this.genres = data.filmsDataTable.genres) ;
  }

}
