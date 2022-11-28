import React, { useContext, useState, useEffect } from 'react';
import MyContext from './context/MyContext';
import FiltersBar from './FiltersBar';
import SortBar from './SortBar';

function Header() {
  const { setFilterText, attNumber, setFilterNumber } = useContext(MyContext);
  const [nameQuote, setNameQuote] = useState('');
  const [columnQuote, setColumnQuote] = useState('population');
  const [comparisonQuote, setComparisionQuote] = useState('maior que');
  const [numberQuote, setNumberQuote] = useState('');
  const initialOptionsSeachArr = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [optionsSeach, setOptions] = useState(initialOptionsSeachArr);

  useEffect(() => {
    const handleSearch = () => {
      setFilterText(nameQuote.toLowerCase());
    };
    handleSearch();
  }, [nameQuote, setFilterText]);

  const handleFilters = () => {
    const filterByNumericValues = {
      column: columnQuote,
      comparison: comparisonQuote,
      value: numberQuote,
    };
    setFilterNumber([...attNumber, filterByNumericValues]);
    const upDateFilter = optionsSeach.filter((filter) => filter !== columnQuote);
    setOptions(upDateFilter);
  };

  const handleName = ({ target }) => {
    const { value } = target;
    setNameQuote(value);
  };

  const handleColumn = ({ target }) => {
    const { value } = target;
    setColumnQuote(value);
  };

  const handleComparision = ({ target }) => {
    const { value } = target;
    setComparisionQuote(value);
  };

  const handleNumber = ({ target }) => {
    const { value } = target;
    setNumberQuote(value);
  };

  return (
    <header>
      <input
        data-testid="name-filter"
        type="text"
        value={ nameQuote }
        name="searchBar"
        onChange={ handleName }
      />
      <select
        data-testid="column-filter"
        value={ columnQuote }
        name="column"
        onChange={ handleColumn }
      >
        {optionsSeach
          .map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonQuote }
        name="comparison"
        onChange={ handleComparision }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ numberQuote }
        name="number"
        onChange={ handleNumber }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilters }
      >
        Filtrar
      </button>
      <SortBar />
      <FiltersBar />
    </header>
  );
}

export default Header;
