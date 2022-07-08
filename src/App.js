import React from 'react';
import './App.css';
import Table from './component/Table';
import StarProvider from './context/StarProvider';

function App() {
  return (
    <StarProvider>
      <Table />
    </StarProvider>
  );
}

export default App;
