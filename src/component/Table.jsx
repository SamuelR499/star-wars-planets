import React, { useContext, useEffect } from 'react';
import PLContext from '../context/PLContext';

function Table() {
  const {
    state,
    filter,
    newArray,
    setNewArray,
  } = useContext(PLContext);

  useEffect(() => {
    const { name } = filter;
    const filtered = state.filter((element) => (
      element.name.includes(name)
    ));
    setNewArray(filtered);
  }, [filter, setNewArray, state]);

  return state.length && (
    <table>
      <thead>
        <tr>
          {Object.keys(state[0])
            .map((title) => <th key={ title }>{title}</th>) }
        </tr>
      </thead>
      <tbody>
        {newArray.map((planet) => (
          <tr key={ planet.name }>
            { Object.values(planet)
              .map((value) => <td key={ value }>{value}</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
