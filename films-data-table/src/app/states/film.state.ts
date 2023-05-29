import { Injectable } from '@angular/core';
import { Action, State, Selector, StateContext } from '@ngxs/store';
import { GetFilmsListAction, GetGenresListAction } from './film.actions';
import { Observable, tap } from 'rxjs';
import { FilmsService } from '../films/films.service';
import { Film, FilmResponse, Genre, GenresResponse } from '../films/film';

interface FilmStateModel extends Film {}
interface GenresStateModel extends Genre {}

export interface FilmsStateModel {
  films: FilmStateModel[],
  genres: GenresStateModel[]
}

export const DEFAULT_FILMS_DATA_TABLE_STATE = {
  films: [],
  genres: []
}

@Injectable()
@State<FilmsStateModel>({
  name: 'filmsDataTable',
  defaults: DEFAULT_FILMS_DATA_TABLE_STATE
})
export class FilmState {

  @Selector()
  public static getFilmState(state: FilmsStateModel) {
    return state;
  }

  constructor(private filmService: FilmsService) {}

  @Action(GetFilmsListAction)
  public getFilmsList(ctx: StateContext<FilmsStateModel>): Observable<FilmResponse> {
    return this.filmService.getFilms().pipe(tap((response: FilmResponse) => {
      ctx.patchState({films: response.results})
    }))
  }

  @Action(GetGenresListAction)
  public getGenresList(ctx: StateContext<FilmsStateModel>): Observable<GenresResponse> {
    return this.filmService.getGenres().pipe(tap((response: GenresResponse) => {
      ctx.patchState({genres: response.genres})
    }))
  }
}