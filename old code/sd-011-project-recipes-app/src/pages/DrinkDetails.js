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

const URL_TO_MEALS_RECIPES = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function MealDetails(
  { recipesData, recipeDetailsData,
    fetchDetails, fetchRecipes, match },
) {
  const { id } = match.params;

  useEffect(() => {
    const getDrinkDetails = async () => {
      await fetchRecipes();
      await fetchDetails(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    };
    getDrinkDetails();
  }, [fetchDetails, fetchRecipes, id]);

  if (recipeDetailsData.drinks) {
    const { drinks } = recipeDetailsData;
    const data = drinks[0];
    const { strDrink, strDrinkThumb, strAlcoholic, strInstructions } = data;
    const ingredientsAndMesure = objToArryOfObj(data);

    return (
      <div>
        {console.log(ingredientsAndMesure)}
        <ThumbDetails thumb={ strDrinkThumb } />
        <h1 data-testid="recipe-title">{ strDrink }</h1>
        <ShareBtn url={ match.url } />
        <FavBtn data={ data } recipeType="drinks" />
        <span data-testid="recipe-category">{ strAlcoholic }</span>
        <IngredientsList list={ ingredientsAndMesure } />
        <p data-testid="instructions">{strInstructions}</p>
        <CarouselRecipes data={ recipesData.meals } recipeType="meals" />
        <RecipeStageBtn
          id={ id }
          recipeType="drinks"
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
  fetchRecipes: () => dispatch(fetchRecipesAPIAction(URL_TO_MEALS_RECIPES, 'meals')),
});

MealDetails.propTypes = {
  fetch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
