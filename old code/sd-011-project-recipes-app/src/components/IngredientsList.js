import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientsList({ list }) {
  return (
    <div>
      {list
        .map((ingredient, index) => (
          <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${ingredient.name} ${ingredient.measure ? ingredient.measure : ''}`}
          </p>
        ))}
    </div>
  );
}

IngredientsList.propTypes = {
  list: PropTypes.array,
}.isRequired;
