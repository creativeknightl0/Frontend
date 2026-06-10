import { useState } from "react";
import { getRolls, sumUp } from "../utils/utils";
import Dice from "./Dice";
import Button from "./Button";

// function LuckyN({ diceCount, goal = 7 }) {
//     const [dice, setDice] = useState(getRolls(diceCount));
//     const sumDiceArr = sumUp(dice);
//     const isWinner = sumDiceArr === goal;

//     const handleRollDice = () => {
//         setDice(getRolls(diceCount));
//     }

//     return (
//         <div>
//             Lucky N Competition {isWinner && "You won darnit!"}
//             <Dice arrNum={dice} />
//             <button onClick={handleRollDice} className="border border-black p-2 rounded-md cursor-pointer">Roll Again</button>
//         </div>
//     )
// }

// export default LuckyN;

// function LuckyN({ diceCount, winCheck }) {
//     const [dice, setDice] = useState(getRolls(diceCount));
//     const isWinner = winCheck(dice);

//     const handleRollDice = () => {
//         setDice(getRolls(diceCount));
//     }

//     return (
//         <div>
//             Lucky N Competition {isWinner && "You won darnit!"}
//             <Dice arrNum={dice} />
//             <button onClick={handleRollDice} className="border border-black p-2 rounded-md cursor-pointer">Roll Again</button>
//         </div>
//     )
// }

// export default LuckyN;

function LuckyN({ title = "Lucky N", diceCount, sameDice }) {
    const [dice, setDice] = useState(getRolls(diceCount));
    const winner = sameDice(dice);

    const handleRollDice = () => {
        setDice(getRolls(diceCount));
    }

    return (
        <div>
            Lucky {title} Competition {winner && "You won darnit!"}
            <Dice arrNum={dice} />
            <Button text="Roll Again" clickFunc={handleRollDice} />
        </div>
    )
}

export default LuckyN;