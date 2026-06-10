import { useState } from "react";

export default function ScoreKeeper({ numberOfPlayers }) {
    let arrOfPlayers = [{id: 1, score: 0}];
    console.log(arrOfPlayers);
    const [score, setScore] = useState(arrOfPlayers);

    console.log('score: ' + score);
    
    // 1. Creating each player with id and score initially as 0
    for(let i = 2; i <= numberOfPlayers; i++) {
        arrOfPlayers.push({id: i, score: 0});
    }

    const handleIncrementScore = (id) => {
        setScore(oldScore => {
            return [...oldScore, {id: id, score: oldScore.score + 1}];
        })
    }

    return (
        <div className="mt-2">
            {arrOfPlayers.map((plNum) => {
                return (
                    <div key={plNum.id} className="flex items-center space-x-5 mb-2">
                        <p>Player {plNum.id}: {score.map(sc => <span key={sc.id}>{sc.score}</span>)}</p>
                        <button onClick={() => handleIncrementScore(plNum.id)} className="border border-black p-0.5 rounded cursor-pointer">+1</button>
                    </div>
                )
            })}
        </div>
    )
}