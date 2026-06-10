import { useState } from "react";
import { getRolls, sumUp } from "../utils/utils"

function Lucky7 () {
    const [dice, setDice] = useState(getRolls(2));
    const sumDice = sumUp(dice);
    const isWinner = sumDice === 7;

    const handleRollAgain = () => {
        setDice(getRolls(2));
    }
    
    return (
        <div className="flex gap-2 flex-col">
            Lucky7 Championship {isWinner && "You won"}
            <div className="p-2 flex border border-black gap-2">
                {dice.map(d => {
                    return (
                        <span className="p-2 border flex rounded text-white bg-[slateblue]">
                            {d}
                        </span>
                    )
                })}
            </div>
            <button className='border border-black p-2 rounded-md cursor-pointer' onClick={handleRollAgain}>Roll Again Baby!</button>
        </div>
    )
}

export default Lucky7;