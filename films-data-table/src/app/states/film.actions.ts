import { FilmsStateModel } from './film.state';

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

export class DeleteFilmAction {
  public static readonly type = '[DeleteFilm] action';
  constructor(public payload: number) {}
}

export class SetFilm {
  public static readonly type = '[SetFilm] action';
  constructor(public payload: FilmsStateModel) {}
}