import React from 'react';

import DrinksBtn from './elements/DrinksBtn';
import ExploreBtn from './elements/ExploreBtn';
import FoodBtn from './elements/FoodBtn';

import './style.css';

export default function Footer() {
  return (
    <div data-testid="footer" className="container-footer">
      <DrinksBtn />
      <ExploreBtn />
      <FoodBtn />
    </div>
  );
}
