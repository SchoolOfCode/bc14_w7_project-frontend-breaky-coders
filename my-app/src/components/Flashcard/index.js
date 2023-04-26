function Flashcard ({flashcardList, index}) {

    const singleFlashcard = flashcardList[index]

    return (

        <div className = "flashcard">
            <div className = "flashcard__card">
                <div classname = "question">{singleFlashcard[Object.keys(singleFlashcard)[0]]} </div>
                <div className = "answer"> {singleFlashcard[Object.keys(singleFlashcard)[1]]}</div>

            </div>
         </div>
    )
}

export default Flashcard