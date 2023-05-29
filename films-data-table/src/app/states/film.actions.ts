import { FilmsStateModel } from './film.state';

export class GetFilmsListAction {
  public static readonly type = '[GetFilmsList] action';
  constructor() {}
}

export class GetGenresListAction {
  public static readonly type = '[GetGenresList] action';
  constructor() {}
}

export class SetFilm {
  public static readonly type = '[SetFilm] action';
  constructor(public payload: FilmsStateModel) {}
}