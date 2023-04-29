//We need a h1 ☑️
//We need a div to contain the 2 inputs and the 2 labels ☑️
//We need a card element in the middle of the page with 2 input fields
//Card element has an outher border ☑️
//Need to sort styling
//Each input field has a label ☑️
//Labels: Question and Answer ☑️
//Two buttons at the bottom:
//Buttons: Cancel and Submit ☑️
//Buttons outside the div ☑️

//Main element - colour cream ☑️
  //h1
    //DIV - colour - orange☑️
      //Input field
  //Buttons

  import './AddAFlashcard.css'
  import flashCardsListData from '../App/stateData';
  import { useState } from 'react';
  import Swal from 'sweetalert2'

function AddAFlashcard({ setPage }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerInputValue, setAnswerInputValue] = useState("");
  const [questionInputValue, setQuestionInputValue] = useState("");

  function handleChangeQuestion(e) {
    setQuestionInputValue(e.target.value);
    setQuestion(e.target.value);
  }

  function handleChangeAnswer(e) {
    setAnswerInputValue(e.target.value);
    setAnswer(e.target.value);
  }

  function addCard(){
    flashCardsListData.push({question: question, answer: answer})
    setAnswerInputValue("")
    setQuestionInputValue("")
    console.log(flashCardsListData)
    Swal.fire({
      title: 'You added a new flashcard!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    })
    
  }

  function cancel() {
    setAnswerInputValue("");
    setQuestionInputValue("");
  }

  console.log(flashCardsListData);
  return (
    <main className="addAFlashCard">
      <div className="header__heading">
        <div className="overlay__header-button">
        <button
          onClick={() => {
            setPage("homepage");
          }}
        >
          {" "}
          Go Back
        </button>
      </div>
        <h1 className="addAFlashCard-h1">CREATE A FLASHCARD</h1>
      </div>
      <div className="flashcard-div">
        <label htmlFor="question">QUESTION</label>
        {/* HELP */}

        <textarea
          required
          className="firstWhiteBox"
          type="text"
          contenteditable="true"
          name="question"
          onChange={handleChangeQuestion}
          value={questionInputValue}
        />
        <br />
        <label htmlFor="answer">ANSWER</label>
        <textarea
          className="secondWhiteBox"
          type="text"
          contenteditable="true"
          name="answer"
          value={answerInputValue}
          onChange={handleChangeAnswer}
        />
      </div>
      <div className="addAFlashCard-buttons-div">
        <button className="addAFlashCard-cancel" onClick={cancel}>
          CANCEL
        </button>
        <button className="addAFlashCard-submit" onClick={addCard}>
          SUBMIT
        </button>
      </div>
    </main>
  );
}
export default AddAFlashcard;