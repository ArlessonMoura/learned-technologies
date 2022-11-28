import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeStageBtn({ id, recipeType, ingredients }) {
  const type = recipeType === 'meals' ? 'meals' : 'cocktails';
  const urlType = recipeType === 'meals' ? 'comidas' : 'bebidas';
  const URL = `/${urlType}/${id}/in-progress`;

  const checkDoneRecipes = () => {
    if (localStorage.doneRecipes
    && (JSON.parse(localStorage.doneRecipes)).find((recipe) => recipe.id === id)) {
      return true;
    }
    return false;
  };

  const checkInProgressRecipes = () => {
    if (localStorage.inProgressRecipes
      && JSON.parse(localStorage.inProgressRecipes)[type]
      && JSON.parse(localStorage.inProgressRecipes)[type][id]) {
      return true;
    }
    return false;
  };

  const generateProgressRecipe = () => {
    if (localStorage.inProgressRecipes) {
      const progressRecipes = JSON.parse(localStorage.inProgressRecipes);
      const newProgressRecipes = {
        ...progressRecipes, [type]: { ...progressRecipes[type], [id]: ingredients } };
      localStorage.inProgressRecipes = JSON.stringify(newProgressRecipes);
    } else {
      localStorage
        .setItem('inProgressRecipes', JSON.stringify({ [type]: { [id]: ingredients } }));
    }
  };

  switch (true) {
  case checkDoneRecipes():
    return null;
  case checkInProgressRecipes():
    return (
      <Link to={ URL }>
        <button type="button" data-testid="start-recipe-btn">Continuar Receita</button>
      </Link>
    );

  default:
    return (
      <Link to={ URL }>
        <button
          className="btn-start-recipe"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ generateProgressRecipe }
        >
          Iniciar Receita
        </button>
      </Link>
    );
  }
}

RecipeStageBtn.propTypes = {
  id: PropTypes.string,
  recipeType: PropTypes.string,
}.isRequired;

export default RecipeStageBtn;
