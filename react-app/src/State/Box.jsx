import { useState } from "react";

function Box({ changeColor, colorBool }) {
    const bgColor = colorBool ? `mt-10 w-16 h-16 bg-red-500 cursor-pointer` : `mt-10 w-16 h-16 bg-black cursor-pointer`;

    return (
        <div>
            <div onClick={changeColor} className={bgColor}></div>
        </div>
    )
}

export default Box;