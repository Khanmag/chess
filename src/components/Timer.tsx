import React, {useState, useRef, useEffect} from 'react'
import Player from '../models/Player'
import { Colors } from '../models/Colors';


interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

const Timer: React.FC<TimerProps> = ({ currentPlayer, restart }) => {
    const [whiteTime, setWhiteTime] = useState(300)
    const [blackTime, setBlackTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect( () => {
        startTimer()
    }, [currentPlayer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }
    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1)
    }

    return (
        <div>
            <div>
                <button onClick={restart}>начать заного</button>
            </div>
            <h2>белые - {whiteTime}</h2>
            <h2>чёрные - {blackTime}</h2>
        </div>
    )
}

export default Timer
