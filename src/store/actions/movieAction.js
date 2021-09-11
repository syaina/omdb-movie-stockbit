import { ActionTypes } from '../type'

export const setDefaultMovies = (movies) => {
    return {
        type: ActionTypes.SET_DEFAULT_MOVIES,
        payload: movies
    }
}

export const setMovieResult = (movies) => {
    return {
        type: ActionTypes.SET_MOVIE_RESULT,
        payload: movies
    }
}

export const setMovieDetailResult = (movie) => {
    return {
        type: ActionTypes.SET_MOVIE_DETAIL_RESULT,
        payload: movie
    }
}

export const setKeyword = (movie) => {
    return {
        type: ActionTypes.SET_KEYWORD,
        payload: movie
    }
}