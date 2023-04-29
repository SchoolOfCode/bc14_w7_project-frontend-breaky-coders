function Flashcard ({flashcardList}) {


    return (
        <div className = "singleFlashcard">
            <div className = "singleFlashcard__card">
                <div className = "question">{flashcardList.question}</div>
                <div className = "answer">{flashcardList.answer}</div>
            </div>
         </div>
    )
}

export default Flashcard