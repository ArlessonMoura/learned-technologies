import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeVideo({ video }) {
  return (
    <iframe
      data-testid="video"
      src={ video.split('watch?v=').join('embed/') }
      title="Recipe Video"
    />
  );
}

RecipeVideo.propTypes = {
  video: PropTypes.string,
}.isRequired;
