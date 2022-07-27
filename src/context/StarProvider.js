import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PLContext from './PLContext';

function StarProvider({ children }) {
  const [state, setState] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [colunaFilter, setColunaFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const filterInfo = {
    name: '',
    coluna: colunaFilter[0],
    operador: 'maior que',
    valueFilter: 0,
  };

  const [filter, setFilter] = useState(filterInfo);
  const [multiFilter, setMultfilter] = useState([]);
  const [backup, setBackup] = useState([]);
  const [ordenar, setOrdenar] = useState({ sortBy: 'population', sort: 'ASC' });

  useEffect(() => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getStarWArsPlanets = async () => {
      await fetch(PLANETS_URL)
        .then((response) => response.json())
        .then((data) => {
          data.results.forEach((element) => delete element.residents);
          setState(data.results);
          setBackup(data.results);
        });
    };
    getStarWArsPlanets();
  }, []);

  const ordenate = () => {
    console.log(ordenar); // desenvolver a lógica :(
  };
  useEffect(() => {
    ordenate();
  }, [ordenar]);
  const filtrar = () => {
    let listaFiltrada = backup;

    multiFilter.forEach((umFiltro) => {
      const { coluna, operador, valueFilter } = umFiltro;
      if (operador === 'igual a') {
        listaFiltrada = listaFiltrada
          .filter((cada) => Number(cada[coluna]) === Number(valueFilter));
      }
      if (operador === 'maior que') {
        listaFiltrada = listaFiltrada
          .filter((cada) => Number(cada[coluna]) > Number(valueFilter));
      }

      if (operador === 'menor que') {
        listaFiltrada = listaFiltrada
          .filter((cada) => Number(cada[coluna]) < Number(valueFilter));
      }
    });
    setState(listaFiltrada);
  };
  useEffect(() => {
    if (multiFilter.length === 0) {
      setState(backup);
    } else {
      filtrar();
    }
  }, [backup, multiFilter]);

  const contextValue = {
    state,
    setState,
    filter,
    setFilter,
    newArray,
    setNewArray,
    colunaFilter,
    setColunaFilter,
    multiFilter,
    setMultfilter,
    backup,
    setOrdenar,
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
