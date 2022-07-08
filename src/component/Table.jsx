import React, { useContext } from 'react';
import PLContext from '../context/PLContext';

function Table() {
  const { state } = useContext(PLContext);
  return (
    <table>
      <thead>
        <tr>
          {state.length && Object.keys(state[0])
            .map((title) => <th key={ title }>{title}</th>) }
        </tr>
      </thead>
      <tbody>
        {state.length && state.map((planet) => (
          <tr key={ planet.name }>
            { Object.values(planet)
              .map((value) => <td key={ value }>{value}</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
