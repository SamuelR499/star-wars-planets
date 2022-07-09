import React, { useContext } from 'react';
import PLContext from '../context/PLContext';

function Header() {
  const { filter, setFilter, newArray, setState } = useContext(PLContext);

  const handleChage = (event) => {
    const { target: { name, value } } = event;
    setFilter((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleClick = () => {
    const { coluna, operador, valueFilter } = filter;

    const comparar = newArray.filter((cada) => {
      if (operador === 'igual a') {
        return Number(cada[coluna]) === Number(valueFilter);
      }
      if (operador === 'maior que') {
        return Number(cada[coluna]) > Number(valueFilter);
      }
      if (operador === 'menor que') {
        return Number(cada[coluna]) < Number(valueFilter);
      }
      return newArray;
    });
    setState(comparar);
  };

  return (
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
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
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
    </header>
  );
}
export default Header;
