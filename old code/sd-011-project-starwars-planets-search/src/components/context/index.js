import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import getPlanets from '../../services/data';

// const noNumbers = [
//   'name',
//   'climate',
//   'gravity',
//   'terrain',
//   'films',
//   'created',
//   'edited',
//   'url',
// ];

const numerics = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [listAtt, setList] = useState([]);
  const [attNumber, setFilterNumber] = useState([]);
  const [attText, setFilterText] = useState([]);
  const [orderAtt, setOrder] = useState({});
  const contextValue = {
    planets,
    setPlanets,
    attText,
    setFilterText,
    attNumber,
    setFilterNumber,
    listAtt,
    setList,
    orderAtt,
    setOrder,
  };
  const number = 1;

  useEffect(() => {
    const dataPlanets = async () => {
      const data = await getPlanets();
      setPlanets(data);
      // está solução para o metodo sort foi retirada da documentaçãp do WDN,
      // mas o real funcionamento dela é motivo de ter praguejado contra o vento sem nenhuma softskill;
      // blasfemei contra os deuses que existiram, existem e estão para existir...
      // quiça dei predicativos ruins a pessoas na trybe.
      setList(data.sort((a, b) => {
        if (a.name > b.name) {
          return number;
        }
        if (a.name < b.name) {
          return -number;
        }
        return 0;
      }));
    };
    dataPlanets();
  }, []);

  useEffect(() => {
    const searchName = () => {
      const filterText = planets
        .filter(({ name }) => name.toLowerCase().includes(attText) === true);
      setList(filterText);
    };
    searchName();
  }, [attText, attNumber, planets]);

  useEffect(() => {
    attNumber.map(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        return setList(
          [...planets.filter((planet) => Number(planet[column]) > Number(value))],
        );
      case 'menor que':
        return setList(
          [...planets.filter((planet) => Number(planet[column]) < Number(value))],
        );
      case 'igual a':
        return setList(
          [...planets.filter((planet) => Number(planet[column]) === Number(value))],
        );
      default:
        return planets;
      }
    });
  }, [attNumber, attText, planets]);

  const verifyType = (optionSort) => {
    let isTypeNumber = false;
    numerics.forEach((quant) => {
      if (quant === optionSort) {
        isTypeNumber = true;
      }
    });
    return isTypeNumber;
  };

  useEffect(() => {
    const orderAction = () => {
      const { optionSort, typeSort } = orderAtt;
      switch (true) {
      case typeSort === 'ASC' && !verifyType(optionSort):
        return setList(
          [...planets.sort((a, b) => (a[optionSort] > b[optionSort] ? number : -number))],
        );
      case typeSort === 'DESC' && !verifyType(optionSort):
        return setList(
          [...planets.sort((a, b) => a[optionSort] < b[optionSort]) ? number : -number],
        );
      case typeSort === 'ASC' && verifyType(optionSort):
        return setList(
          [...planets.sort((a, b) => Number(a[optionSort]) - Number(b[optionSort]))],
        );
      case typeSort === 'DESC' && verifyType(optionSort):
        return setList(
          [...planets.sort((a, b) => Number(b[optionSort]) - Number(a[optionSort]))],
        );
      default:
        return planets;
      }
    };
    orderAction();
  }, [orderAtt, planets]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
