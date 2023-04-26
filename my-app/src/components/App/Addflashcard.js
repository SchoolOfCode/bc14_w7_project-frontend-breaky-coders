import React from 'react';
import './App.css';
import App from './App'
import Homepage from './Homepage';

function Addflashcard({setPage}) {

  const handleClick =() =>{
    setPage ('homepage');
  }

  return (
    <>
    <h1>Make a new flashcard</h1>
    <button onClick={handleClick}>Click to go home</button>
    </>
  );
}

export default Addflashcard;