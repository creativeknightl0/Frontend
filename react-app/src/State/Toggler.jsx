import { useState } from "react"

export default function Toggler() {
    const [isSad, setIsSad] = useState(true);

    const handleToggler = () => {
        console.log('Before set isSad: ' + isSad);
        setIsSad(!isSad);
        console.log('After set isBad: ' + isSad);
    }

    return (
        <p onClick={handleToggler}>{isSad ? '😭': '😊'}</p>
    )
}