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

function AddAFlashcard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")
  const [answerInputValue, setAnswerInputValue] = useState("")
  const [questionInputValue, setQuestionInputValue] = useState ("")

  function handleChangeQuestion(e){
    setQuestionInputValue(e.target.value)
    setQuestion(e.target.value)
  }

  function handleChangeAnswer(e){
    setAnswerInputValue(e.target.value)
    setAnswer(e.target.value)
  }

  function addCard(){
    flashCardsListData.push({question: question, answer: answer})
    console.log(flashCardsListData)
  }

  function cancel(){
    setAnswerInputValue("")
    setQuestionInputValue("")
  }

  console.log(flashCardsListData)
  return (
  <main className='addAFlashCard'>
  <h1>CREATE A FLASHCARD</h1>
  <div className = 'flashcard-div'>
    <label htmlFor="question">QUESTION</label>
    {/* HELP */}
      
    <input className="firstWhiteBox" type="text" name="question" onChange={handleChangeQuestion} value={questionInputValue} />
    <br></br>
    <br></br>
    <br></br>
    <label htmlFor="answer">ANSWER</label>
    <input className="secondWhiteBox" type="text" name="answer" value={answerInputValue} onChange={handleChangeAnswer}/>
    </div>
    <button className="submit" onClick={addCard}>SUBMIT</button>
    <button className="cancel" onClick={cancel}>CANCEL</button>
  </main>
  )
}
export default AddAFlashcard;