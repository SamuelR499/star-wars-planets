import React from 'react';
import './App.css';
import Header from './component/Header';
import Table from './component/Table';
import StarProvider from './context/StarProvider';

function App() {
  return (
    <StarProvider>
      <Header />
      <Table />
    </StarProvider>
  );
}

export default App;
