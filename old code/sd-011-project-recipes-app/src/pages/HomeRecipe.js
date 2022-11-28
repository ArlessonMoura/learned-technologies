import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { fetchRecipesAPIAction,
  fetchList,
  fetchCategories, GET_CATEGORIES_MEALS } from '../redux/actions';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import RenderCategoriesMeals from '../components/RenderCategoriesMeals';

function HomeRecipe({ mealsData }) {
  const MagicMikeDance = 12;
  const magicNumberFive = 5;
  const urlFetch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlFetchList = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const [isLoading, setIsLoading] = React.useState(true);
  const [indexOfCategory, setIndexOfCategory] = React.useState(null);
  const [typeCategories, setTypeCategories] = React.useState(true);
  const [mealsFilter, setMealsFilter] = React.useState([]);
  const [renderCategories, setRenderCategories] = React.useState(false);
  const [whoCategory, setWhoCategory] = React.useState([]);

  const dispatch = useDispatch();
  const fetchListApi = (url) => dispatch(fetchList(url));
  const getCategory = (url, type) => dispatch(fetchCategories(url, type));
  const fetchMeals = (url,
    recipeType) => dispatch(fetchRecipesAPIAction(url, recipeType));

  const handlerCard = async () => {
    const responseList = await fetchListApi(urlFetchList);
    if (responseList.length > 1) {
      setMealsFilter([...responseList]);
      setIsLoading(false);
    }
  };

  const filterCategories = async (value, index) => {
    const categories = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
    const responseCategory = await getCategory(categories, GET_CATEGORIES_MEALS);
    console.log(responseCategory);
    setWhoCategory([...responseCategory.meals]);
    if (typeCategories) {
      setTypeCategories(false);
      setIndexOfCategory(index);
      setRenderCategories(!renderCategories);
    } else if (indexOfCategory === index) {
      setRenderCategories(!renderCategories);
    }
  };

  const handlerFilterer = () => {
    setRenderCategories(!renderCategories);
  };

  const renderMeals = () => (
    isLoading ? <p>loading...</p>
      : mealsData.meals
      && mealsData.meals.slice(0, MagicMikeDance).map((itemCard, index) => (
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

  React.useEffect(() => {
    fetchMeals(urlFetch, 'meals');
    handlerCard();
  }, []);

  return (
    <div>
      <Header title="Comidas" recipeType="meals" />
      <div>
        {' '}
        {isLoading ? <p>loading...</p>
          : (mealsFilter.slice(0, magicNumberFive).map((itemButtons, index) => (
            <div key={ index }>
              <button
                data-testid={ `${itemButtons.strCategory}-category-filter` }
                type="button"
                onClick={ () => filterCategories(itemButtons.strCategory, index) }
              >
                {' '}
                {itemButtons.strCategory}
                {' '}
              </button>

            </div>)))}
        { !isLoading
        && (
          <button
            onClick={ handlerFilterer }
            type="button"
            data-testid="All-category-filter"
          >
            All
          </button>)}
      </div>
      <div>
        { renderCategories ? RenderCategoriesMeals(whoCategory) : renderMeals() }

      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  mealsData: state.RecipesReducer.recipesData,
});

HomeRecipe.propTypes = {
  mealsData: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(HomeRecipe);
