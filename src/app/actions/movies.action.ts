import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../store/index';
import { HttpClient } from '@angular/common/http';
import * as types from './movies.types';

@Injectable({
    providedIn: 'root'
})

export class MoviesAction {

    constructor(private ngRedux: NgRedux<IAppState>, private http: HttpClient) {}

    getMovies() {
        this.http.get('./assets/mock/movies.json')
        .subscribe((res) => {
            const list = res;
            this.ngRedux.dispatch({
                type: types.GET_MOVIES,
                payload: {
                    list
                }
            });
        });
    }

    setSearchTerm(searchText) {
        this.ngRedux.dispatch({
            type: types.SET_SEARCH_TERM,
            payload: {
                searchTerm: searchText ? searchText.toLowerCase() : null
            }
        });
    }

    setFilters(filters) {
        this.ngRedux.dispatch({
            type: types.SET_FILTERS,
            payload: {
                filters
            }
        });
    }

}
