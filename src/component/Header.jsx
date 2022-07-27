import React, { useContext, useState } from 'react';
import PLContext from '../context/PLContext';

function Header() {
  const {
    filter,
    setFilter,
    setOrdenar,
    colunaFilter,
    setColunaFilter,
    multiFilter,
    setMultfilter,
  } = useContext(PLContext);
  const arraySelect = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [test, setTest] = useState({ sortBy: 'population', sort: 'ASC' });
  const changeSort = (name, value) => {
    setTest((old) => ({ ...old, [name]: value }));
  };

  const handleChage = (event) => {
    const { target: { name, value } } = event;
    setFilter((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleClick = () => {
    const jaFiltrou = colunaFilter.filter((elmnt) => elmnt !== filter.coluna);
    setColunaFilter(jaFiltrou);
    setFilter((oldState) => ({ ...oldState, coluna: colunaFilter[1] }));

    if (multiFilter.length === 0) {
      setMultfilter([filter]);
    } else {
      setMultfilter((old) => [...old, filter]);
    }
  };

  const removendoSujeira = (sujeira) => {
    const casaLimpa = multiFilter.filter((cada) => cada !== sujeira); // array de filtros
    setMultfilter(casaLimpa);
  };

  const clearAll = () => {
    setColunaFilter([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setMultfilter([]);
  };

  return colunaFilter && (
    <header className="filter">
      <input
        type="text"
        name="name"
        value={ filter.name }
        onChange={ (event) => handleChage(event) }
        data-testid="name-filter"
        placeholder="Pesquisar"
      />
      <div className="filter">
        <label htmlFor="column-filter">
          Coluna
          <select
            data-testid="column-filter"
            id="column-filter"
            name="coluna"
            value={ filter.coluna }
            onChange={ (event) => handleChage(event) }
          >
            { colunaFilter.map((element) => (
              <option key={ `${element}` }>{element}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="comparison-filter">
          Operador
          <select
            name="operador"
            value={ filter.operador }
            onChange={ (event) => handleChage(event) }
            data-testid="comparison-filter"
            id="comparison-filter"
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
      </div>
      <input
        name="valueFilter"
        value={ filter.valueFilter }
        onChange={ (event) => handleChage(event) }
        type="number"
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
      <label htmlFor="sortBy">
        <select
          name="sortBy"
          data-testid="column-sort"
          onChange={ ({ target: { name, value } }) => changeSort(name, value) }
        >
          {arraySelect.map((option) => (
            <option key={ option }>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="Asc">
        Ascendente
        <input
          type="radio"
          name="sort"
          id="Asc"
          value="ASC"
          onChange={ ({ target: { name, value } }) => changeSort(name, value) }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="Desc">
        Descendente
        <input
          type="radio"
          name="sort"
          id="Desc"
          value="DESC"
          onChange={ ({ target: { name, value } }) => changeSort(name, value) }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => setOrdenar(test) }
      >
        Ordenar
      </button>
      <div>
        {multiFilter && multiFilter.map((filtro) => (
          <p
            key={ filtro.coluna }
            data-testid="filter"
          >
            {`${filtro.coluna}
          ${filtro.operador}
          ${filtro.valueFilter}`}
            <button
              data-testid={ `button-remove-${filtro.coluna}` }
              type="button"
              onClick={ () => removendoSujeira(filtro) }
            >
              ✖️

            </button>
          </p>
        ))}
      </div>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ clearAll }
      >
        clear

      </button>
    </header>
  );
}
export default Header;
