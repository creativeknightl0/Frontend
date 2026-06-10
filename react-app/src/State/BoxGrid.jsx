import { useState } from "react";
import Box from "./Box"

function BoxGrid() {
    const [boxes, setBoxes] = useState([false, false, false, false, false]);

    const handleReset = () => {
        console.log('handle reset function is called')
        setBoxes([false, false, false, false, false]);
    }

    const handleChangeColor = (idx) => {
        setBoxes(prevBoxes => {
                return prevBoxes.map((p, i) => {
                    if(i === idx) {
                        return !p;
                    }
                    else {
                        return p;
                    }
                })
            }
        )
    }

    return (
        <div className="flex gap-2">
            {boxes.map((b, idx) => {
                return (
                    <div key={idx}>
                        <Box changeColor = {() => handleChangeColor(idx)} colorBool = {b} />
                    </div>
                )
            })}

            <button onClick={handleReset} className="border border-black p-2 rounded-md cursor-pointer">Reset</button>
        </div>
    )
}

export default BoxGrid;