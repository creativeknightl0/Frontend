import { useState } from "react";

export default function TwoPlayersMatch() {
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    const changePlayerOneScore = () => setPlayerOneScore(currCount => currCount + 1);
    const changePlayerTwoScore = () => setPlayerTwoScore(currCount => currCount + 1);

    return (
        <div>
            <div className="flex gap-2">
                <button className='border border-black p-2 rounded-md cursor-pointer' onClick={changePlayerOneScore}>Player 1 +</button>
                <button className='border border-black p-2 rounded-md cursor-pointer' onClick={changePlayerTwoScore}>Player 2 +</button>
            </div>

            <p>Player 1's score: {playerOneScore}</p>
            <p>Player 2's score: {playerTwoScore}</p>
        </div>
    )
}