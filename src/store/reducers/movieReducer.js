import { ActionTypes } from '../type'

const initialState = {
   defaultMovies: [],
   movieResult: [],
   movieDetailResult: ""
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case ActionTypes.SET_DEFAULT_MOVIES:
            return {
                ...state,
                defaultMovies: payload
            }

        case ActionTypes.SET_MOVIE_RESULT:
            return {
                ...state,
                movieResult: payload
            }

        case ActionTypes.SET_MOVIE_DETAIL_RESULT:
            return {
                ...state,
                movieDetailResult: payload
            }

        default: 
            return state;
    }

}