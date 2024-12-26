import { getFarewellText } from "./farewellMessage";
import { languages } from "./languages";

export function renderGameStatus(gameOver: boolean, gameWon: boolean, gameLost: boolean, isLastGuessIncorrect: boolean, index: number) {
    if(!gameOver && isLastGuessIncorrect){
        return (
            <p>{getFarewellText(languages[index].name)}</p>
        );
    }

    if(gameLost) {
        return (
            <>
                <h2>Game Over&#33;</h2>
                <p>You Lose&#33; Better start Learning Assembly 😭</p>
            </>
        )
    }

    if(gameWon) {
        return (
            <>
                <h2>You Win&#33;</h2>
                <p>Well Done&#33; 🎉</p>
            </>
        )
    }

    return null;
}