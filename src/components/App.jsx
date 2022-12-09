import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListConatiner from './ItemListContainer/ItemListConatiner';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListConatiner greeting={"Hola, buenas tardes"}/>
      
    </>

      
    
  );
}

export default App;


