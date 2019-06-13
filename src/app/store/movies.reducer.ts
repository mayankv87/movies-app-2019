import * as types from './../actions/movies.types';

const InitialState = {
  searchTerm: null,
  list: [],
  filters: []
};

export function MoviesReducer(state = InitialState, action: any) {
  switch (action.type) {
    case types.GET_MOVIES:
      return Object.assign({}, state, { list: action.payload.list });
    case types.SET_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm
      });
    case types.SET_FILTERS:
      return Object.assign({}, state, {
        filters: action.payload.filters
      });
    default:
      return state;
  }
}
