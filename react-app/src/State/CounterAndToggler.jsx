import { useState } from "react"

export default function CounterAndToggler() {
    const [music, setMusic] = useState(true);
    const [count, setCount] = useState(5);
    
    const handleMusicOrJustVolume = () => {
        setMusic(!music);
    }

    const handleCount = () => {
        setCount(count+1);
    }

    return (
        <>
            <p onClick={handleMusicOrJustVolume}>{music ? '🎶' : '🔊'}</p>
            <>
                <p>The count is: {count}</p>
                <button onClick={handleCount}>Click</button>
            </>
        </>
    )
}