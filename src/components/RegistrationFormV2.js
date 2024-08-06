import React from 'react';

const RegistrationFormV2 = () => {
    return (
        <form>
            <h1>Registration Form V2</h1>
            <label>Full Name:</label>
            <input type="text" name="fullName" />
            <label>Email:</label>
            <input type="email" name="email" />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationFormV2;