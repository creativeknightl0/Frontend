import { useState } from "react";

function BetterSignupForm() {
    const [formData, setFormData] = useState({firstName: '', lastName: '', password: ''});

    // const handleFormData = (e) => {
    //     const targetVal = e.target.value;
    //     const targetName = e.target.name;
    //     setFormData((curr) => {
    //         curr[targetName] = targetVal;
    //         return {...curr};
    //     })
    // }

    // Using computed property names method
    const handleFormData = (e) => {
        const targetVal = e.target.value;
        const targetName = e.target.name;
        setFormData((curr) => {
            return {
                ...curr,
                [targetName]: targetVal
            };
        })
    }

    const handleSubmit = () => {
        console.log(`Submitted ${formData.firstName} ${formData.lastName}'s form`);
    }

    return (
        <div>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" value={formData.firstName} onChange={handleFormData} id="firstname" name="firstName" />

            <label htmlFor="lastname">Last Name:</label>
            <input type="text" value={formData.lastName} onChange={handleFormData} id="lastname" name="lastName" />

            <label htmlFor="password">Password:</label>
            <input type="password" value={formData.password} onChange={handleFormData} id="password" name="password"  />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default BetterSignupForm;