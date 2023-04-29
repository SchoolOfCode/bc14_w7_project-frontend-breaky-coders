import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "../HomePage";
import MyFlashcards from "../MyFlashcards";
import TestMe from "../TestMe";
import AddAFlashcard from "../AddAFlashcard";
import flashCardsListData from "./stateData";

function App() {
  const [page, setPage] = useState("homepage");
  

  // this is the state for the flashcards the initial value is the data from the stateData.js file
  const [flashCardsList, setFlashCards] = useState(flashCardsListData);


  function renderPage() {
    if (page === "homepage") {
      return <HomePage setPage={setPage} flashCardsList={flashCardsList} />;
    } else if (page === "myFlashcards") {
      return <MyFlashcards setPage={setPage} flashcardsList={flashCardsList} setFlashCards={setFlashCards} />;
    } else if (page === "testMe") {
      return <TestMe setPage={setPage} flashcardsList={flashCardsList}/>
    } else if (page === "addAFlashcard") {
      return <AddAFlashcard setPage={setPage} />;
    }
  }

  return <>{renderPage()};</>;
}

export default App;







//______________________________________________

/*
all the codes below were written before while testing out how to link the pages together in React
// import MyFlashcards from '../MyFlashcards';
// import bearTitleImage from '../../assets/bearTitleImage.png'
// import RandomFlashCard from '../RandomFlashCard';
// import flashCardsListData from '../HomePage/stateData';
// this is the state for the flashcards the initial value is the data from the stateData.js file
// const [flashCardsList, setFlashCards] = useState(flashCardsListData); 
// <div className="App">
    //   <div className="overlay">
    //     <header className="header">
    //     <div className="header__image">
    //       <img src={bearTitleImage} alt="bearTitleImage" />
    //     </div>
    //     </header>
    //     <main>
    //       <RandomFlashCard flashcards={flashCardsList} flashCardsListData={flashCardsListData}/>
    //       <nav className="nav__buttons">
    //         <div className="nav__buttons-button">
    //           <button>Add A Flashcard</button>
    //         </div>
    //         <div className="nav__buttons-button">
    //           <button>My Flashcards</button>
    //         </div>
    //         <div className="nav__buttons-button">
    //           <button>Test Me</button>
    //         </div>
    //       </nav>
    //     </main>
    //   </div>
    // </div> 
*/
//_____________________________________________________