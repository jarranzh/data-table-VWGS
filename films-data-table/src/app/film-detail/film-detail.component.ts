import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { FilmDetailsResponse } from './film-detail';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})

export class FilmDetailComponent implements OnInit {
  movieId!: number;
  filmDetails!: FilmDetailsResponse 

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.movieId = params['id'];
        this.store.select(state => state.filmsDataTable.filmDetails).subscribe((data: FilmDetailsResponse[]) => 
        this.filmDetails = data.filter(e => e.id === Number(this.movieId))[0]);
      })
  }
}
