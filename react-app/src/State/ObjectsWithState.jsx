import { useState } from "react";

// as multiple players tracking scores is difficult using creating many states, so we use objects instead
export default function ObjectsWithState() {
    const [score, setScore] = useState({ player1Sc: 0, player2Sc: 0, player3Sc: 0 });

    // Can't update all three at once, so we need new object in memory
    // const changePlayer1Score = () => {
    //     console.log('Initial score value: ' + score);
    //     setScore({player1Sc: score.player1Sc + 1});
    //     console.log('After set score value of score is: ' + score);
    // }
    // const changePlayer2Score = () => {
    //     console.log('Initial score value: ' + score);
    //     setScore({player2Sc: score.player2Sc + 1});
    //     console.log('After set score value of score is: ' + score);
    // }
    // const changePlayer3Score = () => {
    //     console.log('Initial score value: ' + score);
    //     setScore({player3Sc: score.player3Sc + 1});
    //     console.log('After set score value of score is: ' + score);
    // }

    // create new copies of object using spread operator
    // const changePlayer1Score = () => {
    //     console.log('Initial score value: ' + score);
    //     const newScores = {...score, player1Sc: score.player1Sc + 1};
    //     setScore(newScores);
    //     console.log('After set score value of score is: ' + score);
    // }

    // const changePlayer2Score = () => {
    //     console.log('Initial score value: ' + score);
    //     const newScores = {...score, player2Sc: score.player2Sc + 1};
    //     setScore(newScores);
    //     console.log('After set score value of score is: ' + score);
    // }

    // const changePlayer3Score = () => {
    //     console.log('Initial score value: ' + score);
    //     const newScores = {...score, player3Sc: score.player3Sc + 1};
    //     setScore(newScores);
    //     console.log('After set score value of score is: ' + score);
    // }

    // Now lets use callback function for professionalism sake
    const changePlayer1Score = () => {
        console.log('Initial score value: ' + score);
        setScore((oldScores) => {
            return {...oldScores, player1Sc: oldScores.player1Sc + 1};
        });
        console.log('After set score value of score is: ' + score);
    }

    const changePlayer2Score = () => {
        console.log('Initial score value: ' + score);
        setScore((oldScores) => {
            return {...oldScores, player2Sc: oldScores.player2Sc + 1}
        });
        console.log('After set score value of score is: ' + score);
    }

    const changePlayer3Score = () => {
        console.log('Initial score value: ' + score);
        setScore((oldScores) => {
            return {...oldScores, player3Sc: oldScores.player3Sc + 1};
        });
        console.log('After set score value of score is: ' + score);
    }

    return (
        <div className="flex gap-2">
            <button className='border border-black p-2 rounded-md cursor-pointer' onClick={changePlayer1Score}>Player 1 Score: {score.player1Sc}</button>
            <button className='border border-black p-2 rounded-md cursor-pointer' onClick={changePlayer2Score}>Player 2 Score: {score.player2Sc}</button>
            <button className='border border-black p-2 rounded-md cursor-pointer' onClick={changePlayer3Score}>Player 3 Score: {score.player3Sc}</button>
        </div>
    )
}