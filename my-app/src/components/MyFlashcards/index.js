import Flashcard from "../Flashcard/"
import "./MyFlashcards.css"

function MyFlashcards({flashcardsList, setPage}) {
    
  return (
    <div className="flashcardsOverlay">

        <div className="overlay__header">

            <div className="overlay__header-heading">
                <h1>My Flashcards</h1>
            </div>
            <div className="overlay__header-button">

                <button onClick={() => {setPage("homepage")}}>Go Back</button>

            </div>
        </div>
        <div className="overlay__content">

            {flashcardsList.map((flashcard, index) => {
                return <Flashcard key={index} flashcardList={flashcard}/>
            })}

        </div>
    </div>
  );
}
export default MyFlashcards;