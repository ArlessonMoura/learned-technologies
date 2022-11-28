import React from 'react';
import { Link } from 'react-router-dom';

function RenderCategoriesMeals(whoCategory) {
  const MagicMikeDance = 12;

  return (
    whoCategory && whoCategory.slice(0, MagicMikeDance).map((itemCard, index) => (
      <Link key={ index } to={ `/comidas/${itemCard.idMeal}` }>

        <div data-testid={ `${index}-recipe-card` } className="card">
          <img
            src={ itemCard.strMealThumb }
            data-testid={ `${index}-card-img` }
            alt={ itemCard.strMeal }
          />
          <div className="card-body">
            <p data-testid={ `${index}-card-name` }>{ itemCard.strMeal }</p>
          </div>
        </div>
      </Link>))
  );
}

export default RenderCategoriesMeals;
