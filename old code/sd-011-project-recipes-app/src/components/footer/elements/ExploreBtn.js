import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../../images/exploreIcon.svg';

export default function ExploreBtn() {
  return (
    <div>
      <Link to="/explorar">
        <img data-testid="explore-bottom-btn" src={ searchIcon } alt="Símbolo buscar" />
      </Link>
    </div>
  );
}
