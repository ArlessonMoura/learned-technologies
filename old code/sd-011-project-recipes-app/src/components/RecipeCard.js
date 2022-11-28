import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';

export default function RecipeCard({ thumb, title, index }) {
  return (
    <Card style={ { width: '18rem' } }>
      <Card.Img
        variant="top"
        data-testid={ `${index}-recomendation-card` }
        src={ thumb }
      />
      <Card.Body>
        <Card.Title
          data-testid={ `${index}-recomendation-title` }
        >
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

RecipeCard.propTypes = {
  thumb: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
