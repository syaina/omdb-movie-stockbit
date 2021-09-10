import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { movieReducer } from './movieReducer';

const reducers = combineReducers ( {
  movieReducer: movieReducer,
  modal: modalReducer
})

export default reducers;