import { FilmDetailsResponse } from '../film-detail/film-detail';

export class GetFilmsListAction {
  public static readonly type = '[GetFilmsList] action';
  constructor() {}
}
export class GetFilmDetailsAction {
  public static readonly type = '[GetFilmDetails] action';
  constructor(public payload: number) {}
}

export class GetGenresListAction {
  public static readonly type = '[GetGenresList] action';
  constructor() {}
}

export class UpdateFilmAction {
  public static readonly type = '[UpdateFilm] action';
  constructor(public payload: FilmDetailsResponse) {}
}

export class SaveFilmAction {
  public static readonly type = '[SAveFilm] action';
  constructor(public payload: FilmDetailsResponse) {}
}

export class DeleteFilmAction {
  public static readonly type = '[DeleteFilm] action';
  constructor(public payload: number) {}
}