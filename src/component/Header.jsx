import React, { useContext } from 'react';
import PLContext from '../context/PLContext';

function Header() {
  const { setInputTxt } = useContext(PLContext);
  const handleChage = (name) => {
    setInputTxt({ name });
  };
  return (
    <header>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => handleChage(value) }
        placeholder="Pesquisar"
      />
    </header>
  );
}
export default Header;
