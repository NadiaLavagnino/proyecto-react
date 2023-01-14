import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListConatiner from './ItemListContainer/ItemListConatiner';
import ItemDetailContainer from './ItemDetailContainer.jsx/ItemDetailContainer';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListConatiner/>
      <ItemDetailContainer/>
    </>

      
    
  );
}

export default App;


