import React from 'react';
import { useState } from 'react';
import './App.css';
import bearTitleImage from '../../assets/bearTitleImage.png'
import RandomFlashCard from '../RandomFlashCard';
import flashCardsListData from './stateData';

function App() {
  
  // this is the state for the flashcards the initial value is the data from the stateData.js file
  const [flashCardsList, setFlashCards] = useState(flashCardsListData); 
  return (
    <div className="App">
      <div className="overlay">

        <header className="header">
        <div className="header__image">
          <img src={bearTitleImage} alt="bearTitleImage" />
        </div>
        </header>
        <main>
          <RandomFlashCard flashcards={flashCardsList}/>

          <nav className="nav__buttons">
            <div className="nav__buttons-button">
              <button>Add A Flashcard</button>
            </div>
            <div className="nav__buttons-button">
              <button>My Flashcards</button>
            </div>
            <div className="nav__buttons-button">
              <button>Test Me</button>
            </div>
          </nav>
        </main>
      </div>
    </div> 
  );
}

export default App;
