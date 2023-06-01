import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilmDetailsResponse } from '../film-detail/film-detail';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UpdateFilmAction } from '../states/film.actions';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.scss']
})
export class FilmEditComponent implements OnInit {
  filmForm!: FormGroup;
  movieId!: number;
  filmDetails!: FilmDetailsResponse 

  constructor(private route: ActivatedRoute, private store: Store, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.movieId = params['id'];
      this.store.select(state => state.filmsDataTable.filmDetails).subscribe((data: FilmDetailsResponse[]) => 
      this.filmDetails = data.filter(e => e.id === Number(this.movieId))[0]);
      this.loadFormInstance();
    })
  }

  public loadFormInstance(): void {
    // En caso que se cree una nueva actividad
    // if (this.activity === undefined)
    // {
    //   // Se inicializa la colección
    //   this.activity = new Activity();
    //   this.activity.name  = '';
    //   this.activity.category = null;
    //   this.activity.subcategory = null;
    //   this.activity.description = '';
    //   this.activity.language = null;
    //   this.activity.date = '';
    //   this.activity.price = 0;
    //   this.activity.minimumCapacity = 0;
    //   this.activity.limitCapacity = 0;
    //   this.activity.peopleRegistered = 0;
    //   this.activity.state = activityStates.Places_available;
    //   this.activity.signUpUsers = new Array<number>();
    // }
    // else {
    //   this.setEnumSubcategory(this.activity.category);
    // }
    this.filmForm = new FormGroup({
      title: new FormControl(this.filmDetails.title),
      overview: new FormControl(this.filmDetails.overview)
    });
  }

  public updateFilm (auxFilmDetails: FilmDetailsResponse){
    this.store.dispatch(new UpdateFilmAction(auxFilmDetails));
    //this.location.back();
  }

  public submit(): void {
    var auxFilmDetails = {...this.filmDetails}
    auxFilmDetails.title = this.filmForm.value.title;
    auxFilmDetails.overview = this.filmForm.value.overview;
    this.updateFilm(auxFilmDetails);
  }
}
