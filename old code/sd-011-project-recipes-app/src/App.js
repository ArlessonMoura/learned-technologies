import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import MealDetails from './pages/MealDetails';
import DrinkDetails from './pages/DrinkDetails';

import HomeRecipe from './pages/HomeRecipe';
import HomeDrinks from './pages/HomeDrinks';
import RecipesInProgress from './pages/RecipeInProgress';
import Explore from './pages/explore/Explore';
import ExploreRecipes from './pages/explore/ExploreRecipes';
import ExploreDrinks from './pages/explore/ExploreDrinks';
import ExploreByIngredients from './pages/explore/ExploreByIngredients';
import ExploreByLocal from './pages/explore/ExploreByLocal';
import Profile from './pages/Profile';
import RecipeMade from './pages/RecipeMade';
import RecipeFavorite from './pages/RecipeFavorite';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route
          exact
          path="/comidas/:id"
          render={ (props) => <MealDetails { ...props } /> }
        />
        <Route
          exact
          path="/bebidas/:id"
          render={ (props) => <DrinkDetails { ...props } /> }
        />
        <Route exact path="/comidas" component={ HomeRecipe } />
        <Route exact path="/bebidas" component={ HomeDrinks } />
        <Route
          path="/comidas/:id/in-progress"
          component={ RecipesInProgress }
        />
        <Route
          path="/bebidas/:id/in-progress"
          component={ RecipesInProgress }
        />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreRecipes } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreByIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreByIngredients }
        />
        <Route exact path="/explorar/comidas/area" component={ ExploreByLocal } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/receitas-feitas" component={ RecipeMade } />
        <Route path="/receitas-favoritas" component={ RecipeFavorite } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
