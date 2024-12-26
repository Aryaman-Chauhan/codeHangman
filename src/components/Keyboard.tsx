import clsx from 'clsx';
import { animated, useSpring } from 'react-spring';

interface KeyboardProps {
    guesses: string[];
    setGuess : (letter: string) => void;
    currentWord: string;
    isGameOver: boolean;
    isGameLost: boolean;
}

export default function Keyboard({ guesses, setGuess, currentWord, isGameOver, isGameLost }: KeyboardProps) {
    const albhabetList = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const albhabetKeys = albhabetList.map((letter) => {
        const isGuessed = guesses.includes(letter.toLowerCase());
        const isCorrect = isGuessed && currentWord.toLowerCase().includes(letter.toLowerCase());
        const isWrong = isGuessed && !currentWord.toLowerCase().includes(letter.toLowerCase());
        const classes = clsx("btn", {
            correct: isCorrect,
            incorrect: isWrong,
        });

        return (
        <animated.button 
            key={letter} 
            onClick={() => setGuess(letter)}
            className={classes}
            disabled={isGameOver}
            aria-disabled={guesses.includes(letter)}
            aria-label={`Letter ${letter}`}
            style={
                useSpring({ 
                    transform: isGameLost ? `translate(${Math.floor(Math.random()*1500)-800}px, 1000px)` : 'translate(0px, 0px)',
                    config: { tension: 100, friction: 30 } 
                })
            }
        >   
            {letter.toUpperCase()}
        </animated.button>
        )
    })

    return (
        <section className="keyboard">
            {albhabetKeys}
        </section>
    )
}