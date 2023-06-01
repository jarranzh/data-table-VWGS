import { Injectable } from '@angular/core';
import { Action, State, Selector, StateContext } from '@ngxs/store';
import { DeleteFilmAction, GetFilmDetailsAction, GetFilmsListAction, GetGenresListAction, UpdateFilmAction } from './film.actions';
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
      response.results.map(e => ctx.dispatch(new GetFilmDetailsAction(e.id)));
      ctx.patchState({films: response.results})
    }))
  }

  @Action(GetFilmDetailsAction)
  public getFilmDetails(ctx: StateContext<FilmsStateModel>, { payload }: GetFilmDetailsAction): Observable<FilmDetailsResponse> {
    return this.filmService.getFilmDetail(payload).pipe(tap((response: FilmDetailsResponse) => {
      var currentFilmDetails = ctx.getState().filmDetails;
      ctx.patchState({filmDetails: [...currentFilmDetails, response]});
    }))
  }

  @Action(UpdateFilmAction)
  public updateFilm(ctx: StateContext<FilmsStateModel>, { payload }: UpdateFilmAction): void {
    let currentFilmsList = JSON.parse(JSON.stringify(ctx.getState().films));
    const newFilmsList = currentFilmsList.map((e:Film) => e.id === payload.id ? {...e, ...payload} : {...e});
    let currentFilmsDetailsList = JSON.parse(JSON.stringify(ctx.getState().filmDetails));
    const newFilmsDetailsList = currentFilmsDetailsList.map((e:Film) => e.id === payload.id ? {...e, ...payload} : {...e});
    ctx.patchState({ films: newFilmsList,  filmDetails: newFilmsDetailsList});
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