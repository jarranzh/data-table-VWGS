import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { switchMap } from 'rxjs';
import { GetFilmDetailsAction } from '../states/film.actions';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  movieId!: number;

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.movieId = params['id'];
      })

      this.getFilmDetails();
  }

  getFilmDetails(): void {
    this.store.dispatch(new GetFilmDetailsAction(this.movieId));
  }

}
