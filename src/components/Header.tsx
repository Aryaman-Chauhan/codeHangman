import Timer from './Timer'

interface HeaderProps {
    setTimeOver: (isTimeOver:boolean) => void;
    isGameOver: boolean;
    keyTimer: number;
}

export default function Header({ setTimeOver, isGameOver, keyTimer }: HeaderProps) {
    return (
        <header>
            <h1>Assembly&#58; Endgame</h1>
            <Timer setTimeOver={setTimeOver} isGameOver={isGameOver} keyTimer={keyTimer} />
            <p>Guess the Word within 8 attempts to keep the
            programming world safe from Assembly&#33;</p>
        </header>
    )
}