import React from "react";
import { useState, useEffect } from "react";
import "./TestMe.css";

function TestMe({flashcardsList, setPage}) { // flashcardsList is the all the flashcards from the state in App.js

  const [randomIndex, setRandomIndex] = useState(0); // this is the state for the random index
  const [showAnswer, setShowAnswer] = useState(false); // this is the state for the answer. If true, the answer is shown.

  useEffect(() => { 
    setRandomIndex(Math.floor(Math.random() * flashcardsList.length - 1));// the random index is being set to a new random number every time the flashcards array changes
  },[flashcardsList]); // this useEffect is being called every time the flashcardsList changes
  
  const randomizedFlashcard = flashcardsList[randomIndex]; // this is a variable for a flashcard with a random index assigned to it

  function handleQuestionButtonClick(){ // this function is called when the "Request A Question" button is clicked
    setRandomIndex(Math.floor(Math.random() * (flashcardsList.length - 1))) // the random index is being set to a new random number
    setShowAnswer(false);
  }

  function handleAnswerButtonClick(){ // this function is called when the "Reveal Answer" button is clicked
    setShowAnswer(true);
  }

  return (

    <div className="overlay">
      <div className="overlay__testme-content">
        <div className="overlay__testme-content-heading">
          <h1>Test Yourself</h1>
          <div className="overlay__testme-content-heading-button">
          <button onClick={() => {setPage("homepage")}}>Go Back</button>
          </div>
        </div>
        <div className="overlay__testme-content-subheading">
          <h2>Test yourself on the topics you have learnt so far</h2>
        </div>
        <div className="overlay__testme-content-button">
          <button onClick={handleQuestionButtonClick}>Request A Question</button>
        </div>
        <div className="overlay__testme-content-question">
          <h2>Question:</h2>
          {randomizedFlashcard && ( // this is a conditional rendering. If there is a random flashcard, then the question is displayed
            <h3>{randomizedFlashcard[Object.keys(randomizedFlashcard)[0]]}</h3> // this is the question
          )}
        </div>
        <div className="overlay__testme-content-answer">
        {showAnswer ? ( // this is a conditional rendering. If showAnswer is true, then the answer is displayed
          <>
            <div className="overlay__testme-content-answerbox">

              <h2>Answer:</h2>
              {randomizedFlashcard && ( // this is a conditional rendering. If there is a random flashcard, what is inside the parentheses is displayed
                <h3>{randomizedFlashcard[Object.keys(randomizedFlashcard)[1]]}</h3>
              )}
            </div>
          </>
        ) : ( // if showAnswer is false, then nothing is displayed which is null (what is inside the parentheses)
          null
        )}
          <div className="overlay__testme-content-answer-button">
            <button onClick={handleAnswerButtonClick}>Reveal Answer</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TestMe;