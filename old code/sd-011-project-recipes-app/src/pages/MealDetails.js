import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipeDetailsAPIAction, fetchRecipesAPIAction } from '../redux/actions';
import objToArryOfObj from '../helper/objToArryOfObj';
import FavBtn from '../components/FavBtn';
import ShareBtn from '../components/ShareBtn';
import RecipeStageBtn from '../components/RecipeStageBtn';
import CarouselRecipes from '../components/CarouselRecipes';
import ThumbDetails from '../components/ThumbDetails';
import IngredientsList from '../components/IngredientsList';
import RecipeVideo from '../components/RecipeVideo';

const URL_TO_DRINKS_RECIPES = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function MealDetails(
  { recipesData, recipeDetailsData,
    fetchDetails, fetchRecipes, match },
) {
  const { id } = match.params;

  useEffect(() => {
    const getMealDetails = async () => {
      await fetchRecipes();
      await fetchDetails(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    };
    getMealDetails();
  }, [fetchDetails, fetchRecipes, id]);

  if (recipeDetailsData.meals) {
    const { meals } = recipeDetailsData;
    const data = meals[0];
    const { strMeal, strMealThumb, strCategory, strInstructions, strYoutube } = data;
    const ingredientsAndMesure = objToArryOfObj(data);

    return (
      <div>
        {console.log(ingredientsAndMesure)}
        <ThumbDetails thumb={ strMealThumb } />
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <ShareBtn url={ match.url } />
        <FavBtn data={ data } recipeType="meals" />
        <span data-testid="recipe-category">{ strCategory }</span>
        <IngredientsList list={ ingredientsAndMesure } />
        <p data-testid="instructions">{strInstructions}</p>
        <RecipeVideo video={ strYoutube } />
        <CarouselRecipes data={ recipesData.drinks } recipeType="drinks" />
        <RecipeStageBtn
          id={ id }
          recipeType="meals"
          ingredients={ ingredientsAndMesure }
        />
      </div>
    );
  }

  return (
    <span>Loading</span>
  );
}

const mapStateToProps = (state) => ({
  recipesData: state.RecipesReducer.recipesData,
  recipeDetailsData: state.RecipesReducer.recipeDetailsData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (url) => dispatch(fetchRecipeDetailsAPIAction(url)),
  fetchRecipes: () => dispatch(fetchRecipesAPIAction(URL_TO_DRINKS_RECIPES, 'drinks')),
});

MealDetails.propTypes = {
  fetch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
