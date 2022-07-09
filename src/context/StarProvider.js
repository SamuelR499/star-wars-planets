import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PLContext from './PLContext';

function StarProvider({ children }) {
  const [state, setState] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const filterInfo = {
    name: '',
    coluna: 'population',
    operador: 'maior que',
    valueFilter: 0,
  };

  const [filter, setFilter] = useState(filterInfo);

  useEffect(() => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getStarWArsPlanets = async () => {
      await fetch(PLANETS_URL)
        .then((response) => response.json())
        .then((data) => {
          data.results.forEach((element) => delete element.residents);
          setState(data.results);
        });
    };
    getStarWArsPlanets();
  }, []);

  const contextValue = {
    state,
    setState,
    filter,
    setFilter,
    newArray,
    setNewArray,
  };
  return (
    <PLContext.Provider value={ contextValue }>
      {children}
    </PLContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
