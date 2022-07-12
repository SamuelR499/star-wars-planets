import React, { useContext } from 'react';
import PLContext from '../context/PLContext';

function Header() {
  const {
    filter,
    setFilter,
    // backup,
    // state,
    // setState,
    colunaFilter,
    setColunaFilter,
    multiFilter,
    setMultfilter,
  } = useContext(PLContext);
  const handleChage = (event) => {
    const { target: { name, value } } = event;
    setFilter((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleClick = () => {
    // const { coluna, operador, valueFilter } = filter;

    // const filtrar = state.filter((cada) => {
    //   if (operador === 'igual a') {
    //     return Number(cada[coluna]) === Number(valueFilter);
    //   }
    //   if (operador === 'maior que') {
    //     return Number(cada[coluna]) > Number(valueFilter);
    //   }
    //   return Number(cada[coluna]) < Number(valueFilter);
    // });
    // setState(filtrar);

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
    // const test = casaLimpa.map((filtro) => backup.filter((planeta) => {
    //   if (filtro.operador === 'igual a') {
    //     return Number(planeta[filtro.coluna]) === Number(filtro.valueFilter);
    //   }
    //   if (filtro.operador === 'maior que') {
    //     return Number(planeta[filtro.coluna]) > Number(filtro.valueFilter);
    //   }
    //   return Number(planeta[filtro.coluna]) < Number(filtro.valueFilter);
    // }));
    // if (colunaFilter.length === 0) {
    //   setColunaFilter([sujeira.coluna]);
    // } else {
    //   setColunaFilter((old) => [...old, sujeira.coluna]);
    // }
    // setState(test);
  };

  const clearAll = () => {
    // setState(backup);
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
