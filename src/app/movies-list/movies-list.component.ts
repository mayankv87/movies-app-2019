import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Movies } from './../models/movies.model';
import { Observable } from 'rxjs';
import { MoviesAction } from './../actions/movies.action';
import { MoviesSelector } from '../store/selectors';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movieList = [];
  mySlideImages = ['dark-knight', 'deadpool-banner', 'compton-banner'];
  mySlideOptions = {items: 1, dots: true, nav: false};
  @select() public movies: Observable<Movies>;

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
