import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListConatiner from './ItemListContainer/ItemListConatiner';
import ItemCount from './ItemCount/ItemCount';
const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListConatiner/>
      <ItemCount/>
    </>

      
    
  );
}

export default App;


