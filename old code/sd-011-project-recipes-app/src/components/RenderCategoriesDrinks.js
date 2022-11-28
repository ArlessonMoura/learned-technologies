import React from 'react';
import { Link } from 'react-router-dom';

function RenderCategoriesDrinks(whoCategory) {
  const MagicMikeDance = 12;

  return (
    whoCategory && whoCategory.slice(0, MagicMikeDance).map((itemCard, index) => (
      <Link key={ index } to={ `/bebidas/${itemCard.idDrink}` }>

        <div data-testid={ `${index}-recipe-card` } className="card">
          <img
            src={ itemCard.strDrinkThumb }
            data-testid={ `${index}-card-img` }
            alt={ itemCard.strDrinks }
          />
          <div className="card-body">
            <p data-testid={ `${index}-card-name` }>{ itemCard.strDrink }</p>
          </div>

        </div>
      </Link>))
  );
}

export default RenderCategoriesDrinks;
