import React from 'react';
import './App.css';
import App from './App'
import Homepage from './Homepage';

function Newpage({setPage}) {

  const handleClick =() =>{
    setPage ('homepage');
  }

  return (
    <>
    <h1>My Flashcards</h1>
    <button onClick={handleClick}>Click to go home</button>
    </>
  );
}

export default Newpage;