import { useState } from "react";

function Username() {
    const [inpVal, setInpVal] = useState('');

    const handleUsername = (e) => {
        setInpVal(e.target.value);
    }

    return (
        <div className="flex gap-2 items-center mt-2">
            <label htmlFor="username">Username:</label>
            <input 
                id="username"
                type="text"
                placeholder="username"
                className="border"
                value={inpVal}
                onChange={handleUsername}
            />
            <button className="border border-black p-2 rounded-md cursor-pointer">Submit</button>
        </div>
    );
}

export default Username;