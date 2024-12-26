interface NewGameButtonProps {
    startNewGame: () => void;
}

export default function NewGameButton({ startNewGame }: NewGameButtonProps) {
    return (
        <button className="new-game" onClick={startNewGame}>New Game</button>
    )
}