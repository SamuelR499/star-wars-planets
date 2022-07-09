import React, { useContext, useEffect } from 'react';
import PLContext from '../context/PLContext';

function Table() {
  const {
    state,
    inputTxt,
    newArray,
    setNewArray,
  } = useContext(PLContext);

  useEffect(() => {
    const { name } = inputTxt;
    const filter = state.filter((element) => (
      element.name.includes(name)
    ));
    setNewArray(filter);
    console.log(inputTxt);
  }, [inputTxt, setNewArray, state]);
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
