import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsComponent } from './films/films.component';
import { FilmEditComponent } from './film-edit/film-edit.component';

const routes: Routes = [
  {
    path: '', component: FilmsComponent,
  },
  {
    path: 'details', component: FilmDetailComponent
  },
  {
    path: 'details-edit', component: FilmEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
