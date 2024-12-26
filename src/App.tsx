import Header from './components/Header'
import Status from './components/Status'
import LanguageContainer from './components/LanguageContainer'
import LetterBoxContainer from './components/LetterBoxContainer'
import Keyboard from './components/Keyboard'
import NewGameButton from './components/NewGameButton'
import { languages } from './utils/languages'
import { useState, useEffect } from 'react'
import { fetchNewWord } from './utils/fetchNewWord'
import Confetti from 'react-confetti'

function App() {
  // State Values
  const [currentWord, setCurrentWord] = useState<string>(() => fetchNewWord());
  const [nextWord, setNextWord] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isTimeOver, setIsTimeOver] = useState<boolean>(false);
  const [key, setKey] = useState<number>(0);

  // Dervieved Values
  const wrongGuessCount = guessedLetters.filter((letter) => !currentWord.toLowerCase().includes(letter)).length;
  const isGameWon = currentWord.toLowerCase().split('').every((letter) => guessedLetters.includes(letter));
  const isGameLost = (wrongGuessCount >= languages.length - 1) || isTimeOver;
  const isGameOver = isGameLost || isGameWon;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect = guessedLetters.length == 0 ? false : !currentWord.toLowerCase().includes(lastGuessedLetter);

  useEffect(() => {
    const randomLength = Math.floor(Math.random() * 10) + 5;
    fetch(`https://random-word-api.herokuapp.com/word?lang=en&length=${randomLength}`)
      .then((response) => response.json())
      .then((data: string[]) => setNextWord(data[0]))
  }, [isGameOver]);

  function addGuessedLetter(letter: string) {
      setGuessedLetters((prevGuessedLetters) => 
        prevGuessedLetters.includes(letter) ? 
          prevGuessedLetters : 
          [...prevGuessedLetters, letter]
      );
  }

  function startNewGame() {
    setGuessedLetters([]);
    setKey((prevKey) => prevKey + 1);
    setIsTimeOver(false);
    setCurrentWord(nextWord);
  }

  return (
    <>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header setTimeOver={setIsTimeOver} isGameOver={isGameOver} keyTimer={key} />
      <Status 
        gameLost={isGameLost}
        gameWon={isGameWon}
        gameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        index={wrongGuessCount-1}
      />
      <LanguageContainer wrongGuesses={wrongGuessCount} isGameLost={isGameLost} />
      <LetterBoxContainer currentWord={currentWord} guessedLetters={guessedLetters} isGameLost={isGameLost} />
      <Keyboard 
        guesses={guessedLetters}
        setGuess={addGuessedLetter}
        currentWord={currentWord}
        isGameOver={isGameOver}
        isGameLost={isGameLost}
      />
      {isGameOver? <NewGameButton startNewGame={startNewGame} /> : null}
    </>
  )
}

export default App
