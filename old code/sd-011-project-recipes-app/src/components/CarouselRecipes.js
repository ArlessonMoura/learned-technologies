import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const SIX_CARDS = 6;

function CarouselRecipes({ data, recipeType }) {
  const thumbType = recipeType === 'meals' ? 'strMealThumb' : 'strDrinkThumb';
  const urlType = recipeType === 'meals' ? 'comidas' : 'bebidas';
  const idType = recipeType === 'meals' ? 'idMeal' : 'idDrink';
  const titleType = recipeType === 'meals' ? 'strMeal' : 'strDrink';
  return (
    <div>
      <Carousel>
        {data && data.map((recipe, index) => {
          if (index < SIX_CARDS && index % 2 === 0) {
            return (
              <CarouselItem key={ index }>
                <CardGroup>
                  <Link to={ `/${urlType}/${recipe[idType]}` }>
                    <RecipeCard
                      thumb={ recipe[thumbType] }
                      title={ recipe[titleType] }
                      index={ index }
                    />
                  </Link>
                  <Link to={ `/${urlType}/${data[index + 1][idType]}` }>
                    <RecipeCard
                      thumb={ data[index + 1][thumbType] }
                      title={ data[index + 1][titleType] }
                      index={ index + 1 }
                    />
                  </Link>
                </CardGroup>
              </CarouselItem>
            );
          }
          return '';
        })}
      </Carousel>
    </div>
  );
}

CarouselRecipes.propTypes = {
  data: PropTypes.array,
}.isRequired;

export default CarouselRecipes;
