import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilmDetailsResponse } from '../film-detail/film-detail';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SaveFilmAction, UpdateFilmAction } from '../states/film.actions';
import { Film } from '../films/film';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.scss']
})
export class FilmEditComponent implements OnInit {
  filmForm!: FormGroup;
  movieId!: number;
  filmDetails!: FilmDetailsResponse;
  filmsList: Film[] = [];

  constructor(private route: ActivatedRoute, private store: Store, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.movieId = params['id'];
        this.store.select(state => state.filmsDataTable.filmDetails).subscribe((data: FilmDetailsResponse[]) =>
          this.filmDetails = data.filter(e => e.id === Number(this.movieId))[0]);
        this.loadFormInstance();
      })
    this.store.select(state => state.filmsDataTable.films).subscribe((data: Film[]) => this.filmsList = data);
  }

  public loadFormInstance(): void {
    this.filmForm = new FormGroup({
      title: new FormControl(this.filmDetails?.title || ''),
      overview: new FormControl(this.filmDetails?.overview || '')
    });
  }

  public generateId(): number | null{
    var id = Math.floor(Math.random() * 1000000);
    while (this.filmsList.find(e => e.id === id)) {
      id = Math.floor(Math.random() * 1000000);
    }
      return id;
  }


  public saveFilm(auxFilmDetails: FilmDetailsResponse) {
    var auxId = this.generateId();
    if(auxId === null) {
      auxId = this.generateId() as number;
    }
    else {
      auxFilmDetails.id = auxId as number;  
      this.store.dispatch(new SaveFilmAction(auxFilmDetails));        
      this.location.back();

    }
  }

  public updateFilm(auxFilmDetails: FilmDetailsResponse) {
    this.store.dispatch(new UpdateFilmAction(auxFilmDetails));
    this.location.back();
  }

  public isNew(): boolean {
    return !!!this.movieId;
  }

  public saveOrUpdate(auxFilmDetails: FilmDetailsResponse) {
    this.isNew() ? this.saveFilm(auxFilmDetails) : this.updateFilm(auxFilmDetails);
  }

  public submit(): void {
    var auxFilmDetails = { ...this.filmDetails }
    auxFilmDetails.title = this.filmForm.value.title;
    auxFilmDetails.overview = this.filmForm.value.overview;
    this.saveOrUpdate(auxFilmDetails);
  }
}
