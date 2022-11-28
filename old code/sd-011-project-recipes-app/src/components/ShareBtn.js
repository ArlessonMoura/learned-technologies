import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareBtn({ url }) {
  const [copyMessage, setCopyMessage] = useState(false);
  const handleClick = () => {
    copy(`http://localhost:3000${url}`);
    setCopyMessage(true);
    alert('Link copiado!');
  };

  return (
    <div>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleClick }
      >
        <img src={ shareIcon } alt="share icon" />
      </button>
      {copyMessage && <p>Link copiado!</p>}
    </div>

  );
}

ShareBtn.propTypes = {
  url: PropTypes.object,
}.isRequired;

export default ShareBtn;
