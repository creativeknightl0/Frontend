import { useState } from "react";

export default function Rendering() {
    console.log('Render happened');
    const [music, setMusic] = useState(0);

    const changeMusicQueueCount = () => {
        setMusic(currCount => currCount + 1);
    }

    return (
        <button onClick={changeMusicQueueCount}>Add Music +</button>
    )
}