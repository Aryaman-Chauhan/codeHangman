interface LetterBoxContainerProps {
    currentWord: string;
    guessedLetters: string[];
    isGameLost: boolean;
}

export default function LetterBoxContainer({ currentWord, guessedLetters, isGameLost }: LetterBoxContainerProps) {
    const letterList = currentWord.split('').map((letter, index) => {
        const classname = isGameLost && !guessedLetters.includes(letter.toLowerCase()) ? "missed-letters" : "";
        return <span className={classname} key={index}>{guessedLetters.includes(letter.toLowerCase()) || isGameLost ? letter.toUpperCase() : ""}</span>
    })

    return (
        <>
            <section className="letter-container">
                {letterList}
            </section>
            <section 
                className="sr-only" 
                aria-live="polite"
                role="status"
            >
                <p>
                    Current Word: {currentWord.split('').map((letter) => guessedLetters.includes(letter) ? letter + ".": "blank.").join(" ")}
                </p>
            </section>
        </>
    )
}