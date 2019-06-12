import { combineReducers } from 'redux';
import { MoviesReducer } from './movies.reducer';
import { Movies } from './../models/movies.model';

export class IAppState {
    movies: Movies;
}

export const rootReducer = combineReducers<IAppState>({
    movies: MoviesReducer
});
