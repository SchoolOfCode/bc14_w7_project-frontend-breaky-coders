import React, { useState, useEffect } from 'react';
import './RandomFlashCard.css';

function RandomFlashCard({ flashcards,flashCardsListData}) { // changeFlashcard is a function that is passed down from App.js
    
    const [randomIndex, setRandomIndex] = useState(0) // this is the state for the random index

    useEffect(() => { 
        setRandomIndex(Math.floor(Math.random() * flashcards.length - 1));  // the random index is being set to a new random number every time the flashcards array changes
    },[flashcards,flashCardsListData]); 

  const randomizedFlashcard = flashcards[randomIndex]; // this is the random flashcard that is being displayed

  const handleButtonClick = () => { // this function is called when the "Tell Me Another" button is clicked
        setRandomIndex(Math.floor(Math.random() * (flashcards.length - 1))); // the random index is being set to a new random number
  };

  return (
    <div className="main__random_flashcard">
      <div className="main__random_flashcard-card">
        {randomizedFlashcard && (
          <div>
            <div className="question">{randomizedFlashcard[Object.keys(randomizedFlashcard)[0]]}</div> 
            <div className="answer">{randomizedFlashcard[Object.keys(randomizedFlashcard)[1]]}</div>
          </div>
        )}
      </div>
      <div className="main__random_flashcard-button">
        <button onClick={handleButtonClick}>Tell Me Another</button>
      </div>
    </div>
  );
}

export default RandomFlashCard;