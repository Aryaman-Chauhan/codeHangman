import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps {
    setTimeOver: (isTimeOver:boolean) => void;
    isGameOver: boolean;
    keyTimer: number;
}

export default function Timer({ setTimeOver, isGameOver, keyTimer }: TimerProps) {
    const renderTime = ({ remainingTime }: { remainingTime: number }): JSX.Element => {
        if(remainingTime === 0) {
            return <div className='value'>💀</div>;
        }
        return (
            <div className="timer">
                <div className="value">{remainingTime}</div>
            </div>
        );
    };

    return (
        <div className="timer-wrapper">
            <CountdownCircleTimer
                isPlaying={!isGameOver}
                key={keyTimer}
                duration={60}
                colors={["#10A95B", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[60, 40, 20, 0]}
                size={40}
                strokeWidth={5}
                onComplete={() => setTimeOver(true)}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div>
    )
}