import { useState } from "react";

function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleSubmit = () => {
        console.log(`Submitted ${firstName} ${lastName}'s form`);
    }

    return (
        <div>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" value={firstName} onChange={handleFirstName} id="firstname" />

            <label htmlFor="lastname">Last Name:</label>
            <input type="text" value={lastName} onChange={handleLastName} id="lastname" />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignupForm;