import Flashcard from "../Flashcard/"

function MyFlashcards({flashcardsList}) {
    
  return (
    <div className="overlay">
        <div className="overlay__content">

      {flashcardsList.map((flashcard, index) => {
        return <Flashcard key={index} flashcardList={flashcard}/>
      })}

        </div>
    </div>
  );
}
export default MyFlashcards;