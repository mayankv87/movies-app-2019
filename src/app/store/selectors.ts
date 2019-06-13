import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MoviesSelector {

    getAllMovies(state: any) {
        return state.list;
    }

    getMovieById(movieList: any, movieId: number) {
        return movieList.filter((movie) => {
            return movie.id === movieId;
        })[0];
    }

    containsAnyGenres(source: any, target: any) {
        const result = source.filter((item: any) => {
           return target.indexOf(item) > -1;
        });
        return (result.length > 0);
    }
    filtereMoviesBySearchTerm(state: any) {
        const movies = this.getAllMovies(state).filter((movie) => {
                return movie.name.toLowerCase().indexOf(state.searchTerm) > -1;
            });
        return movies;
    }

    filterMoviesByGenres(state: any) {
        return this.getAllMovies(state).filter((movie: any) => {
            let genresMatching = false;
            if (this.containsAnyGenres(movie.genres, state.filters)) {
                genresMatching = true;
            }
            return genresMatching;
        });
    }

    getMoviesList(state: any) {
        if (state.searchTerm !== null) {
            return this.filtereMoviesBySearchTerm(state);
        } else if (state.filters.length !== 0) {
            return this.filterMoviesByGenres(state);
        } else {
            return this.getAllMovies(state);
        }
    }
}
