import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Movies } from './../models/movies.model';
import { Observable } from 'rxjs';
import { MoviesAction } from './../actions/movies.action';
import { MoviesSelector } from './../selectors';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movieList = [];
  @select('movies') public movies: Observable<Movies>;
  constructor(private actions: MoviesAction,
              private selector: MoviesSelector) {
    this.actions.getMovies();
  }

  ngOnInit() {
    this.movies.subscribe((res) => {
        this.movieList = this.selector.getMoviesList(res);
    });
  }

}
