import { useState } from "react";

function ProfileSearch({ handleSearch }) {
    const [term, setTerm] = useState('');

    const handleInputChange = (e) => {
        setTerm(e.target.value);
    };

    const handleButtonClick = () => {
        handleSearch(term);
        setTerm('');
    }

    return (
        <div>
            <input type="text" value={term} onChange={handleInputChange} />
            <button className="p-2 border rounded cursor-pointer" onClick={handleButtonClick}>Search</button>
        </div>
    )
}

export default ProfileSearch;