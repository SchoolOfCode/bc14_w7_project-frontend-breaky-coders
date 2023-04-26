import React from 'react';
import './App.css';
import App from './App'
import Homepage from './Homepage';

function Testme({setPage}) {

  const handleClick =() =>{
    setPage ('homepage');
  }

  return (
    <>
    <h1>Random flashcard</h1>
    <button onClick={handleClick}>Click to go home</button>
    </>
  );
}

export default Testme;