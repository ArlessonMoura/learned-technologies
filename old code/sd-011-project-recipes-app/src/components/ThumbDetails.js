import React from 'react';
import PropTypes from 'prop-types';

function ThumbDetails({ thumb }) {
  return (
    <img src={ thumb } alt="recipe" data-testid="recipe-photo" />
  );
}

ThumbDetails.propTypes = {
  thumb: PropTypes.string,
}.isRequired;

export default ThumbDetails;
