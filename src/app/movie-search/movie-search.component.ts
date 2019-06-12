import { Component } from '@angular/core';
import { MoviesAction } from './../actions/movies.action';
import { Genres } from './../models/movies.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  constructor(private action: MoviesAction) {}
  filters = [];
  searchText: string;
  genres = Object.keys(Genres);
  searchMovies(searchText: string) {
    this.action.setSearchTerm(searchText);
  }

  prepareFilters(filter: string) {
    filter = filter.toLowerCase();
    if (!this.filters.includes(filter)) {
      this.filters.push(filter);
    } else {
      this.filters = this.filters.filter(item => {
        return item !== filter;
      });
    }
    return this.filters;
  }

  filterByGenres(filter: string) {
    const filters = this.prepareFilters(filter);
    this.action.setFilters(filters);
  }
}
