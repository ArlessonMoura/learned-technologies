import { GET_RECIPES_API, REQUEST_API, GET_RECIPE_DETAILS_API } from '../actions';

// meals or drinks
const INITIAL_STATE = {
  recipesData: [],
  recipeDetailsData: [],
  isLoading: false,
};

function RecipesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_RECIPES_API:
    return {
      ...state,
      recipesData: action.data,
      isLoading: false,
    };
  case GET_RECIPE_DETAILS_API:
    return {
      ...state,
      recipeDetailsData: action.data,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default RecipesReducer;
