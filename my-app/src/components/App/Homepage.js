import React from 'react';
import './App.css';
import bearTitleImage from '../../assets/bearTitleImage.png'
import Newpage from './Newpage';
import App from './App';

function Homepage({setPage}) {

 const handleClick = () => {
  setPage('newpage');
 }

 const goToAddCard = () => {
  setPage('addcard');
 }

 const goToTestMe = () => {
  setPage('testme');
 }

  return (
    <div className="App">
      <div className="overlay">

        <header className="header">
        <div className="header__image">
          <img src={bearTitleImage} alt="bearTitleImage" />
        </div>
        </header>
        <main>
          <div className="main__random_flashcard">
            <div className="main__random_flashcard-card">
              <div className="question">What is the capital of France?</div>
              <div className="answer">The capital of France is Paris.</div>
            </div>
            <div className ="main__random_flashcard-button">
              <button>Tell Me Another</button>
            </div>
          </div>
          <nav className="nav__buttons">
            <div className="nav__buttons-button">
              <button onClick ={goToAddCard}>Add A Flashcard</button>
            </div>
            <div className="nav__buttons-button">
            <button onClick = {handleClick}>My Flashcards</button>
            </div>
            <div className="nav__buttons-button">
              <button onClick = {goToTestMe}>Test Me</button>
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default Homepage;
