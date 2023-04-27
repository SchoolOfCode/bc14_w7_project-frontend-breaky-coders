import React from "react";
import { useState, useEffect } from "react";
import "./TestMe.css";

function TestMe({flashcardsList}) {

  const [randomIndex, setRandomIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => { 
    setRandomIndex(Math.floor(Math.random() * flashcardsList.length - 1));  
  },[flashcardsList]);
  
  const randomizedFlashcard = flashcardsList[randomIndex]; 

  function handleQuestionButtonClick(){
    setRandomIndex(Math.floor(Math.random() * (flashcardsList.length - 1)))
    setShowAnswer(false);
  }

  function handleAnswerButtonClick(){
    setShowAnswer(true);
  }

  return (

    <div className="overlay">
      <div className="overlay__content">
        <div className="overlay__content-heading">
          <h1>Test Yourself</h1>
        </div>
        <div className="overlay__content-subheading">
          <h2>Test yourself on the topics you have learnt so far</h2>
        </div>
        <div className="overlay__content-button">
          <button onClick={handleQuestionButtonClick}>Request A Question</button>
        </div>
        <div className="overlay__content-question">
          <h2>Question:</h2>
          {randomizedFlashcard && (
            <h3>{randomizedFlashcard[Object.keys(randomizedFlashcard)[0]]}</h3>
          )}
        </div>
        <div className="overlay__content-answer">
          {showAnswer ? (
            <>
              <h2>Answer:</h2>
              {randomizedFlashcard && (
                <h3>{randomizedFlashcard[Object.keys(randomizedFlashcard)[1]]}</h3>
              )}
            </>
          ) : (
            <div></div>
          )}
          <div className="overlay__content-answer-button">
            <button onClick={handleAnswerButtonClick}>Reveal Answer</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TestMe;