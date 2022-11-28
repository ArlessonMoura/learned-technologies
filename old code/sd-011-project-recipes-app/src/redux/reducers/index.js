import { combineReducers } from 'redux';
import RecipesReducer from './RecipesReducer';

const rootReducer = combineReducers({
  RecipesReducer,
});

export default rootReducer;
