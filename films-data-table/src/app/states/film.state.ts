import { Injectable } from '@angular/core';
import { Action, State, Selector, StateContext } from '@ngxs/store';
import { DeleteFilmAction, GetFilmDetailsAction, GetFilmsListAction, GetGenresListAction } from './film.actions';
import { Observable, tap } from 'rxjs';
import { FilmsService } from '../films/films.service';
import { Film, FilmResponse, Genre, GenresResponse } from '../films/film';
import { FilmDetailsResponse } from '../film-detail/film-detail';

interface FilmStateModel extends Film {}
interface GenresStateModel extends Genre {}
interface FilmDetailsStateModel extends FilmDetailsResponse {}

export interface FilmsStateModel {
  films: FilmStateModel[],
  filmDetails: FilmDetailsStateModel[],
  genres: GenresStateModel[],
}

export const DEFAULT_FILMS_DATA_TABLE_STATE = {
  films: [],
  filmDetails: [],
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

  @Action(GetFilmDetailsAction)
  public getFilmDetails(ctx: StateContext<FilmsStateModel>, { payload }: GetFilmDetailsAction): Observable<FilmDetailsResponse> {
    return this.filmService.getFilmDetail(payload).pipe(tap((response: FilmDetailsResponse) => {
      ctx.patchState({filmDetails: [response]})
    }))
  }

  @Action(DeleteFilmAction)
  public deleteFilm(ctx: StateContext<FilmsStateModel>, { payload }: DeleteFilmAction): void {
    const state = ctx.getState();
    const newFilmsList = state.films.filter(e => e.id != payload);
    ctx.patchState({ films: newFilmsList});
    }

  @Action(GetGenresListAction)
  public getGenresList(ctx: StateContext<FilmsStateModel>): Observable<GenresResponse> {
    return this.filmService.getGenres().pipe(tap((response: GenresResponse) => {
      ctx.patchState({genres: response.genres})
    }))
  }
}