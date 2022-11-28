import React, { useContext, useState } from 'react';
import MyContext from './context/MyContext';

function SortBar() {
  const { setOrder } = useContext(MyContext);
  const sortColumn = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];
  const [sortQuote, setSortQuote] = useState(sortColumn[0]);
  const [typeSortQuote, setTypeSortQuote] = useState('');

  const handleSort = () => {
    const order = {
      optionSort: sortQuote,
      typeSort: typeSortQuote,
    };
    setOrder(order);
  };

  const handleColumnSort = ({ target }) => {
    const { value } = target;
    setSortQuote(value);
  };

  const handleSortType = ({ target }) => {
    const { value } = target;
    setTypeSortQuote(value);
  };

  return (
    <forms>
      <select
        data-testid="column-sort"
        value={ sortQuote }
        name="optionColumn"
        onChange={ handleColumnSort }
      >
        {sortColumn.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
      </select>
      <label htmlFor="asc">
        ASC
        <input
          type="radio"
          id="asc"
          name="sort"
          value="ASC"
          onChange={ handleSortType }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="desc">
        DESC
        <input
          type="radio"
          id="desc"
          name="sort"
          value="DESC"
          onChange={ handleSortType }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSort }
      >
        Ordenar
      </button>
    </forms>

  );
}

export default SortBar;

// name
// climate
// gravity
// terrain
// films
// created
// edited
// url

// 'population',
// 'orbital_period',
// 'diameter',
// 'rotation_period',
// 'surface_water',
