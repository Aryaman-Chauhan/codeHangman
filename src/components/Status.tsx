import clsx from "clsx";
import { renderGameStatus } from "../utils/renderGameStatus";

interface StatusProps {
    gameOver: boolean;
    gameWon: boolean;
    gameLost: boolean;
    isLastGuessIncorrect: boolean;
    index: number;
}

export default function Status({ gameOver, gameWon, gameLost, isLastGuessIncorrect, index }: StatusProps) {
    const classes = clsx("game-status", 
        {
            won: gameWon, 
            lost: gameLost,
            farewell: isLastGuessIncorrect && !gameOver
        });

    

    return (
        <section className={classes} aria-live="polite" role="status">
            {renderGameStatus(gameOver, gameWon, gameLost, isLastGuessIncorrect, index)}
        </section>
    )
}