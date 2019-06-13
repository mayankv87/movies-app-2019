import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MoviesSelector {

    constructor() {}

    getAllMovies(state) {
        return state.list;
    }

    getMovieById(movieList, movieId) {
        console.log(movieList);
        return movieList.filter((movie) => {
            return movie.id === movieId;
        })[0];
    }

    containsAnyGenres(source, target) {
        const result = source.filter((item) => {
           return target.indexOf(item) > -1;
        });
        return (result.length > 0);
    }
    filtereMoviesBySearchTerm(state) {
        const movies = this.getAllMovies(state).filter((movie) => {
                return movie.name.toLowerCase().indexOf(state.searchTerm) > -1;
            });
        return movies;
    }

    filterMoviesByGenres(state) {
        return this.getAllMovies(state).filter((movie) => {
            let genresMatching = false;
            if (this.containsAnyGenres(movie.genres, state.filters)) {
                genresMatching = true;
            }
            return genresMatching;
        });
    }

    getMoviesList(state) {
        if (state.searchTerm !== null) {
            return this.filtereMoviesBySearchTerm(state);
        } else if (state.filters.length !== 0) {
            return this.filterMoviesByGenres(state);
        } else {
            return this.getAllMovies(state);
        }
    }
}
