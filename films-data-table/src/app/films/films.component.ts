import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service';
import { Film } from './film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  providers: [FilmsService],
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmsService.getFilms()
      .subscribe(filmsResponse => (this.films = filmsResponse.results));
  }

}
